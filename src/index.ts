import { init } from "./lib/core";
import { CoreT } from "./lib/types";
import { Opt } from "./lib/utils";
import config from "./config.json";

window.onload = async () => {
    const Game: CoreT = await init(config);
    let player = new Game.Sprite();
    player.visible = true;
    player.costume = Opt.Some("example");
    Game.loop(() => {
        if (Game.inputKeys.right) player.x += 4;
        if (Game.inputKeys.left) player.x -= 4;
        if (Game.inputKeys.up) player.y += 4;
        if (Game.inputKeys.down) player.y -= 4;
        player.stamp();
    })
};