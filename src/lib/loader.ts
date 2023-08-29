import { Dict } from "./utils";
import {Assets } from "./types";

export const loadAssets = async (): Promise<Assets> => {
    type AssetData = {
        type: "image" | "audio",
        src: string,
        name: string,
    }
    let Images: Dict<HTMLImageElement> = {};
    let Audios: Dict<HTMLAudioElement> = {};

    const index: AssetData[] = (await import("../assets.json")).default as unknown as AssetData[];
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
        }
    })));
    await Promise.all(promises);
    return { Images, Audios };
};