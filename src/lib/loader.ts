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
            case "font" : {
                let font = new FontFace(e.name, e.src);
                font.load().then(() => {
                    
                    Fonts[e.name] = font;
                    resolve();
                })
            }
        }
    })));
    await Promise.all(promises);
    return { Images, Audios, Fonts };
};