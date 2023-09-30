import { init } from "./lib/core";
import { CoreT, SpriteT, bool } from "./lib/types";
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
    class Package {
        igusuri: {
            name: string;
            image: string;
            price: number;
            price_real: number;
            perf: number;
            perf_real: number
            price_ratio: number;
            perf_ratio: number;
            level: number;
        }
        constructor(name: string, image: string, price: number, price_ratio: number, perf_ratio: number) {
            this.igusuri = {
                name: name,
                image: image,
                price: price,
                price_real: price,
                perf: 0,
                perf_real: 1,
                price_ratio: price_ratio,
                perf_ratio: perf_ratio,
                level: 1
            };
        }
    }

    const iyowa = new Game.Sprite(160, 240, 0, 100, "iyowa", true);
    const small_iyowas: Dict<SmallIyowa> = {};
    const API = {
        iyowa: 0,
        ipc: 1,
        ips: 0,
        shop_tab: "igusuri",
        packages: [
            new Package("きゅうくらりん", "igusuri_kk", 10, 1.3, 1.25),
            new Package("あだぽしゃ", "igusuri_ap", 10, 1.3, 1.25),
            new Package("1000年生きてる", "igusuri_lm", 10, 1.3, 1.25),
            new Package("くろうばあないと", "igusuri_kn", 10, 1.3, 1.25),
        ],
    };
    const Achieve = (() => {
        type objT = { title: string, explain: string, age: number, life: number };
        const dict: Dict<objT> = {};
        const render_queue: objT[] = [];
        const unlock = (id: string, name: string, explain: string) => {
            if (dict[id] === undefined) {
                const obj: objT = {
                    title: name,
                    explain: explain,
                    age: 0,
                    life: 600,
                }
                dict[id] = obj;
                render_queue.push(obj);
                console.log(`実績"${name}"を解除しました。`);
            }
        };
        const check = () => {
            if (1 <= API.iyowa) {
                unlock("test_1", "テスト実績1", "テスト実績1の説明文");
            }
            if (2 <= API.iyowa) {
                unlock("test_2", "テスト実績2", "テスト実績2の説明文");
            }
            if (3 <= API.iyowa) {
                unlock("test_3", "テスト実績3", "テスト実績3の説明文");
            }
            if (4 <= API.iyowa) {
                unlock("test_4", "テスト実績4", "テスト実績4の説明文");
            }
            if (5 <= API.iyowa) {
                unlock("test_5", "テスト実績5", "テスト実績5の説明文");
            }
            if (148 <= API.iyowa) {
                unlock("iyowa_1", "胃が弱いからいよわです", "解放条件:148いよわ生産する");
            }
        };
        return {
            dict,
            render_queue,
            check,
            unlock,
        }
    })();
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
                API.ipc = 1;
                for (let i = 0; i < API.packages.length; i++) {
                    const igusuri = API.packages[i].igusuri;
                    if (Game.inputMouse.is_in_rect(480, 290 - i * 60, 300, 60, "center") && igusuri.price <= API.iyowa) {
                        API.iyowa -= igusuri.price
                        const b = igusuri.perf;
                        igusuri.perf_real = igusuri.perf_real * igusuri.perf_ratio
                        igusuri.price_real = igusuri.price_real * igusuri.price_ratio;
                        igusuri.price = Math.floor(igusuri.price_real);
                        igusuri.perf = Math.floor(igusuri.perf_real) - 1;
                    }
                    API.ipc += igusuri.perf;
                }
            }
        }
    })
    Game.loop(() => {
        timer++;
        iyowa.d = sin360(timer * 2) * 5;
        iyowa.size = Math.max(75, 40 + iyowa.size * 0.6);
        Achieve.check();
        if (Game.inputKeys.d) API.ipc += 100;
        //ここから下は描画
        Game.ctx.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
        iyowa.stamp();
        for (const i in small_iyowas) {
            const e = small_iyowas[i];
            if (!(e.age < e.life)) delete small_iyowas[i];
            else {
                e.proc();
                e.stamp();
            }
        }
        Game.cLib.drawText(`${API.iyowa.toLocaleString()} iyowa`, 160, 430, 30, "white", "serif", "center");
        Game.cLib.drawText(`${API.ipc.toLocaleString()} ipc`, 160, 405, 20, "white", "serif", "center");
        Game.cLib.drawText(`${API.ips.toLocaleString()} ips`, 160, 380, 20, "white", "serif", "center");
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
                for (let i = 0; i < API.packages.length; i++) {
                    const igusuri = API.packages[i].igusuri;
                    if (Game.inputMouse.is_in_rect(560, 290 - i * 60, 440, 60, "center")) {
                        Game.cLib.drawRect(560, 290 - i * 60, 460, 60, "#c89ea8", 0, "center++")
                    } else {
                        Game.cLib.drawRect(560, 290 - i * 60, 460, 60, "#b88e98", 0, "center++")
                    }
                    Game.cLib.stamp(igusuri.image, 360, 290 - i * 60, 0, 200);
                    Game.cLib.drawText(igusuri.name, 400, 295 - i * 60, 20, "white", "Zen Kurenaido", "start");
                    Game.cLib.drawText(`Lv: ${igusuri.level.toLocaleString()} | price: ${igusuri.price.toLocaleString()} iyowa`, 400, 270 - i * 60, 15, "white", "Serif", "start");
                }
            }
        }
        for (let i = 0; i < Math.min(3, Achieve.render_queue.length); i++) {
            const achieve = Achieve.render_queue[i];
            achieve.age += 1;
            if (achieve.life < achieve.age) {
                Achieve.render_queue.shift();
                i -= 1;
                continue;
            }
            const alpha = ((age, life) => {
                if (age < 10) return age / 10
                else if (life - 10 < age) return (life - age) / 10
                else return 1
            })(achieve.age, achieve.life);
            Game.cLib.stamp("achieve_box", 160, 90 + i * 120, 0, 65, alpha, "center");
            Game.cLib.drawText(achieve.title, 160, 110 + i * 120, 20, "black", "Zen Kurenaido", "center");
            Game.cLib.drawText(`${achieve.explain}`, 25, 85 + i * 120, 15, "black", "Zen Kurenaido", "start");
        }
    })
};