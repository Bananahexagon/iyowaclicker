import { main as page } from "./page";
import { main as game } from "./game";
export type apiT = {
    iyowa: number,
    ipc: number,
    update: Function,
    buy_igusuri: Function,
}
const API: apiT = { iyowa: 0, ipc: 1 ,update: () => { } };
window.onload = () => { page(API); game(API); };