export const PositionLibGen = (canvas, config, props) => {
    const raw_to_stage = (rx, ry, rd = 0) => {
        const rect = canvas.getBoundingClientRect();
        const x = ((rx - rect.left) / props.size * 100 - props.x) * config.stage_width / config.display_width;
        const y = (config.display_height - ((ry - rect.top) / props.size * 100 - props.y)) * config.stage_height / config.display_height;
        const d = rd + props.d;
        return {
            x, y, d
        };
    };
    return {
        raw_to_stage
    };
};
const stamp = (name, dx, dy, dd = 0, size = 100, absolute = false) => {
    const [props_x, props_y, props_size] = [0, 0, 0];
    const x = (dx + props_x) * props_size / 100;
    const y = (dy + props_y) * props_size / 100;
    const [display_quality, height] = [0, 0];
    const [pair_x, pair_y] = [x * display_quality, -y * display_quality + height];
    const [raw_x, raw_y] = [pair_x / display_quality, -(pair_y - height) / display_quality];
};
