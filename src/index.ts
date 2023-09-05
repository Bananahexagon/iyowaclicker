import { main as page } from "./page";
import { main as game } from "./game";
export type APIT = {
    iyowa: number,
    ipc: number,
    update: {
        how_many_iyowa: Function,
        price_igusuri: Function
    },
    buy_igusuri: Function,
    girls_nth: number,
    nbought_girls: {
        [keys: string]: HTMLElement
    }
}
const API: APIT = { iyowa: 0, ipc: 1, update: { how_many_iyowa: () => { }, price_igusuri: () => { }, }, buy_igusuri: () => { }, girls_nth: 0 ,nbought_girls: {}};
window.onload = () => { page(API); game(API); };