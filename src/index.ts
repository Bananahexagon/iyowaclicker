import { main as page } from "./page";
import { main as game } from "./game";
export type apiT = {
    iyowa: number,
    update: Function,
}
const API: apiT = { iyowa: 0 , update: ()=>{}};
window.onload = () => { page(API); game(API); };