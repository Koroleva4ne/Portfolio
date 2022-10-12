/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function closeMenu(menuSelector) {
    const menu = document.querySelector(menuSelector);
    menu.classList.remove('active');
}

function menu(menuSelector) {
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector(menuSelector),
          close = document.querySelector('.menu__close'),
          menuLink = document.querySelectorAll('.menu__link');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    close.addEventListener('click', () => {
        closeMenu(menuSelector);
    })

    menu.addEventListener('click', () => {
        closeMenu(menuSelector);
    });

    menuLink.forEach(item => {
        item.addEventListener('click', () => {
            closeMenu(menuSelector);
        });
    });
}

/* harmony default export */ __webpack_exports__["default"] = (menu);

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ "./src/js/modules/menu.js");


window.addEventListener('DOMContentLoaded', () => {
    (0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__["default"])('.menu');

    const percents = document.querySelectorAll('.skills__progress-percent'),
          scales = document.querySelectorAll('.skills__progress-scale span');
    
    percents.forEach( (item, i) => {
        scales[i].style.width = item.innerHTML;
    });
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map