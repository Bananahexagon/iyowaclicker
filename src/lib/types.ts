import { Dict, Opt } from "./utils"
type cLibT = {
    stamp: (name: string, dx: number, dy: number, dd?: number, size?: number, absolute?: boolean) => void;
    drawRect: (dx: number, dy: number, width: number, height: number, color: string, direction?: number, type?: 0 | 1) => void;
    drawLine: (lx: number, ly: number, d: number, len: number, width: number, color: string, type?: number) => void;
    drawText: (tx: string, lx: number, ly: number, size: number, color: string, font?: string, align?: "left" | "right" | "center" | "start" | "end") => void;

}

type configT = {
    display_quality: number,
    display_width: number,
    display_height: number,
    canvas_name: string,
}
type Assets = {
    Images: { [keys: string]: HTMLImageElement, },
    Audios: { [keys: string]: HTMLAudioElement, },
}
type CanvasProps = {
    x: number,
    y: number,
    d: number,
    size: number,
}

type CoreT = {
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    Images: Dict<HTMLImageElement>,
    Audios: Dict<HTMLAudioElement>,
    inputKeys: {
        up: boolean, down: boolean, left: boolean, right: boolean, z: boolean, x: boolean, c: boolean,
    };
    inputMouse: { x: number, y: number, clicking: boolean },
    props: Dict<any>,
    cLib: cLibT,
    Sprite: SpriteClassT,
    while: (condition: () => boolean, proc: () => void) => void,
    for: (condition: number, proc: (arg: number) => void, i: number) => void,
    loop: (proc: () => void) => void,
}
class SpriteClass {
    x: number;
    y: number;
    d: number;
    size: number;
    costume: string;
    visible: boolean;
    constructor(x: number, y: number, d: number = 0, size: number = 100, costume: string = "", visible: boolean = false) {
        this.x = x;
        this.y = y;
        this.d = d;
        this.size = size;
        this.costume = costume;
        this.visible = visible;
    }
    stamp(): void { }
    move(far: number): void { }
};
type SpriteClassT = typeof SpriteClass;
const Sprite = new SpriteClass(0, 0);
type SpriteT = typeof Sprite;
export {
    CoreT,
    cLibT,
    configT,
    Assets,
    CanvasProps,
    SpriteClassT,
    SpriteT
}