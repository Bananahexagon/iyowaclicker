import { init } from "./lib/core";
import { CoreT } from "./lib/types";
import { Dict, Opt, sin360 } from "./lib/utils";
import config from "./config.json";

window.onload = async () => {
    const Game: CoreT = await init(config);
    let timer = 0;
    const hexagon = new Game.Sprite(100, 200, 0, 400, "example", true);
    Game.loop(() => {
        Game.ctx.clearRect(0,0,Game.canvas.width,Game.canvas.height)
        hexagon.d = sin360(timer * 2) * 5;
        hexagon.stamp();
        timer++;
    })
};