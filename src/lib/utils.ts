
class Opt<T> {
    is_some: boolean;
    value: T | undefined;
    constructor(is_some: boolean, value: T | undefined = undefined) {
        this.is_some = is_some;
        this.value = value;
    }
    unwrap(): T {
        if (this.is_some) {
            return this.value!;
        } else {
            throw new Error();
        }
    }
    unwrap_or(arg: T): T {
        if (this.is_some) {
            return this.value!;
        } else {
            return arg;
        }
    }
    unwrap_or_else(fn: () => T): T {
        if (this.is_some) {
            return this.value!;
        } else {
            return fn();
        }
    }
    static None<T>() {
        return new Opt<T>(false);
    }
    static Some<T>(arg: T) {
        return new Opt<T>(true, arg);
    }
}

class Res<Ok, Err> {
    is_ok: boolean;
    value: Ok | Err | undefined;
    constructor(is_ok: boolean, value: Ok | Err | undefined = undefined) {
        this.is_ok = is_ok;
        this.value = value;
    }
    unwrap(): Ok {
        if (this.is_ok) {
            return this.value as Ok;
        } else {
            throw new Error(this.value as Err as string);
        }
    }
    unwrap_or(arg: Ok): Ok {
        if (this.is_ok) {
            return this.value as Ok;
        } else {
            return arg;
        }
    }
    unwrap_or_else(fn: (arg0: Err) => Ok): Ok {
        if (this.is_ok) {
            return this.value as Ok;
        } else {
            return fn(this.value as Err);
        }
    }
}


type Dict<T> = {
    [keys: string]: T,
}

const sin360 = (d: number) => Math.sin(d / 360 * Math.PI * 2);
const cos360 = (d: number) => Math.cos(d / 360 * Math.PI * 2);
const tan360 = (d: number) => Math.tan(d / 360 * Math.PI * 2);

const distance = (lx: number, ly: number, rx: number, ry: number): number => {
    return Math.sqrt((rx - lx) ** 2 + (ry - ly) ** 2)
}

export {
    Opt,
    Res,
    Dict,
    sin360,
    cos360,
    tan360,
    distance,
}