import { CoreT } from "./lib/types";
import { Dict } from "./lib/utils";
import { apiT } from "./types";

export const AchieveModGen = ((Game: CoreT, API: apiT) => {
    type objT = { title: string, explain: string, age: number, life: number };
    const dict: Dict<objT> = {};
    const render_queue: objT[] = [];
    const unlock = (id: string, name: string, explain: string) => {
        if (dict[id] === undefined) {
            const obj: objT = {
                title: name,
                explain: explain,
                age: 0,
                life: 100,
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
    const render = () => {
        for (let i = 0; i < Math.min(3, render_queue.length); i++) {
            const achieve = render_queue[i];
            achieve.age += 1;
            if (achieve.life < achieve.age) {
                render_queue.shift();
                i -= 1;
                continue;
            }
            const alpha = ((age, life) => {
                if (age < 15) return age / 15
                else if (life - 15 < age) return (life - age) / 15
                else return 1
            })(achieve.age, achieve.life);
            Game.cLib.stamp("achieve_box", 160, 90 + i * 120, 0, 65, alpha, "center");
            Game.cLib.drawText(achieve.title, 160, 110 + i * 120, 20, "black", "Zen Kurenaido", "center");
            Game.cLib.drawText(`${achieve.explain}`, 25, 85 + i * 120, 15, "black", "Zen Kurenaido", "start");
        }
    }
    return {
        dict,
        render_queue,
        check,
        unlock,
        render,
    }
});