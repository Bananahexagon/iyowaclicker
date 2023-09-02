import { Dict } from "./utils";
import { CoreT, configT, cLibT } from "./types";
import { frameWhile, frameFor, frameLoop } from "./frame";
import { loadAssets } from "./loader";
import { CanvasLibGen } from "./canvas";
import { SpriteLibGen } from "./sprite";
import { PositionLibGen } from "./position";

export const init = async (config: configT): Promise<CoreT> => {
    const canvas = document.getElementById(config.canvas_name) as HTMLCanvasElement;
    canvas.height = config.display_height * config.display_quality;
    canvas.width = config.display_width * config.display_quality;
    const ctx = canvas.getContext("2d")!;
    const { Images, Audios } = await loadAssets();
    const inputKeys = {
        up: false, down: false, left: false, right: false, z: false, x: false, c: false,
    };
    const inputMouse = {
        x: 0, y: 0, clicking: false
    }
    const props = {
        canvas: {
            size: 100,
            x: 0,
            y: 0,
            d: 0,
        },
    };
    const cLib: cLibT = CanvasLibGen(canvas, ctx, Images, config, props.canvas);
    const Sprite = SpriteLibGen(cLib);

    ctx.imageSmoothingEnabled = false;
    const pLib = PositionLibGen(canvas, config, props.canvas);
    window.addEventListener("keydown", e => {
        switch (e.key) {
            case "ArrowUp":
                inputKeys.up = true;
                break;
            case "ArrowDown":
                inputKeys.down = true;
                break;
            case "ArrowLeft":
                inputKeys.left = true;
                break;
            case "ArrowRight":
                inputKeys.right = true;
                break;
            case "z":
            case "Z":
                inputKeys.z = true;
                break;
            case "x":
            case "X":
                inputKeys.x = true;
                break;
            case "c":
            case "C":
                inputKeys.c = true;
        }
    });
    window.addEventListener("keyup", e => {
        switch (e.key) {
            case "ArrowUp":
                inputKeys.up = false;
                break;
            case "ArrowDown":
                inputKeys.down = false;
                break;
            case "ArrowLeft":
                inputKeys.left = false;
                break;
            case "ArrowRight":
                inputKeys.right = false;
                break;
            case "z":
            case "Z":
                inputKeys.z = false;
                break;
            case "x":
            case "X":
                inputKeys.x = false;
                break;
            case "c":
            case "C":
                inputKeys.c = false;
        }
    });
    canvas.addEventListener("mousedown", e => {
        inputMouse.clicking = true;
        const p = pLib.raw_to_display(e.x, e.y);
        inputMouse.x = p.x;
        inputMouse.y = p.y;
    });
    canvas.addEventListener("mousemove", e => {
        const p = pLib.raw_to_display(e.x, e.y);
        inputMouse.x = p.x;
        inputMouse.y = p.y;

    });
    canvas.addEventListener("mouseup", e => {
        inputMouse.clicking = false;
        const p = pLib.raw_to_display(e.x, e.y);
        inputMouse.x = p.x;
        inputMouse.y = p.y;
    });
    return {
        canvas,
        ctx,
        Images,
        Audios,
        inputKeys,
        inputMouse,
        props,
        cLib,
        Sprite,
        for: frameFor,
        while: frameWhile,
        loop: frameLoop,
    }
}