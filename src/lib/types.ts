import { Dict, Opt } from "./utils"
type cLibT = {
    drawRect: (dx: number, dy: number, width: number, height: number, color: string, direction?: number, type?: 0 | 1) => void;
    drawLine: (lx: number, ly: number, d: number, len: number, width: number, color: string, type?: number) => void;
    [keys: string]: Function;
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
    props: Dict<any>,
    cLib: cLibT,
    Sprite: SpriteT,
}
let tmp = class {
    x: number;
    y: number;
    d: number;
    size: number;
    costume: Opt<string>;
    visible: boolean;
    constructor() {
        this.x = 0;
        this.y = 0;
        this.d = 0;
        this.size = 100;
        this.costume = Opt.None();
        this.visible = false;
    }
    stamp(): void { }
    move(far: number): void { }
};
type SpriteT = typeof tmp;


export {
    CoreT,
    cLibT,
    configT,
    Assets,
    CanvasProps,
    SpriteT,
}