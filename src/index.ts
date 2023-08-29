import { init } from "./lib/core";
import { CoreT } from "./lib/types";
import config from "./config.json";

window.onload = async () => {
    const Game: CoreT = await init(config);
};