var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import json from "../assets.json";
export const loadAssets = () => __awaiter(void 0, void 0, void 0, function* () {
    const Images = {};
    const Audios = {};
    const Fonts = {};
    const index = json;
    const promises = [];
    console.log(index);
    index.forEach((e) => promises.push(new Promise((resolve) => {
        switch (e.type) {
            case "image":
                {
                    const image = new Image();
                    image.src = e.src;
                    image.onload = () => {
                        Images[e.name] = image;
                        resolve();
                    };
                }
                break;
            case "audio":
                {
                    const audio = new Audio();
                    audio.src = e.src;
                    audio.onload = () => {
                        Audios[e.name] = audio;
                        resolve();
                    };
                }
                break;
            case "font": {
                (() => __awaiter(void 0, void 0, void 0, function* () {
                    const response = yield fetch(e.src);
                    const cssFontFace = yield response.text();
                    const matchUrls = yield cssFontFace.match(/url\(.+?\)/g);
                    if (!matchUrls)
                        throw new Error("フォントが見つかりませんでした");
                    const promises_sub = [];
                    matchUrls.forEach((f) => {
                        promises_sub.push((() => __awaiter(void 0, void 0, void 0, function* () {
                            const font = new FontFace(e.name, f);
                            yield font.load();
                            Fonts[e.name] = font;
                            yield document.fonts.add(font);
                        }))());
                    });
                    Promise.all(promises_sub);
                }))().then(resolve);
            }
        }
    })));
    yield Promise.all(promises);
    console.log(Fonts);
    return { Images, Audios, Fonts };
});
