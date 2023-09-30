import { sin360, cos360 } from "./utils";
export const SpriteLibGen = (cLib) => {
    class Sprite {
        constructor(x, y, d = 0, size = 100, costume = "", visible = false) {
            this.x = x;
            this.y = y;
            this.d = d;
            this.size = size;
            this.costume = costume;
            this.visible = visible;
        }
        stamp() {
            if (this.visible) {
                cLib.stamp(this.costume, this.x, this.y, this.d, this.size);
            }
        }
        move(far) {
            this.x += sin360(this.d) * far;
            this.y += cos360(this.d) * far;
        }
    }
    return Sprite;
};
