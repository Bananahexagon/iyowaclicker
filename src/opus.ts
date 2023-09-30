import { SpriteT } from "./lib/types";
import { apiT, OpusT } from "./types";

const OpusModGen = (API: apiT, iyowa: SpriteT) => {
    class Opus {
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
        buy_igusuri() {
            API.iyowa -= this.igusuri.price;
            this.igusuri.perf_real = this.igusuri.perf_real * this.igusuri.perf_ratio
            this.igusuri.price_real = this.igusuri.price_real * this.igusuri.price_ratio;
            this.igusuri.price = Math.floor(this.igusuri.price_real);
            this.igusuri.perf = Math.floor(this.igusuri.perf_real) - 1;
            this.igusuri.level += 1;
        }
    }
    return Opus
}

export { OpusModGen };