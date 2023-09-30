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
        girl: {
            name: string;
            image: string;
            price: number;
            perf: number;
            price_ratio: number;
            level: number;
        }
        constructor(name_i: string,name_g:string, image_i: string,image_g:string, price: number, price_ratio: number, perf_ratio: number) {
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
                price_ratio: 100,
                level: 0,
            }
        }
        buy_igusuri() {
            API.iyowa -= this.igusuri.price;
            this.igusuri.perf_real = this.igusuri.perf_real * this.igusuri.perf_ratio
            this.igusuri.price_real = this.igusuri.price_real * this.igusuri.price_ratio;
            this.igusuri.price = Math.floor(this.igusuri.price_real);
            this.igusuri.perf = Math.floor(this.igusuri.perf_real) - 1;
            this.igusuri.level += 1;
        }
        buy_girl() {
            API.iyowa -= this.girl.price;
            this.girl.perf += 0.1;
            this.girl.price = this.girl.price * this.girl.price_ratio;
            this.girl.level += 1;
        }
    }
    return Opus
}

export { OpusModGen };