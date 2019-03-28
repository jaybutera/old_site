(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/wasm_life.js":
/*!***************************!*\
  !*** ../pkg/wasm_life.js ***!
  \***************************/
/*! exports provided: Cell, __wbg_random_28a14a8b9cdf19f7, __wbindgen_throw, Universe, __wbindgen_object_drop_ref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return Cell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_28a14a8b9cdf19f7\", function() { return __wbg_random_28a14a8b9cdf19f7; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return Universe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony import */ var _wasm_life_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_life_bg */ \"../pkg/wasm_life_bg.wasm\");\n\n\n/**\n*/\nconst Cell = Object.freeze({ Dead:0,Alive:1, });\n\nlet cachedTextDecoder = new TextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _wasm_life_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_wasm_life_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nlet cachedGlobalArgumentPtr = null;\nfunction globalArgumentPtr() {\n    if (cachedGlobalArgumentPtr === null) {\n        cachedGlobalArgumentPtr = _wasm_life_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_global_argument_ptr\"]();\n    }\n    return cachedGlobalArgumentPtr;\n}\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _wasm_life_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_wasm_life_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n\nfunction __wbg_random_28a14a8b9cdf19f7() {\n    return Math.random();\n}\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\nfunction freeUniverse(ptr) {\n\n    _wasm_life_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_universe_free\"](ptr);\n}\n/**\n*/\nclass Universe {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Universe.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n        freeUniverse(ptr);\n    }\n\n    /**\n    * @returns {number}\n    */\n    cells() {\n        return _wasm_life_bg__WEBPACK_IMPORTED_MODULE_0__[\"universe_cells\"](this.ptr);\n    }\n    /**\n    * @returns {void}\n    */\n    tick() {\n        return _wasm_life_bg__WEBPACK_IMPORTED_MODULE_0__[\"universe_tick\"](this.ptr);\n    }\n    /**\n    * @param {number} rows\n    * @param {number} cols\n    * @returns {Universe}\n    */\n    static new(rows, cols) {\n        return Universe.__wrap(_wasm_life_bg__WEBPACK_IMPORTED_MODULE_0__[\"universe_new\"](rows, cols));\n    }\n    /**\n    * @param {number} row\n    * @param {number} col\n    * @returns {void}\n    */\n    set_cell(row, col) {\n        return _wasm_life_bg__WEBPACK_IMPORTED_MODULE_0__[\"universe_set_cell\"](this.ptr, row, col);\n    }\n    /**\n    * @returns {string}\n    */\n    render() {\n        const retptr = globalArgumentPtr();\n        _wasm_life_bg__WEBPACK_IMPORTED_MODULE_0__[\"universe_render\"](retptr, this.ptr);\n        const mem = getUint32Memory();\n        const rustptr = mem[retptr / 4];\n        const rustlen = mem[retptr / 4 + 1];\n\n        const realRet = getStringFromWasm(rustptr, rustlen).slice();\n        _wasm_life_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](rustptr, rustlen * 1);\n        return realRet;\n\n    }\n}\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction __wbindgen_object_drop_ref(i) { dropObject(i); }\n\n\n\n//# sourceURL=webpack:///../pkg/wasm_life.js?");

/***/ }),

/***/ "../pkg/wasm_life_bg.wasm":
/*!********************************!*\
  !*** ../pkg/wasm_life_bg.wasm ***!
  \********************************/
/*! exports provided: memory, __wbindgen_global_argument_ptr, __wbg_universe_free, universe_cells, universe_tick, universe_new, universe_set_cell, universe_render, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_life */ \"../pkg/wasm_life.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/wasm_life_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_life__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-life */ \"../pkg/wasm_life.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./utils.js\");\n/* harmony import */ var wasm_life_wasm_life_bg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wasm-life/wasm_life_bg */ \"../pkg/wasm_life_bg.wasm\");\n\n\n// WASM memory\n\n\nconst GRID_COLOR = \"#FFFFFF\";\nconst DEAD_COLOR = \"#FFFFFF\";\nconst ALIVE_COLOR = \"#c9c9c9\";\n\n// Initialize life universe in wasm\nconst grid_width = _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"pix2grid\"](window.innerWidth);\nconst grid_height = _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"pix2grid\"](window.innerHeight);\nconst u = wasm_life__WEBPACK_IMPORTED_MODULE_0__[\"Universe\"].new(grid_width, grid_height);\nconsole.log('Grid is ' + grid_width + 'x' + grid_height);\n\n// Create a canvas\nconst canvas      = document.getElementById(\"game-of-life-canvas\");\ncanvas.width  = _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"grid2pix\"](grid_width);\ncanvas.height = _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"grid2pix\"](grid_height);\nconst ctx = canvas.getContext('2d');\n\nvar starttime = 0;\nconst renderLoop = (ts) => {\n    if (ts - starttime > 50) {\n       u.tick();\n       drawCells();\n       starttime = ts;\n    }\n\n    requestAnimationFrame(renderLoop);\n}\n\nconst getIndex = (row, col) => {\n    return row * grid_width + col;\n};\n\nconst drawCells = () => {\n   const cellsPtr = u.cells();\n   const cells = new Uint8Array(wasm_life_wasm_life_bg__WEBPACK_IMPORTED_MODULE_2__[\"memory\"].buffer, cellsPtr, grid_width * grid_height);\n\n   ctx.beginPath();\n\n   for (let row = 0; row < grid_height; row++) {\n       for (let col = 0; col < grid_width; col++) {\n          const idx = getIndex(row, col);\n\n          ctx.fillStyle = cells[idx] === wasm_life__WEBPACK_IMPORTED_MODULE_0__[\"Cell\"].Dead\n             ? DEAD_COLOR\n             : ALIVE_COLOR;\n\n          ctx.fillRect(\n             _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"grid2pix\"](col),\n             _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"grid2pix\"](row),\n             _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"CELL_SIZE\"],\n             _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"CELL_SIZE\"]\n          );\n       }\n   }\n\n   ctx.stroke();\n};\n\n// Click on canvas to flip a cell\ncanvas.addEventListener('mousemove', e => {\n   const x = _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"pix2grid\"](e.pageX),\n         y = _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"pix2grid\"](e.pageY);\n   \n   if ( x < grid_width && y < grid_height )\n      u.set_cell(y,x);\n\n   drawCells();\n}, false);\n\ndrawCells();\nrequestAnimationFrame(renderLoop);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./utils.js":
/*!******************!*\
  !*** ./utils.js ***!
  \******************/
/*! exports provided: CELL_SIZE, pix2grid, grid2pix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CELL_SIZE\", function() { return CELL_SIZE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pix2grid\", function() { return pix2grid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"grid2pix\", function() { return grid2pix; });\nconst CELL_SIZE = 20; // TODO: Move this to a config\nlet pix2grid = x =>  Math.floor( (x-1) / (CELL_SIZE+1) );\nlet grid2pix = x => (CELL_SIZE+1)*x + 1\n\n\n//# sourceURL=webpack:///./utils.js?");

/***/ })

}]);