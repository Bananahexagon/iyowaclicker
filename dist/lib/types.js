class SpriteClass {
    constructor(x, y, d = 0, size = 100, costume = "", visible = false) {
        this.x = x;
        this.y = y;
        this.d = d;
        this.size = size;
        this.costume = costume;
        this.visible = visible;
    }
    stamp() { }
    move(far) { }
}
const Sprite = new SpriteClass(0, 0);
export {};
