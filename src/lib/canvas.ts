import { configT, CanvasProps } from "./types";
import { sin360, cos360 } from "./utils";

export const CanvasLibGen = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, Images: { [keys: string]: HTMLImageElement, }, config: configT, props: CanvasProps) => {
    const stamp = (name: string, dx: number, dy: number, dd: number = 0, size: number = 100, absolute = false) => {
        if (absolute) {
            const costume = Images[name];
            const sw = costume.width;
            const sh = costume.height;
            ctx.save();
            ctx.translate(dx * config.display_quality, dy * config.display_quality+ canvas.height);
            ctx.rotate(dd * Math.PI / 180);
            ctx.drawImage(costume, (-sw * size / 200) * config.display_quality, (-sh * size / 200) * config.display_quality, (sw * size / 100) * config.display_quality, (sh * size / 100) * config.display_quality);
            ctx.restore();
        } else {
            const x = + (cos360(props.d) * dx - sin360(props.d) * dy + props.x) * props.size / 100;
            const y = + (-sin360(props.d) * dx - cos360(props.d) * dy + props.x) * props.size / 100;
            const d = dd + props.d;
            stamp(name, x, y, d, size * props.size / 100, true);
        }
    };
    const drawRect = (dx: number, dy: number, width: number, height: number, color: string, direction: number = 0, type: 0 | 1 = 1) => {
        ctx.save();
        ctx.translate((dx + width * type / 2) * config.display_quality, (dy + height * type / 2) * config.display_quality);
        ctx.rotate(direction * Math.PI / 180);
        ctx.beginPath();
        ctx.rect((-width * type / 2) * config.display_quality, (-height * type / 2) * config.display_quality, (width) * config.display_quality, (height) * config.display_quality);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.restore();
    };
    const drawLine = (lx: number, ly: number, d: number, len: number, width: number, color: string, type: number = 0) => {
        ctx.beginPath();
        switch (type) {
            case 0: {
                ctx.moveTo((lx - len * Math.sin(d) / 2) * config.display_quality, (ly + len * Math.cos(d) / 2) * config.display_quality);
                ctx.lineTo((lx + len * Math.sin(d) / 2) * config.display_quality, (ly - len * Math.cos(d) / 2) * config.display_quality);
            } break;
            case 1: {
                ctx.moveTo(lx * config.display_quality, ly * config.display_quality);
                ctx.lineTo((lx + len * Math.sin(d)) * config.display_quality, (ly - len * Math.cos(d)) * config.display_quality);
            } break;
        }
        ctx.strokeStyle = color;
        ctx.lineWidth = width * config.display_quality;
        ctx.stroke();
    }
    return {
        stamp,
        drawRect,
        drawLine,
    }
}