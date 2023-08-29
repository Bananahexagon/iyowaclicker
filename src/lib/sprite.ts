import { CoreT, cLibT,SpriteT } from "./types";
import { Dict, Opt, sin360, cos360 } from "./utils"

export const SpriteLibGen = (cLib: cLibT):SpriteT => {
    class Sprite {
        x: number;
        y: number;
        d: number;
        size: number;
        costume: Opt<string>;
        visible: boolean;
        constructor() {
            this.x = 0;
            this.y = 0;
            this.d = 0;
            this.size = 100;
            this.costume = Opt.None();
            this.visible = false;
        }
        stamp() {
            if (this.costume.is_some && this.visible) {
                cLib.stamp(this.costume.unwrap(), this.x, this.y, this.d, this.size);
            }
        }
        move(far: number) {
            this.x += sin360(this.d) * far;
            this.y += cos360(this.d) * far;
        }
    }
    return Sprite;
}