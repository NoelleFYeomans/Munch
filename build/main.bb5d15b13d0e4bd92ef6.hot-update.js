"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Bug.ts":
/*!********************!*\
  !*** ./src/Bug.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Bug = void 0;
const Character_1 = __webpack_require__(/*! ./Character */ "./src/Character.ts");
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
class Bug extends Character_1.Character {
    constructor(stage, assetManager, snake) {
        super(stage, assetManager, "bug/alive");
        this.snake = snake;
    }
    showMe() {
        let width = this._sprite.getBounds().width;
        this._speed = (0, Toolkit_1.randomMe)(2, 6);
        if ((0, Toolkit_1.randomMe)(1, 2) == 1) {
            this._sprite.x = -width;
            this._sprite.y = (0, Toolkit_1.randomMe)(50, 550);
            this._sprite.rotation = (0, Toolkit_1.randomMe)(45, -45);
        }
        else {
            this._sprite.x = Constants_1.STAGE_WIDTH + width;
            this._sprite.y = (0, Toolkit_1.randomMe)(50, 550);
            this._sprite.rotation = (0, Toolkit_1.randomMe)(135, 225);
        }
        this.startMe();
        this.stage.addChildAt(this._sprite, this.stage.getChildIndex(this.snake.sprite));
    }
    killMe() {
        this._state = Character_1.Character.STATE_DEAD;
        this.stopMe();
        this._sprite.gotoAndPlay("bug/dead");
        this._sprite.on("animationend", (e) => {
            this.hideMe();
        }, this, true);
    }
    update() {
        super.update();
        if (this._state == Character_1.Character.STATE_IDLE)
            return;
        if (this._sprite.x > Constants_1.STAGE_WIDTH + this._sprite.getBounds().width || this._sprite.x < -this._sprite.getBounds().width || this.sprite.y < -this._sprite.getBounds().height || this.sprite.y > Constants_1.STAGE_HEIGHT + this._sprite.getBounds().height) {
            this.hideMe();
        }
    }
}
exports.Bug = Bug;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c6478e68b494ad65f41f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.bb5d15b13d0e4bd92ef6.hot-update.js.map