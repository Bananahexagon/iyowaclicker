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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   main: () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var _lib_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/core */ \"./src/lib/core.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/utils */ \"./src/lib/utils.ts\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.json */ \"./src/config.json\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nconst main = () => __awaiter(void 0, void 0, void 0, function* () {\n    const Game = yield (0,_lib_core__WEBPACK_IMPORTED_MODULE_0__.init)(_config_json__WEBPACK_IMPORTED_MODULE_2__);\n    let timer = 0;\n    class SmallIyowa extends Game.Sprite {\n        constructor(x, y, d, jx, jy, jd, life) {\n            super(x, y, d, 20, \"iyowa\", true);\n            this.jump_x = jx;\n            this.jump_y = jy;\n            this.jump_d = jd;\n            this.age = 0;\n            this.life = life;\n        }\n        proc() {\n            this.x += this.jump_x;\n            this.y += this.jump_y;\n            this.d += this.jump_d;\n            this.jump_y -= 0.5;\n            this.age += 1;\n        }\n    }\n    class IgusuriPanel {\n        constructor(name, image, price, price_ratio, perf_ratio) {\n            this.name = name;\n            this.image = image;\n            this.price = price;\n            this.price_real = price;\n            this.perf = 1;\n            this.perf_real = 1;\n            this.price_ratio = price_ratio;\n            this.perf_ratio = perf_ratio;\n            this.level = 1;\n        }\n    }\n    const iyowa = new Game.Sprite(160, 240, 0, 100, \"iyowa\", true);\n    const small_iyowas = {};\n    let API = {\n        iyowa: 0,\n        ipc: 1,\n        ips: 0,\n        shop_tab: \"girls\",\n        igusuri_s: [\n            new IgusuriPanel(\"きゅうくらりん\", \"igusuri_kk\", 10, 1.3, 1.25),\n            new IgusuriPanel(\"あだぽしゃ\", \"igusuri_ap\", 10, 1.3, 1.25),\n            new IgusuriPanel(\"1000年生きてる\", \"igusuri_lm\", 10, 1.3, 1.25),\n            new IgusuriPanel(\"くろうばあないと\", \"igusuri_kn\", 10, 1.3, 1.25),\n        ],\n    };\n    window.addEventListener(\"mousedown\", (e) => {\n        if ((0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.distance)(iyowa.x, iyowa.y, Game.inputMouse.x, Game.inputMouse.y) < 70) {\n            small_iyowas[timer] = new SmallIyowa(Game.inputMouse.x, Game.inputMouse.y, 0, Math.random() * 9 - 3, Math.random() * 7 + 6, Math.random() * 10, 100);\n            iyowa.size += 30;\n            API.iyowa += API.ipc;\n        }\n        else if (Game.inputMouse.clicking) {\n            if (Game.inputMouse.is_in_rect(400, 345, 160, 30, \"center\")) {\n                API.shop_tab = \"igusuri\";\n            }\n            else if (Game.inputMouse.is_in_rect(560, 345, 160, 30, \"center\")) {\n                API.shop_tab = \"girls\";\n            }\n            else if (Game.inputMouse.is_in_rect(720, 345, 160, 30, \"center\")) {\n                API.shop_tab = \"gacha\";\n            }\n            else {\n                for (let i = 0; i < API.igusuri_s.length; i++) {\n                    const igusuri = API.igusuri_s[i];\n                    if (Game.inputMouse.is_in_rect(480, 290 - i * 60, 300, 60, \"center\") && igusuri.price <= API.iyowa) {\n                        API.iyowa -= igusuri.price;\n                        let b = igusuri.perf;\n                        igusuri.perf_real = igusuri.perf_real * igusuri.perf_ratio;\n                        igusuri.price_real = igusuri.price_real * igusuri.price_ratio;\n                        igusuri.price = Math.floor(igusuri.price_real);\n                        igusuri.perf = Math.floor(igusuri.perf_real);\n                        API.ipc += (igusuri.perf - b);\n                        igusuri.level += 1;\n                    }\n                    ;\n                }\n            }\n        }\n    });\n    Game.loop(() => {\n        Game.ctx.clearRect(0, 0, Game.canvas.width, Game.canvas.height);\n        iyowa.d = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.sin360)(timer * 2) * 5;\n        iyowa.size = Math.max(75, 40 + iyowa.size * 0.6);\n        iyowa.stamp();\n        timer++;\n        for (const i in small_iyowas) {\n            const e = small_iyowas[i];\n            if (!(e.age < e.life))\n                delete small_iyowas[i];\n            else {\n                e.proc();\n                e.stamp();\n            }\n        }\n        Game.cLib.drawText(`${API.iyowa} iyowa`, 160, 430, 30, \"white\", \"serif\", \"center\");\n        Game.cLib.drawText(`${API.ipc} ipc`, 160, 405, 20, \"white\", \"serif\", \"center\");\n        Game.cLib.drawText(`${API.ips} ips`, 160, 380, 20, \"white\", \"serif\", \"center\");\n        Game.cLib.drawRect(320, 0, 480, 480, \"#b88e98\", 0, \"start\");\n        Game.cLib.drawRect(400, 345, 160, 30, API.shop_tab == \"igusuri\" ? \"#eee\" : \"#fff\", 0, \"center++\");\n        Game.cLib.drawRect(560, 345, 160, 30, API.shop_tab == \"girls\" ? \"#eee\" : \"#fff\", 0, \"center++\");\n        Game.cLib.drawRect(720, 345, 160, 30, API.shop_tab == \"gacha\" ? \"#eee\" : \"#fff\", 0, \"center++\");\n        Game.cLib.drawText(\"Shop\", 560, 400, 50, \"white\", \"serif\", \"center\");\n        Game.cLib.drawText(\"igusuri\", 400, 340, 20, \"black\", \"serif\", \"center\");\n        Game.cLib.drawText(\"girls\", 560, 340, 20, \"black\", \"serif\", \"center\");\n        Game.cLib.drawText(\"gacha\", 720, 340, 20, \"black\", \"serif\", \"center\");\n        switch (API.shop_tab) {\n            case \"igusuri\": {\n                Game.cLib.drawRect(320, 0, 480, 330, \"#a87e88\", 0, \"start\");\n                for (let i = 0; i < API.igusuri_s.length; i++) {\n                    const igusuri = API.igusuri_s[i];\n                    if (Game.inputMouse.is_in_rect(560, 290 - i * 60, 440, 60, \"center\")) {\n                        Game.cLib.drawRect(560, 290 - i * 60, 460, 60, \"#c89ea8\", 0, \"center++\");\n                    }\n                    else {\n                        Game.cLib.drawRect(560, 290 - i * 60, 460, 60, \"#b88e98\", 0, \"center++\");\n                    }\n                    ;\n                    Game.cLib.stamp(igusuri.image, 360, 290 - i * 60, 0, 200);\n                    Game.cLib.drawText(igusuri.name, 400, 295 - i * 60, 20, \"white\", \"Zen Kurenaido\", \"start\");\n                    Game.cLib.drawText(`Lv: ${igusuri.level} | price: ${igusuri.price} iyowa`, 400, 270 - i * 60, 15, \"white\", \"Serif\", \"start\");\n                }\n            }\n        }\n    });\n});\n\n\n//# sourceURL=webpack://iyowa_clicker/./src/game.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.ts\");\n\nwindow.onload = _game__WEBPACK_IMPORTED_MODULE_0__.main;\n\n\n//# sourceURL=webpack://iyowa_clicker/./src/index.ts?");

/***/ }),

/***/ "./src/lib/canvas.ts":
/*!***************************!*\
  !*** ./src/lib/canvas.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CanvasLibGen: () => (/* binding */ CanvasLibGen)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/lib/utils.ts\");\n\nconst CanvasLibGen = (canvas, ctx, Images, Fonts, config, props) => {\n    const stamp = (name, dx, dy, dd = 0, size = 100, absolute = false) => {\n        if (absolute) {\n            const costume = Images[name];\n            const sw = costume.width;\n            const sh = costume.height;\n            ctx.save();\n            ctx.translate(dx * config.display_quality, -dy * config.display_quality + canvas.height);\n            ctx.rotate(dd * Math.PI / 180);\n            ctx.drawImage(costume, (-sw * size / 200) * config.display_quality, (-sh * size / 200) * config.display_quality, (sw * size / 100) * config.display_quality, (sh * size / 100) * config.display_quality);\n            ctx.restore();\n        }\n        else {\n            const x = ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.cos360)(props.d) * dx - (0,_utils__WEBPACK_IMPORTED_MODULE_0__.sin360)(props.d) * dy + props.x) * props.size / 100;\n            const y = ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.sin360)(props.d) * dx + (0,_utils__WEBPACK_IMPORTED_MODULE_0__.cos360)(props.d) * dy + props.y) * props.size / 100;\n            const d = dd + props.d;\n            stamp(name, x, y, d, size * props.size / 100, true);\n        }\n    };\n    const drawRect = (dx, dy, width, height, color, direction = 0, type = \"center\") => {\n        ctx.save();\n        switch (type) {\n            case \"center++\":\n                {\n                    ctx.translate(dx * config.display_quality, -dy * config.display_quality + canvas.height);\n                    ctx.rotate(direction * Math.PI / 180);\n                    ctx.beginPath();\n                    ctx.rect((-width / 2) * config.display_quality, (-height / 2) * config.display_quality, (width) * config.display_quality, (height) * config.display_quality);\n                }\n                break;\n            case \"center\":\n                {\n                    ctx.translate((dx - width / 2) * config.display_quality, -(dy - height / 2) * config.display_quality + canvas.height);\n                    ctx.rotate(direction * Math.PI / 180);\n                    ctx.beginPath();\n                    ctx.rect(0, 0, (width) * config.display_quality, -(height) * config.display_quality);\n                }\n                break;\n            case \"start\":\n            default:\n                {\n                    ctx.translate(dx * config.display_quality, -dy * config.display_quality + canvas.height);\n                    ctx.rotate(direction * Math.PI / 180);\n                    ctx.beginPath();\n                    ctx.rect(0, 0, (width) * config.display_quality, -(height) * config.display_quality);\n                }\n                break;\n        }\n        ctx.fillStyle = color;\n        ctx.fill();\n        ctx.restore();\n    };\n    const drawLine = (lx, ly, d, len, width, color, type = 0) => {\n        ctx.beginPath();\n        switch (type) {\n            case 0:\n                {\n                    ctx.moveTo((lx - len * Math.sin(d) / 2) * config.display_quality, -(ly + len * Math.cos(d) / 2) * config.display_quality + canvas.height);\n                    ctx.lineTo((lx + len * Math.sin(d) / 2) * config.display_quality, -(ly - len * Math.cos(d) / 2) * config.display_quality + canvas.height);\n                }\n                break;\n            case 1:\n                {\n                    ctx.moveTo(lx * config.display_quality, -ly * config.display_quality + canvas.height);\n                    ctx.lineTo((lx + len * Math.sin(d)) * config.display_quality, -(ly - len * Math.cos(d)) * config.display_quality + canvas.height);\n                }\n                break;\n        }\n        ctx.strokeStyle = color;\n        ctx.lineWidth = width * config.display_quality;\n        ctx.stroke();\n    };\n    const drawText = (tx, lx, ly, size, color, font = \"serif\", align = \"left\") => {\n        let [x, y] = [lx * config.display_quality, -ly * config.display_quality + canvas.height];\n        ctx.font = `${size * config.display_quality}px ${font}`;\n        ctx.textAlign = align;\n        ctx.fillStyle = color;\n        ctx.fillText(tx, x, y);\n    };\n    return {\n        stamp,\n        drawRect,\n        drawLine,\n        drawText,\n    };\n};\n\n\n//# sourceURL=webpack://iyowa_clicker/./src/lib/canvas.ts?");

/***/ }),

/***/ "./src/lib/core.ts":
/*!*************************!*\
  !*** ./src/lib/core.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   init: () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./frame */ \"./src/lib/frame.ts\");\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader */ \"./src/lib/loader.ts\");\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas */ \"./src/lib/canvas.ts\");\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sprite */ \"./src/lib/sprite.ts\");\n/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./position */ \"./src/lib/position.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\nconst init = (config) => __awaiter(void 0, void 0, void 0, function* () {\n    const canvas = document.getElementById(config.canvas_name);\n    canvas.height = config.stage_height * config.display_quality;\n    canvas.width = config.stage_width * config.display_quality;\n    const ctx = canvas.getContext(\"2d\");\n    const { Images, Audios, Fonts } = yield (0,_loader__WEBPACK_IMPORTED_MODULE_1__.loadAssets)();\n    const inputKeys = {\n        up: false, down: false, left: false, right: false, z: false, x: false, c: false,\n    };\n    const inputMouse = {\n        x: 0, y: 0, clicking: false, is_in_rect(dx, dy, w, h, type = \"center\") {\n            switch (type) {\n                case \"center\":\n                    {\n                        return (dx - w / 2 < this.x && this.x < dx + w / 2) && (dy - h / 2 < this.y && this.y < dy + h / 2);\n                    }\n                    break;\n                case \"start\":\n                default:\n                    {\n                        return (dx < this.x && this.x < dx + w) && (dy < this.y && this.y < dy + h);\n                    }\n                    break;\n            }\n        }\n    };\n    const props = {\n        canvas: {\n            size: 100,\n            x: 0,\n            y: 0,\n            d: 0,\n        },\n    };\n    const cLib = (0,_canvas__WEBPACK_IMPORTED_MODULE_2__.CanvasLibGen)(canvas, ctx, Images, Fonts, config, props.canvas);\n    const Sprite = (0,_sprite__WEBPACK_IMPORTED_MODULE_3__.SpriteLibGen)(cLib);\n    ctx.imageSmoothingEnabled = false;\n    const pLib = (0,_position__WEBPACK_IMPORTED_MODULE_4__.PositionLibGen)(canvas, config, props.canvas);\n    window.addEventListener(\"keydown\", e => {\n        switch (e.key) {\n            case \"ArrowUp\":\n                inputKeys.up = true;\n                break;\n            case \"ArrowDown\":\n                inputKeys.down = true;\n                break;\n            case \"ArrowLeft\":\n                inputKeys.left = true;\n                break;\n            case \"ArrowRight\":\n                inputKeys.right = true;\n                break;\n            case \"z\":\n            case \"Z\":\n                inputKeys.z = true;\n                break;\n            case \"x\":\n            case \"X\":\n                inputKeys.x = true;\n                break;\n            case \"c\":\n            case \"C\":\n                inputKeys.c = true;\n        }\n    });\n    window.addEventListener(\"keyup\", e => {\n        switch (e.key) {\n            case \"ArrowUp\":\n                inputKeys.up = false;\n                break;\n            case \"ArrowDown\":\n                inputKeys.down = false;\n                break;\n            case \"ArrowLeft\":\n                inputKeys.left = false;\n                break;\n            case \"ArrowRight\":\n                inputKeys.right = false;\n                break;\n            case \"z\":\n            case \"Z\":\n                inputKeys.z = false;\n                break;\n            case \"x\":\n            case \"X\":\n                inputKeys.x = false;\n                break;\n            case \"c\":\n            case \"C\":\n                inputKeys.c = false;\n        }\n    });\n    canvas.addEventListener(\"mousedown\", e => {\n        inputMouse.clicking = true;\n        const p = pLib.raw_to_stage(e.x, e.y);\n        inputMouse.x = p.x;\n        inputMouse.y = p.y;\n    });\n    canvas.addEventListener(\"mousemove\", e => {\n        const p = pLib.raw_to_stage(e.x, e.y);\n        inputMouse.x = p.x;\n        inputMouse.y = p.y;\n    });\n    canvas.addEventListener(\"mouseup\", e => {\n        inputMouse.clicking = false;\n        const p = pLib.raw_to_stage(e.x, e.y);\n        inputMouse.x = p.x;\n        inputMouse.y = p.y;\n    });\n    return {\n        canvas,\n        ctx,\n        Images,\n        Audios,\n        Fonts,\n        inputKeys,\n        inputMouse,\n        props,\n        cLib,\n        Sprite,\n        for: _frame__WEBPACK_IMPORTED_MODULE_0__.frameFor,\n        while: _frame__WEBPACK_IMPORTED_MODULE_0__.frameWhile,\n        loop: _frame__WEBPACK_IMPORTED_MODULE_0__.frameLoop,\n    };\n});\n\n\n//# sourceURL=webpack://iyowa_clicker/./src/lib/core.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAssets: () => (/* binding */ loadAssets)\n/* harmony export */ });\n/* harmony import */ var _assets_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets.json */ \"./src/assets.json\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nconst loadAssets = () => __awaiter(void 0, void 0, void 0, function* () {\n    let Images = {};\n    let Audios = {};\n    let Fonts = {};\n    const index = _assets_json__WEBPACK_IMPORTED_MODULE_0__;\n    let promises = [];\n    console.log(index);\n    index.forEach((e) => promises.push(new Promise((resolve) => {\n        switch (e.type) {\n            case \"image\":\n                {\n                    let image = new Image();\n                    image.src = e.src;\n                    image.onload = () => {\n                        Images[e.name] = image;\n                        resolve();\n                    };\n                }\n                break;\n            case \"audio\":\n                {\n                    let audio = new Audio();\n                    audio.src = e.src;\n                    audio.onload = () => {\n                        Audios[e.name] = audio;\n                        resolve();\n                    };\n                }\n                break;\n            case \"font\": {\n                (() => __awaiter(void 0, void 0, void 0, function* () {\n                    const response = yield fetch(e.src);\n                    const cssFontFace = yield response.text();\n                    const matchUrls = yield cssFontFace.match(/url\\(.+?\\)/g);\n                    if (!matchUrls)\n                        throw new Error(\"フォントが見つかりませんでした\");\n                    let promises_sub = [];\n                    matchUrls.forEach((f) => {\n                        promises_sub.push((() => __awaiter(void 0, void 0, void 0, function* () {\n                            const font = new FontFace(e.name, f);\n                            yield font.load();\n                            Fonts[e.name] = font;\n                            yield document.fonts.add(font);\n                        }))());\n                    });\n                    Promise.all(promises_sub);\n                }))().then(resolve);\n            }\n        }\n    })));\n    yield Promise.all(promises);\n    console.log(Fonts);\n    return { Images, Audios, Fonts };\n});\n\n\n//# sourceURL=webpack://iyowa_clicker/./src/lib/loader.ts?");

/***/ }),

/***/ "./src/lib/position.ts":
/*!*****************************!*\
  !*** ./src/lib/position.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PositionLibGen: () => (/* binding */ PositionLibGen)\n/* harmony export */ });\nconst PositionLibGen = (canvas, config, props) => {\n    const raw_to_stage = (rx, ry, rd = 0) => {\n        const rect = canvas.getBoundingClientRect();\n        const x = ((rx - rect.left) / props.size * 100 - props.x) * config.stage_width / config.display_width;\n        const y = (config.display_height - ((ry - rect.top) / props.size * 100 - props.y)) * config.stage_height / config.display_height;\n        const d = rd + props.d;\n        return {\n            x, y, d\n        };\n    };\n    return {\n        raw_to_stage\n    };\n};\nconst stamp = (name, dx, dy, dd = 0, size = 100, absolute = false) => {\n    const [props_x, props_y, props_size] = [0, 0, 0];\n    const x = (dx + props_x) * props_size / 100;\n    const y = (dy + props_y) * props_size / 100;\n    const [display_quality, height] = [0, 0];\n    const [pair_x, pair_y] = [x * display_quality, -y * display_quality + height];\n    const [raw_x, raw_y] = [pair_x / display_quality, -(pair_y - height) / display_quality];\n};\n\n\n//# sourceURL=webpack://iyowa_clicker/./src/lib/position.ts?");

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

/***/ "./src/assets.json":
/*!*************************!*\
  !*** ./src/assets.json ***!
  \*************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"type\":\"image\",\"name\":\"iyowa\",\"src\":\"./assets/iyowa.png\"},{\"type\":\"image\",\"name\":\"igusuri_kk\",\"src\":\"./assets/igusuri_kk.png\"},{\"type\":\"image\",\"name\":\"igusuri_ap\",\"src\":\"./assets/igusuri_ap.png\"},{\"type\":\"image\",\"name\":\"igusuri_kn\",\"src\":\"./assets/igusuri_kn.png\"},{\"type\":\"image\",\"name\":\"igusuri_lm\",\"src\":\"./assets/igusuri_lm.png\"},{\"type\":\"font\",\"name\":\"Zen Kurenaido\",\"src\":\"https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap\"}]');\n\n//# sourceURL=webpack://iyowa_clicker/./src/assets.json?");

/***/ }),

/***/ "./src/config.json":
/*!*************************!*\
  !*** ./src/config.json ***!
  \*************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"display_quality\":2,\"stage_width\":800,\"stage_height\":480,\"display_width\":1000,\"display_height\":600,\"canvas_name\":\"canvas\"}');\n\n//# sourceURL=webpack://iyowa_clicker/./src/config.json?");

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
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;