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
    class IgusuriPanel {
        name: string;
        image: string;
        price: number;
        price_real: number;
        perf: number;
        perf_real: number
        price_ratio: number;
        perf_ratio: number;
        level: number;
        constructor(name: string, image: string, price: number, price_ratio: number, perf_ratio: number) {
            this.name = name;
            this.image = image;
            this.price = price;
            this.price_real = price;
            this.perf = 1;
            this.perf_real = 1;
            this.price_ratio = price_ratio;
            this.perf_ratio = perf_ratio;
            this.level = 1;
        }
    }

    const iyowa = new Game.Sprite(160, 240, 0, 100, "iyowa", true);
    const small_iyowas: Dict<SmallIyowa> = {};
    let API = {
        iyowa: 0,
        ipc: 1,
        ips: 0,
        shop_tab: "igusuri",
        igusuri_s: [
            new IgusuriPanel("きゅうくらりん", "igusuri_kk", 10, 1.3, 1.25),
            new IgusuriPanel("あだぽしゃ", "igusuri_ap", 10, 1.3, 1.25),
            new IgusuriPanel("1000年生きてる", "igusuri_lm", 10, 1.3, 1.25),
            new IgusuriPanel("くろうばあないと", "igusuri_kn", 10, 1.3, 1.25),
        ],
    }
    window.addEventListener("mousedown", (e) => {
        if (distance(iyowa.x, iyowa.y, Game.inputMouse.x, Game.inputMouse.y,) < 70) {
            small_iyowas[timer] = new SmallIyowa(Game.inputMouse.x, Game.inputMouse.y, 0, Math.random() * 9 - 3, Math.random() * 7 + 6, Math.random() * 10, 100);
            iyowa.size += 30;
            API.iyowa += API.ipc;
        } else if (Game.inputMouse.clicking) {
            if (Game.inputMouse.is_in_rect(400, 345, 160, 30, "center")) {
                API.shop_tab = "igusuri";
            } else if (Game.inputMouse.is_in_rect(560, 345, 160, 30, "center")) {
                API.shop_tab = "girls";
            } else if (Game.inputMouse.is_in_rect(720, 345, 160, 30, "center")) {
                API.shop_tab = "gacha";
            } else {
                for (let i = 0; i < API.igusuri_s.length; i++) {
                    const igusuri = API.igusuri_s[i];
                    if (Game.inputMouse.is_in_rect(480, 290 - i * 60, 300, 60, "center") && igusuri.price <= API.iyowa) {
                        API.iyowa -= igusuri.price
                        let b = igusuri.perf;
                        igusuri.perf_real = igusuri.perf_real * igusuri.perf_ratio
                        igusuri.price_real = igusuri.price_real * igusuri.price_ratio;
                        igusuri.price = Math.floor(igusuri.price_real);
                        igusuri.perf = Math.floor(igusuri.perf_real);
                        API.ipc += (igusuri.perf - b);
                        igusuri.level += 1;
                    };
                }
            }
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
        Game.cLib.drawText(`${API.iyowa} iyowa`, 160, 430, 30, "white", "serif", "center");
        Game.cLib.drawText(`${API.ipc} ipc`, 160, 405, 20, "white", "serif", "center");
        Game.cLib.drawText(`${API.ips} ips`, 160, 380, 20, "white", "serif", "center");
        Game.cLib.drawRect(320, 0, 480, 480, "#b88e98", 0, "start");
        Game.cLib.drawRect(400, 345, 160, 30, API.shop_tab == "igusuri" ? "#eee" : "#fff", 0, "center++");
        Game.cLib.drawRect(560, 345, 160, 30, API.shop_tab == "girls" ? "#eee" : "#fff", 0, "center++");
        Game.cLib.drawRect(720, 345, 160, 30, API.shop_tab == "gacha" ? "#eee" : "#fff", 0, "center++");
        Game.cLib.drawText("Shop", 560, 400, 50, "white", "serif", "center");
        Game.cLib.drawText("igusuri", 400, 340, 20, "black", "serif", "center");
        Game.cLib.drawText("girls", 560, 340, 20, "black", "serif", "center");
        Game.cLib.drawText("gacha", 720, 340, 20, "black", "serif", "center");
        switch (API.shop_tab) {
            case "igusuri": {
                Game.cLib.drawRect(320, 0, 480, 330, "#a87e88", 0, "start");
                for (let i = 0; i < API.igusuri_s.length; i++) {
                    const igusuri = API.igusuri_s[i];
                    if (Game.inputMouse.is_in_rect(560, 290 - i * 60, 440, 60, "center")) {
                        Game.cLib.drawRect(560, 290 - i * 60, 460, 60, "#c89ea8", 0, "center++")
                    } else {
                        Game.cLib.drawRect(560, 290 - i * 60, 460, 60, "#b88e98", 0, "center++")
                    };
                    Game.cLib.stamp(igusuri.image, 360, 290 - i * 60, 0, 200);
                    Game.cLib.drawText(igusuri.name, 400, 295 - i * 60, 20, "white", "Zen Kurenaido", "start");
                    Game.cLib.drawText(`Lv: ${igusuri.level} | price: ${igusuri.price} iyowa`, 400, 270 - i * 60, 15, "white", "Serif", "start");
                }
            }
        }
    })
};