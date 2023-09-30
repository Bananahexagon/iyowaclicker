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
    constructor(name: string, image: string, price: number, price_ratio: number, perf_ratio: number) {
        this.igusuri = {
            name: "",
            image: "",
            price: 0,
            price_real: 0,
            perf: 0,
            perf_real: 1,
            price_ratio: 0,
            perf_ratio: 0,
            level: 1
        };
    }
    buy_igusuri() { }
}
const _ = new OpusForType("", "", 0, 0, 0);
type OpusT = typeof _;

export {
    apiT,
    OpusT
};