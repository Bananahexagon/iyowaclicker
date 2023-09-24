import { init } from "./lib/core";
import { CoreT, SpriteT } from "./lib/types";
import { Dict, Opt, sin360, distance } from "./lib/utils";
import config from "./config.json";

export const main = async () => {
    const Game: CoreT = await init(config);
    let timer = 0;
    class SmallIyowa extends Game.Sprite {
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
    const iyowa = new Game.Sprite(160, 240, 0, 100, "iyowa", true);
    const small_iyowas: Dict<SmallIyowa> = {};
    let API = {
        iyowa: 0,
        ipc: 1,
        ips: 0,
    }
    window.addEventListener("mousedown", (e) => {
        if (distance(iyowa.x, iyowa.y, Game.inputMouse.x, Game.inputMouse.y,) < 70) {
            small_iyowas[timer] = new SmallIyowa(Game.inputMouse.x, Game.inputMouse.y, 0, Math.random() * 9 - 3, Math.random() * 7 + 6, Math.random() * 10, 100);
            iyowa.size += 30;
            API.iyowa += API.ipc;
        }
    })
    Game.loop(() => {
        Game.ctx.clearRect(0, 0, Game.canvas.width, Game.canvas.height)
        iyowa.d = sin360(timer * 2) * 5;
        iyowa.size = Math.max(75, 40 + iyowa.size * 0.6)
        iyowa.stamp();
        timer++;
        for (const i in small_iyowas) {
            const e = small_iyowas[i];
            if (!(e.age < e.life)) delete small_iyowas[i];
            else {
                e.proc();
                e.stamp();
            }
        }
        Game.cLib.drawText(`${API.iyowa} iyowa`, 160, 50, 30, "white", "serif", "center");
        Game.cLib.drawText(`${API.ipc} ipc`, 160, 75, 20, "white", "serif", "center");
        Game.cLib.drawText(`${API.ips} ips`, 160, 100, 20, "white", "serif", "center");
        Game.cLib.drawText(`Shop`, 480, 80, 50, "white", "serif", "center");
        Game.cLib.drawRect(400, 135, 150, 30, "white", 0, "center");
        Game.cLib.drawRect(560, 135, 150, 30, "white", 0, "center");
        Game.cLib.drawText(`igusuri`, 400, 140, 20, "black", "serif", "center");
        Game.cLib.drawText(`girls`, 560, 140, 20, "black", "serif", "center");
    })
};