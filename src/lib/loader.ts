import { Dict } from "./utils";
import { Assets } from "./types";
import json from "../assets.json";

export const loadAssets = async (): Promise<Assets> => {
    type AssetData = {
        type: "image" | "audio" | "font",
        src: string,
        name: string,
    }
    let Images: Dict<HTMLImageElement> = {};
    let Audios: Dict<HTMLAudioElement> = {};
    let Fonts: Dict<FontFace> = {};
    const index: AssetData[] = json as unknown as AssetData[];
    let promises: Promise<void>[] = [];
    console.log(index)
    index.forEach((e: AssetData) => promises.push(new Promise((resolve) => {
        switch (e.type) {
            case "image": {
                let image = new Image();
                image.src = e.src;
                image.onload = () => {
                    Images[e.name] = image;
                    resolve();
                }
            } break;
            case "audio": {
                let audio = new Audio();
                audio.src = e.src;
                audio.onload = () => {
                    Audios[e.name] = audio;
                    resolve();
                }
            } break;
            case "font": {
                (async () => {
                    const response = await fetch(e.src);
                    const cssFontFace = await response.text();
                    const matchUrls = await cssFontFace.match(/url\(.+?\)/g);
                    if (!matchUrls) throw new Error("フォントが見つかりませんでした");
                    let promises_sub: Promise<void>[] = [];
                    matchUrls.forEach((f) => {
                        promises_sub.push(
                            (async () => {
                                const font = new FontFace(e.name, f);
                                await font.load();
                                Fonts[e.name] = font;
                                await document.fonts.add(font);
                            })()
                        )
                    });
                    Promise.all(promises_sub)
                })().then(resolve)
            }
        }
    })));
    await Promise.all(promises);
    console.log(Fonts);
    return { Images, Audios, Fonts };
};