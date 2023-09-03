import { apiT } from "./index";

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
            <div class="vertical-center"><div class="igusuri-name">${name}</div></div>
        `;
    }
}

export const main = (API: apiT) => {
    customElements.define("iyowa-meter", IyowaMeter);
    customElements.define("buy-igusuri", BuyIgusuri);
    const iyowa_meter = document.getElementById("iyowa") as IyowaMeter;
    API.update = () => { iyowa_meter.innerText = `${API.iyowa} Iyowa` };
}