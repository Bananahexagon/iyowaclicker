export const frameWhile = (condition, proc) => {
    if (!condition()) {
        proc();
        requestAnimationFrame(() => frameWhile(condition, proc));
    }
};
export const frameFor = (condition, proc, i = 0) => {
    if (i < condition) {
        proc(i);
        requestAnimationFrame(() => frameFor(condition, proc, i + 1));
    }
};
export const frameLoop = (proc) => { proc(); requestAnimationFrame(() => frameLoop(proc)); };
