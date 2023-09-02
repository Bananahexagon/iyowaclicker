import { init } from "./lib/core";
import { CoreT, SpriteT } from "./lib/types";
import { Dict, Opt, sin360, distance } from "./lib/utils";
import config from "./config.json";

window.onload = async () => {
    const Game: CoreT = await init(config);
    class SmallHexagon extends Game.Sprite {
        jump_x: number;
        jump_y: number;
        jump_d: number;
        age: number;
        life: number;
        constructor(x: number, y: number, d: number, jx: number, jy: number, jd: number, life: number) {
            super(x, y, d, 100, "example", true);
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
            this.jump_y -= 1;
            this.age += 1;
        }
    }
    let timer = 0;
    const hexagon = new Game.Sprite(100, 200, 0, 400, "example", true);
    const small_hexagons: Dict<SmallHexagon> = {};
    window.addEventListener("mousedown", (e) => {
        if (distance(hexagon.x, hexagon.y, Game.inputMouse.x, Game.inputMouse.y,) < 70) {
            small_hexagons[timer] = new SmallHexagon(Game.inputMouse.x, Game.inputMouse.y, 0, Math.random() * 6 - 3, Math.random() * 7 + 3, Math.random() * 5, 60);
            hexagon.size -= 50;
        }
    })
    Game.loop(() => {
        Game.ctx.clearRect(0, 0, Game.canvas.width, Game.canvas.height)
        hexagon.d = sin360(timer * 2) * 5;
        hexagon.stamp();
        timer++;
        hexagon.size = 280 + hexagon.size * 0.3
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