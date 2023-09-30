class Opt {
    constructor(is_some, value = undefined) {
        this.is_some = is_some;
        this.value = value;
    }
    unwrap() {
        if (this.is_some) {
            return this.value;
        }
        else {
            throw new Error();
        }
    }
    unwrap_or(arg) {
        if (this.is_some) {
            return this.value;
        }
        else {
            return arg;
        }
    }
    unwrap_or_else(fn) {
        if (this.is_some) {
            return this.value;
        }
        else {
            return fn();
        }
    }
    static None() {
        return new Opt(false);
    }
    static Some(arg) {
        return new Opt(true, arg);
    }
    static try(fn) {
        try {
            const v = fn();
            return Opt.Some(v);
        }
        catch (_a) {
            return Opt.None();
        }
    }
}
class Res {
    constructor(is_ok, value = undefined) {
        this.is_ok = is_ok;
        this.value = value;
    }
    unwrap() {
        if (this.is_ok) {
            return this.value;
        }
        else {
            throw new Error(this.value);
        }
    }
    unwrap_or(arg) {
        if (this.is_ok) {
            return this.value;
        }
        else {
            return arg;
        }
    }
    unwrap_or_else(fn) {
        if (this.is_ok) {
            return this.value;
        }
        else {
            return fn(this.value);
        }
    }
    static Ok(arg) {
        return new Res(true, arg);
    }
    static Err(err) {
        return new Res(false);
    }
    static try(fn) {
        try {
            const v = fn();
            return Res.Ok(v);
        }
        catch (err) {
            return Res.Err(err);
        }
    }
}
const sin360 = (d) => Math.sin(d / 360 * Math.PI * 2);
const cos360 = (d) => Math.cos(d / 360 * Math.PI * 2);
const tan360 = (d) => Math.tan(d / 360 * Math.PI * 2);
const distance = (lx, ly, rx, ry) => {
    return Math.sqrt((rx - lx) ** 2 + (ry - ly) ** 2);
};
export { Opt, Res, sin360, cos360, tan360, distance, };
