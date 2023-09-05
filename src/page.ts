import { createElement } from "react";
import { APIT } from "./index";

class IyowaMeter extends HTMLElement {
    count: number;
    constructor() {
        super()
        this.count = 0;
    }

    connectedCallback() {
        this.innerText = `${this.count} Iyowa`
    }
}

class BuyIgusuri extends HTMLElement {
    type: string;
    constructor() {
        super()
        this.type = this.getAttribute("type")!;
    }

    connectedCallback() {
        const name = {
            "kk": "胃薬（きゅうくらりん）",
            "ap": "胃薬（あだぽしゃ）",
            "kn": "胃薬（くろうばあないと）",
            "lm": "胃薬（1000年生きてる）",
        }[this.type];
        this.innerHTML = `
            <div class="vertical-center"><img src="./assets/igusuri_${this.type}.png"></div>
            <div class="vertical-center"><div class="igusuri-name">${name}Iyowa</div></div>
        `;
    }
}

const create_igusuri_panel = (char: string, API: APIT) => {
    const igusuri_tag = ElementFromHTML(`<buy-igusuri type="${char}"></buy-igusuri>`);
    igusuri_tag.addEventListener("click", () => {
        if (100 * 6 ** API.girls_nth <= API.iyowa) {
            API.iyowa -= 100 * 6 ** API.girls_nth;
            API.ipc *= 5;
            API.girls_nth++;
            igusuri_tag.remove();
            API.update.price_igusuri();
            delete API.nbought_girls[char]
            API.update.how_many_iyowa();
        }
    })
    const right_part = document.getElementById("right-part");
    right_part?.insertAdjacentElement("afterbegin", igusuri_tag)
    API.nbought_girls[char] = igusuri_tag;
}

const ElementFromHTML = (code: string) => {
    const parent = document.createElement("div");
    parent.insertAdjacentHTML("afterbegin", code);
    return parent.firstElementChild as HTMLElement;
}

export const main = (API: APIT) => {
    customElements.define("iyowa-meter", IyowaMeter);
    customElements.define("buy-igusuri", BuyIgusuri);
    create_igusuri_panel("kk", API);
    create_igusuri_panel("ap", API);
    create_igusuri_panel("kn", API);
    create_igusuri_panel("lm", API);
    const iyowa_meter = document.getElementById("iyowa") as IyowaMeter;
    API.update.how_many_iyowa = () => { iyowa_meter.innerText = `${API.iyowa} Iyowa` };
    API.update.price_igusuri = () => {
        for (const key in API.nbought_girls) {
            if (Object.prototype.hasOwnProperty.call(API.nbought_girls, key)) {
                const element = API.nbought_girls[key];
                const name = {
                    "kk": "胃薬（きゅうくらりん）",
                    "ap": "胃薬（あだぽしゃ）",
                    "kn": "胃薬（くろうばあないと）",
                    "lm": "胃薬（1000年生きてる）",
                }[key];
                (element.lastElementChild!.firstElementChild! as HTMLElement).innerText = `${name}\n  ${100 * 6 ** API.girls_nth} Iyowa / * 5 Iyowa per click`
            }
        }
    }
    API.update.price_igusuri();
}