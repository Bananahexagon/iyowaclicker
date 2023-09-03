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

export const main = (API: apiT) => {
    customElements.define("iyowa-meter", IyowaMeter);
    const iyowa_meter = document.getElementById("iyowa") as IyowaMeter;
    API.update = () => { iyowa_meter.innerText = `${API.iyowa} Iyowa` };
}