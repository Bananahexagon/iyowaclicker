import { SpriteT } from "./lib/types";
import { OpusModGen } from "./opus";

type apiT = {
    iyowa: number,
    ipc: number,
    ips: number,
    shop_tab: string,
}

class OpusForType {
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
    girl: {
        name: string;
        image: string;
        price: number;
        perf: number;
        price_ratio: number;
        level: number;
    }
    constructor(name_i: string, name_g: string, image_i: string, image_g: string, price: number, price_ratio: number, perf_ratio: number) {
        this.igusuri = {
            name: name_i,
            image: image_i,
            price: price,
            price_real: price,
            perf: 0,
            perf_real: 1,
            price_ratio: price_ratio,
            perf_ratio: perf_ratio,
            level: 1
        };
        this.girl = {
            name: name_g,
            image: image_g,
            price: price,
            perf: 0,
            price_ratio: 10,
            level: 0,
        }
    }
    buy_igusuri() {
    }
    buy_girl() {
    }
}
const _ = new OpusForType("", "", "", "", 0, 0, 0);
type OpusT = typeof _;

export {
    apiT,
    OpusT
};