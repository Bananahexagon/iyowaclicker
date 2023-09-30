import { sin360, cos360 } from "./utils";
export const CanvasLibGen = (canvas, ctx, Images, Fonts, config, props) => {
    const stamp = (name, dx, dy, dd = 0, size = 100, alpha = 1, align = "center", absolute = false) => {
        if (absolute) {
            const costume = Images[name];
            const sw = costume.width;
            const sh = costume.height;
            ctx.globalAlpha = alpha;
            switch (align) {
                case "center":
                    {
                        ctx.save();
                        ctx.translate(dx * config.display_quality, -dy * config.display_quality + canvas.height);
                        ctx.rotate(dd * Math.PI / 180);
                        ctx.drawImage(costume, (-sw * size / 200) * config.display_quality, (-sh * size / 200) * config.display_quality, (sw * size / 100) * config.display_quality, (sh * size / 100) * config.display_quality);
                        ctx.restore();
                    }
                    break;
                case "start": {
                    ctx.save();
                    ctx.translate(dx * config.display_quality, -dy * config.display_quality + canvas.height);
                    ctx.rotate(dd * Math.PI / 180);
                    ctx.drawImage(costume, 0, 0, (sw * size / 100) * config.display_quality, (sh * size / 100) * config.display_quality);
                    ctx.restore();
                }
            }
        }
        else {
            const x = (cos360(props.d) * dx - sin360(props.d) * dy + props.x) * props.size / 100;
            const y = (sin360(props.d) * dx + cos360(props.d) * dy + props.y) * props.size / 100;
            const d = dd + props.d;
            stamp(name, x, y, d, size * props.size / 100, alpha, align, true);
        }
    };
    const drawRect = (dx, dy, width, height, color, direction = 0, type = "center") => {
        ctx.save();
        switch (type) {
            case "center++":
                {
                    ctx.translate(dx * config.display_quality, -dy * config.display_quality + canvas.height);
                    ctx.rotate(direction * Math.PI / 180);
                    ctx.beginPath();
                    ctx.rect((-width / 2) * config.display_quality, (-height / 2) * config.display_quality, (width) * config.display_quality, (height) * config.display_quality);
                }
                break;
            case "center":
                {
                    ctx.translate((dx - width / 2) * config.display_quality, -(dy - height / 2) * config.display_quality + canvas.height);
                    ctx.rotate(direction * Math.PI / 180);
                    ctx.beginPath();
                    ctx.rect(0, 0, (width) * config.display_quality, -(height) * config.display_quality);
                }
                break;
            case "start":
            default:
                {
                    ctx.translate(dx * config.display_quality, -dy * config.display_quality + canvas.height);
                    ctx.rotate(direction * Math.PI / 180);
                    ctx.beginPath();
                    ctx.rect(0, 0, (width) * config.display_quality, -(height) * config.display_quality);
                }
                break;
        }
        ctx.fillStyle = color;
        ctx.fill();
        ctx.restore();
    };
    const drawLine = (lx, ly, d, len, width, color, type = 0) => {
        ctx.beginPath();
        switch (type) {
            case 0:
                {
                    ctx.moveTo((lx - len * Math.sin(d) / 2) * config.display_quality, -(ly + len * Math.cos(d) / 2) * config.display_quality + canvas.height);
                    ctx.lineTo((lx + len * Math.sin(d) / 2) * config.display_quality, -(ly - len * Math.cos(d) / 2) * config.display_quality + canvas.height);
                }
                break;
            case 1:
                {
                    ctx.moveTo(lx * config.display_quality, -ly * config.display_quality + canvas.height);
                    ctx.lineTo((lx + len * Math.sin(d)) * config.display_quality, -(ly - len * Math.cos(d)) * config.display_quality + canvas.height);
                }
                break;
        }
        ctx.strokeStyle = color;
        ctx.lineWidth = width * config.display_quality;
        ctx.stroke();
    };
    const drawText = (tx, lx, ly, size, color, font = "serif", align = "left") => {
        const [x, y] = [lx * config.display_quality, -ly * config.display_quality + canvas.height];
        ctx.font = `${size * config.display_quality}px ${font}`;
        ctx.textAlign = align;
        ctx.fillStyle = color;
        ctx.fillText(tx, x, y);
    };
    return {
        stamp,
        drawRect,
        drawLine,
        drawText,
    };
};
