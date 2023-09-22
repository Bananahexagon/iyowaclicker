/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   main: () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var _lib_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/core */ \"./src/lib/core.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/utils */ \"./src/lib/utils.ts\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.json */ \"./src/config.json\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nconst main = (API) => __awaiter(void 0, void 0, void 0, function* () {\n    const Game = yield (0,_lib_core__WEBPACK_IMPORTED_MODULE_0__.init)(_config_json__WEBPACK_IMPORTED_MODULE_2__);\n    let timer = 0;\n    class SmallHexagon extends Game.Sprite {\n        constructor(x, y, d, jx, jy, jd, life) {\n            super(x, y, d, 20, \"iyowa\", true);\n            this.jump_x = jx;\n            this.jump_y = jy;\n            this.jump_d = jd;\n            this.age = 0;\n            this.life = life;\n        }\n        proc() {\n            this.x += this.jump_x;\n            this.y += this.jump_y;\n            this.d += this.jump_d;\n            this.jump_y -= 0.5;\n            this.age += 1;\n        }\n    }\n    const hexagon = new Game.Sprite(160, 240, 0, 100, \"iyowa\", true);\n    const small_hexagons = {};\n    window.addEventListener(\"mousedown\", (e) => {\n        if ((0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.distance)(hexagon.x, hexagon.y, Game.inputMouse.x, Game.inputMouse.y) < 70) {\n            small_hexagons[timer] = new SmallHexagon(Game.inputMouse.x, Game.inputMouse.y, 0, Math.random() * 9 - 3, Math.random() * 7 + 6, Math.random() * 10, 100);\n            hexagon.size += 30;\n            API.iyowa += API.ipc;\n            API.update.how_many_iyowa();\n        }\n    });\n    Game.loop(() => {\n        Game.ctx.clearRect(0, 0, Game.canvas.width, Game.canvas.height);\n        hexagon.d = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.sin360)(timer * 2) * 5;\n        hexagon.size = Math.max(75, 40 + hexagon.size * 0.6);\n        hexagon.stamp();\n        timer++;\n        for (const i in small_hexagons) {\n            const e = small_hexagons[i];\n            if (!(e.age < e.life))\n                delete small_hexagons[i];\n            else {\n                e.proc();\n                e.stamp();\n            }\n        }\n    });\n});\n\n\n//# sourceURL=webpack://iyowa_clicker/./src/game.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ \"./src/page.ts\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.ts\");\n\n\nconst API = { iyowa: 0, ipc: 1, update: { how_many_iyowa: () => { }, price_igusuri: () => { }, }, buy_igusuri: () => { }, girls_nth: 0, nbought_girls: {} };\nwindow.onload = () => { (0,_page__WEBPACK_IMPORTED_MODULE_0__.main)(API); (0,_game__WEBPACK_IMPORTED_MODULE_1__.main)(API); };\n\n\n//# sourceURL=webpack://iyowa_clicker/./src/index.ts?");

/***/ }),

/***/ "./src/lib/canvas.ts":
/*!***************************!*\
  !*** ./src/lib/canvas.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CanvasLibGen: () => (/* binding */ CanvasLibGen)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/lib/utils.ts\");\n\nconst CanvasLibGen = (canvas, ctx, Images, config, props) => {\n    const stamp = (name, dx, dy, dd = 0, size = 100, absolute = false) => {\n        if (absolute) {\n            const costume = Images[name];\n            const sw = costume.width;\n            const sh = costume.height;\n            ctx.save();\n            ctx.translate(dx * config.display_quality, -dy * config.display_quality + canvas.height);\n            ctx.rotate(dd * Math.PI / 180);\n            ctx.drawImage(costume, (-sw * size / 200) * config.display_quality, (-sh * size / 200) * config.display_quality, (sw * size / 100) * config.display_quality, (sh * size / 100) * config.display_quality);\n            ctx.restore();\n        }\n        else {\n            const x = ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.cos360)(props.d) * dx - (0,_utils__WEBPACK_IMPORTED_MODULE_0__.sin360)(props.d) * dy + props.x) * props.size / 100;\n            const y = ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.sin360)(props.d) * dx + (0,_utils__WEBPACK_IMPORTED_MODULE_0__.cos360)(props.d) * dy + props.y) * props.size / 100;\n            const d = dd + props.d;\n            stamp(name, x, y, d, size * props.size / 100, true);\n        }\n    };\n    const drawRect = (dx, dy, width, height, color, direction = 0, type = 1) => {\n        ctx.save();\n        ctx.translate((dx + width * type / 2) * config.display_quality, (dy + height * type / 2) * config.display_quality);\n        ctx.rotate(direction * Math.PI / 180);\n        ctx.beginPath();\n        ctx.rect((-width * type / 2) * config.display_quality, (-height * type / 2) * config.display_quality, (width) * config.display_quality, (height) * config.display_quality);\n        ctx.fillStyle = color;\n        ctx.fill();\n        ctx.restore();\n    };\n    const drawLine = (lx, ly, d, len, width, color, type = 0) => {\n        ctx.beginPath();\n        switch (type) {\n            case 0:\n                {\n                    ctx.moveTo((lx - len * Math.sin(d) / 2) * config.display_quality, (ly + len * Math.cos(d) / 2) * config.display_quality);\n                    ctx.lineTo((lx + len * Math.sin(d) / 2) * config.display_quality, (ly - len * Math.cos(d) / 2) * config.display_quality);\n                }\n                break;\n            case 1:\n                {\n                    ctx.moveTo(lx * config.display_quality, ly * config.display_quality);\n                    ctx.lineTo((lx + len * Math.sin(d)) * config.display_quality, (ly - len * Math.cos(d)) * config.display_quality);\n                }\n                break;\n        }\n        ctx.strokeStyle = color;\n        ctx.lineWidth = width * config.display_quality;\n        ctx.stroke();\n    };\n    return {\n        stamp,\n        drawRect,\n        drawLine,\n    };\n};\n\n\n//# sourceURL=webpack://iyowa_clicker/./src/lib/canvas.ts?");

/***/ }),

/***/ "./src/lib/core.ts":
/*!*************************!*\
  !*** ./src/lib/core.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   init: () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./frame */ \"./src/lib/frame.ts\");\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader */ \"./src/lib/loader.ts\");\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas */ \"./src/lib/canvas.ts\");\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sprite */ \"./src/lib/sprite.ts\");\n/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./position */ \"./src/lib/position.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\nconst init = (config) => __awaiter(void 0, void 0, void 0, function* () {\n    const canvas = document.getElementById(config.canvas_name);\n    canvas.height = config.display_height * config.display_quality;\n    canvas.width = config.display_width * config.display_quality;\n    const ctx = canvas.getContext(\"2d\");\n    const { Images, Audios } = yield (0,_loader__WEBPACK_IMPORTED_MODULE_1__.loadAssets)();\n    const inputKeys = {\n        up: false, down: false, left: false, right: false, z: false, x: false, c: false,\n    };\n    const inputMouse = {\n        x: 0, y: 0, clicking: false\n    };\n    const props = {\n        canvas: {\n            size: 100,\n            x: 0,\n            y: 0,\n            d: 0,\n        },\n    };\n    const cLib = (0,_canvas__WEBPACK_IMPORTED_MODULE_2__.CanvasLibGen)(canvas, ctx, Images, config, props.canvas);\n    const Sprite = (0,_sprite__WEBPACK_IMPORTED_MODULE_3__.SpriteLibGen)(cLib);\n    ctx.imageSmoothingEnabled = false;\n    const pLib = (0,_position__WEBPACK_IMPORTED_MODULE_4__.PositionLibGen)(canvas, config, props.canvas);\n    window.addEventListener(\"keydown\", e => {\n        switch (e.key) {\n            case \"ArrowUp\":\n                inputKeys.up = true;\n                break;\n            case \"ArrowDown\":\n                inputKeys.down = true;\n                break;\n            case \"ArrowLeft\":\n                inputKeys.left = true;\n                break;\n            case \"ArrowRight\":\n                inputKeys.right = true;\n                break;\n            case \"z\":\n            case \"Z\":\n                inputKeys.z = true;\n                break;\n            case \"x\":\n            case \"X\":\n                inputKeys.x = true;\n                break;\n            case \"c\":\n            case \"C\":\n                inputKeys.c = true;\n        }\n    });\n    window.addEventListener(\"keyup\", e => {\n        switch (e.key) {\n            case \"ArrowUp\":\n                inputKeys.up = false;\n                break;\n            case \"ArrowDown\":\n                inputKeys.down = false;\n                break;\n            case \"ArrowLeft\":\n                inputKeys.left = false;\n                break;\n            case \"ArrowRight\":\n                inputKeys.right = false;\n                break;\n            case \"z\":\n            case \"Z\":\n                inputKeys.z = false;\n                break;\n            case \"x\":\n            case \"X\":\n                inputKeys.x = false;\n                break;\n            case \"c\":\n            case \"C\":\n                inputKeys.c = false;\n        }\n    });\n    canvas.addEventListener(\"mousedown\", e => {\n        inputMouse.clicking = true;\n        const p = pLib.raw_to_display(e.x, e.y);\n        inputMouse.x = p.x;\n        inputMouse.y = p.y;\n    });\n    canvas.addEventListener(\"mousemove\", e => {\n        const p = pLib.raw_to_display(e.x, e.y);\n        inputMouse.x = p.x;\n        inputMouse.y = p.y;\n    });\n    canvas.addEventListener(\"mouseup\", e => {\n        inputMouse.clicking = false;\n        const p = pLib.raw_to_display(e.x, e.y);\n        inputMouse.x = p.x;\n        inputMouse.y = p.y;\n    });\n    return {\n        canvas,\n        ctx,\n        Images,\n        Audios,\n        inputKeys,\n        inputMouse,\n        props,\n        cLib,\n        Sprite,\n        for: _frame__WEBPACK_IMPORTED_MODULE_0__.frameFor,\n        while: _frame__WEBPACK_IMPORTED_MODULE_0__.frameWhile,\n        loop: _frame__WEBPACK_IMPORTED_MODULE_0__.frameLoop,\n    };\n});\n\n\n//# sourceURL=webpack://iyowa_clicker/./src/lib/core.ts?");

/***/ }),

/***/ "./src/lib/frame.ts":
/*!**************************!*\
  !*** ./src/lib/frame.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   frameFor: () => (/* binding */ frameFor),\n/* harmony export */   frameLoop: () => (/* binding */ frameLoop),\n/* harmony export */   frameWhile: () => (/* binding */ frameWhile)\n/* harmony export */ });\nconst frameWhile = (condition, proc) => {\n    if (!condition()) {\n        proc();\n        requestAnimationFrame(() => frameWhile(condition, proc));\n    }\n    ;\n};\nconst frameFor = (condition, proc, i = 0) => {\n    if (i < condition) {\n        proc(i);\n        requestAnimationFrame(() => frameFor(condition, proc, i + 1));\n    }\n    ;\n};\nconst frameLoop = (proc) => { proc(); requestAnimationFrame(() => frameLoop(proc)); };\n\n\n//# sourceURL=webpack://iyowa_clicker/./src/lib/frame.ts?");

/***/ }),

/***/ "./src/lib/loader.ts":
/*!***************************!*\
  !*** ./src/lib/loader.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAssets: () => (/* binding */ loadAssets)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst loadAssets = () => __awaiter(void 0, void 0, void 0, function* () {\n    let Images = {};\n    let Audios = {};\n    const index = (yield __webpack_require__.e(/*! import() */ \"src_assets_json\").then(__webpack_require__.t.bind(__webpack_require__, /*! ../assets.json */ \"./src/assets.json\", 19))).default;\n    let promises = [];\n    console.log(index);\n    index.forEach((e) => promises.push(new Promise((resolve) => {\n        switch (e.type) {\n            case \"image\":\n                {\n                    let image = new Image();\n                    image.src = e.src;\n                    image.onload = () => {\n                        Images[e.name] = image;\n                        resolve();\n                    };\n                }\n                break;\n            case \"audio\":\n                {\n                    let audio = new Audio();\n                    audio.src = e.src;\n                    audio.onload = () => {\n                        Audios[e.name] = audio;\n                        resolve();\n                    };\n                }\n                break;\n        }\n    })));\n    yield Promise.all(promises);\n    return { Images, Audios };\n});\n\n\n//# sourceURL=webpack://iyowa_clicker/./src/lib/loader.ts?");

/***/ }),

/***/ "./src/lib/position.ts":
/*!*****************************!*\
  !*** ./src/lib/position.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PositionLibGen: () => (/* binding */ PositionLibGen)\n/* harmony export */ });\nconst PositionLibGen = (canvas, config, props) => {\n    const raw_to_display = (rx, ry, rd = 0) => {\n        const rect = canvas.getBoundingClientRect();\n        const x = ((rx - rect.left) / props.size * 100 - props.x);\n        const y = config.display_height - ((ry - rect.top) / props.size * 100 - props.y);\n        const d = rd + props.d;\n        return {\n            x, y, d\n        };\n    };\n    return {\n        raw_to_display\n    };\n};\nconst stamp = (name, dx, dy, dd = 0, size = 100, absolute = false) => {\n    const [props_x, props_y, props_size] = [0, 0, 0];\n    const x = (dx + props_x) * props_size / 100;\n    const y = (dy + props_y) * props_size / 100;\n    const [display_quality, height] = [0, 0];\n    const [pair_x, pair_y] = [x * display_quality, -y * display_quality + height];\n    const [raw_x, raw_y] = [pair_x / display_quality, -(pair_y - height) / display_quality];\n};\n\n\n//# sourceURL=webpack://iyowa_clicker/./src/lib/position.ts?");

/***/ }),

/***/ "./src/lib/sprite.ts":
/*!***************************!*\
  !*** ./src/lib/sprite.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SpriteLibGen: () => (/* binding */ SpriteLibGen)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/lib/utils.ts\");\n\nconst SpriteLibGen = (cLib) => {\n    class Sprite {\n        constructor(x, y, d = 0, size = 100, costume = \"\", visible = false) {\n            this.x = x;\n            this.y = y;\n            this.d = d;\n            this.size = size;\n            this.costume = costume;\n            this.visible = visible;\n        }\n        stamp() {\n            if (this.visible) {\n                cLib.stamp(this.costume, this.x, this.y, this.d, this.size);\n            }\n        }\n        move(far) {\n            this.x += (0,_utils__WEBPACK_IMPORTED_MODULE_0__.sin360)(this.d) * far;\n            this.y += (0,_utils__WEBPACK_IMPORTED_MODULE_0__.cos360)(this.d) * far;\n        }\n    }\n    return Sprite;\n};\n\n\n//# sourceURL=webpack://iyowa_clicker/./src/lib/sprite.ts?");

/***/ }),

/***/ "./src/lib/utils.ts":
/*!**************************!*\
  !*** ./src/lib/utils.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Opt: () => (/* binding */ Opt),\n/* harmony export */   Res: () => (/* binding */ Res),\n/* harmony export */   cos360: () => (/* binding */ cos360),\n/* harmony export */   distance: () => (/* binding */ distance),\n/* harmony export */   sin360: () => (/* binding */ sin360),\n/* harmony export */   tan360: () => (/* binding */ tan360)\n/* harmony export */ });\nclass Opt {\n    constructor(is_some, value = undefined) {\n        this.is_some = is_some;\n        this.value = value;\n    }\n    unwrap() {\n        if (this.is_some) {\n            return this.value;\n        }\n        else {\n            throw new Error();\n        }\n    }\n    unwrap_or(arg) {\n        if (this.is_some) {\n            return this.value;\n        }\n        else {\n            return arg;\n        }\n    }\n    unwrap_or_else(fn) {\n        if (this.is_some) {\n            return this.value;\n        }\n        else {\n            return fn();\n        }\n    }\n    static None() {\n        return new Opt(false);\n    }\n    static Some(arg) {\n        return new Opt(true, arg);\n    }\n}\nclass Res {\n    constructor(is_ok, value = undefined) {\n        this.is_ok = is_ok;\n        this.value = value;\n    }\n    unwrap() {\n        if (this.is_ok) {\n            return this.value;\n        }\n        else {\n            throw new Error(this.value);\n        }\n    }\n    unwrap_or(arg) {\n        if (this.is_ok) {\n            return this.value;\n        }\n        else {\n            return arg;\n        }\n    }\n    unwrap_or_else(fn) {\n        if (this.is_ok) {\n            return this.value;\n        }\n        else {\n            return fn(this.value);\n        }\n    }\n}\nconst sin360 = (d) => Math.sin(d / 360 * Math.PI * 2);\nconst cos360 = (d) => Math.cos(d / 360 * Math.PI * 2);\nconst tan360 = (d) => Math.tan(d / 360 * Math.PI * 2);\nconst distance = (lx, ly, rx, ry) => {\n    return Math.sqrt((rx - lx) ** 2 + (ry - ly) ** 2);\n};\n\n\n\n//# sourceURL=webpack://iyowa_clicker/./src/lib/utils.ts?");

/***/ }),

/***/ "./src/page.ts":
/*!*********************!*\
  !*** ./src/page.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   main: () => (/* binding */ main)\n/* harmony export */ });\nclass IyowaMeter extends HTMLElement {\n    constructor() {\n        super();\n        this.count = 0;\n    }\n    connectedCallback() {\n        this.innerText = `${this.count} Iyowa`;\n    }\n}\nclass BuyIgusuri extends HTMLElement {\n    constructor() {\n        super();\n        this.type = this.getAttribute(\"type\");\n    }\n    connectedCallback() {\n        const name = {\n            \"kk\": \"胃薬（きゅうくらりん）\",\n            \"ap\": \"胃薬（あだぽしゃ）\",\n            \"kn\": \"胃薬（くろうばあないと）\",\n            \"lm\": \"胃薬（1000年生きてる）\",\n        }[this.type];\n        this.innerHTML = `\r\n            <div class=\"vertical-center\"><img src=\"./assets/igusuri_${this.type}.png\"></div>\r\n            <div class=\"vertical-center\"><div class=\"igusuri-name\">${name}Iyowa</div></div>\r\n        `;\n    }\n}\nconst create_igusuri_panel = (char, API) => {\n    const igusuri_tag = ElementFromHTML(`<buy-igusuri type=\"${char}\"></buy-igusuri>`);\n    igusuri_tag.addEventListener(\"click\", () => {\n        if (100 * 6 ** API.girls_nth <= API.iyowa) {\n            API.iyowa -= 100 * 6 ** API.girls_nth;\n            API.ipc *= 5;\n            API.girls_nth++;\n            igusuri_tag.remove();\n            API.update.price_igusuri();\n            delete API.nbought_girls[char];\n            API.update.how_many_iyowa();\n        }\n    });\n    const right_part = document.getElementById(\"right-part\");\n    right_part === null || right_part === void 0 ? void 0 : right_part.insertAdjacentElement(\"afterbegin\", igusuri_tag);\n    API.nbought_girls[char] = igusuri_tag;\n};\nconst ElementFromHTML = (code) => {\n    const parent = document.createElement(\"div\");\n    parent.insertAdjacentHTML(\"afterbegin\", code);\n    return parent.firstElementChild;\n};\nconst main = (API) => {\n    customElements.define(\"iyowa-meter\", IyowaMeter);\n    customElements.define(\"buy-igusuri\", BuyIgusuri);\n    create_igusuri_panel(\"kk\", API);\n    create_igusuri_panel(\"ap\", API);\n    create_igusuri_panel(\"kn\", API);\n    create_igusuri_panel(\"lm\", API);\n    const iyowa_meter = document.getElementById(\"iyowa\");\n    API.update.how_many_iyowa = () => { iyowa_meter.innerText = `${API.iyowa} Iyowa`; };\n    API.update.price_igusuri = () => {\n        for (const key in API.nbought_girls) {\n            if (Object.prototype.hasOwnProperty.call(API.nbought_girls, key)) {\n                const element = API.nbought_girls[key];\n                const name = {\n                    \"kk\": \"胃薬（きゅうくらりん）\",\n                    \"ap\": \"胃薬（あだぽしゃ）\",\n                    \"kn\": \"胃薬（くろうばあないと）\",\n                    \"lm\": \"胃薬（1000年生きてる）\",\n                }[key];\n                element.lastElementChild.firstElementChild.innerText = `${name}\\n  ${100 * 6 ** API.girls_nth} Iyowa / * 5 Iyowa per click`;\n            }\n        }\n    };\n    API.update.price_igusuri();\n};\n\n\n//# sourceURL=webpack://iyowa_clicker/./src/page.ts?");

/***/ }),

/***/ "./src/config.json":
/*!*************************!*\
  !*** ./src/config.json ***!
  \*************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"display_quality\":2,\"display_width\":320,\"display_height\":480,\"canvas_name\":\"canvas\"}');\n\n//# sourceURL=webpack://iyowa_clicker/./src/config.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "iyowa_clicker:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkiyowa_clicker"] = self["webpackChunkiyowa_clicker"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;