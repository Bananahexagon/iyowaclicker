import { init } from "./lib/core";
import { CoreT, SpriteT } from "./lib/types";
import { Dict, Opt, sin360, distance } from "./lib/utils";
import config from "./config.json";
import { apiT } from "./index";

export const main = async (API: apiT) => {
    const Game: CoreT = await init(config);
    let timer = 0;
    class SmallHexagon extends Game.Sprite {
        jump_x: number;
        jump_y: number;
        jump_d: number;
        age: number;
        life: number;
        constructor(x: number, y: number, d: number, jx: number, jy: number, jd: number, life: number) {
            super(x, y, d, 20, "iyowa", true);
            this.jump_x = jx;
            this.jump_y = jy;
            this.jump_d = jd;
            this.age = 0;
            this.life = life;
        }
        proc() {
            this.x += this.jump_x;
            this.y += this.jump_y;
            this.d += this.jump_d;
            this.jump_y -= 0.5;
            this.age += 1;
        }
    }
    const hexagon = new Game.Sprite(160, 240, 0, 100, "iyowa", true);
    const small_hexagons: Dict<SmallHexagon> = {};
    window.addEventListener("mousedown", (e) => {
        if (distance(hexagon.x, hexagon.y, Game.inputMouse.x, Game.inputMouse.y,) < 70) {
            small_hexagons[timer] = new SmallHexagon(Game.inputMouse.x, Game.inputMouse.y, 0, Math.random() * 9 - 3, Math.random() * 7 + 6, Math.random() * 10, 100);
            hexagon.size -= 30;
            API.iyowa += 1;
            API.update();
        }
    })
    Game.loop(() => {
        Game.ctx.clearRect(0, 0, Game.canvas.width, Game.canvas.height)
        hexagon.d = sin360(timer * 2) * 5;
        hexagon.size = Math.max(75, 40 + hexagon.size * 0.6)
        hexagon.stamp();
        timer++;
        for (const i in small_hexagons) {
            const e = small_hexagons[i];
            if (!(e.age < e.life)) delete small_hexagons[i];
            else {
                e.proc();
                e.stamp();
            }
        }
    })
};