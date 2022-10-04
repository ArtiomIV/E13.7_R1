/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const btn = document.querySelector('.btn');\r\nconst text = document.querySelector('#json_data');\r\n\r\nbtn.addEventListener('click', () => {\r\n    // data request\r\n    fetch('http://localhost:3000/contacts')\r\n        .then((response) => {\r\n            console.log('response', response);\r\n        const result = response.json();\r\n        console.log('result', result);\r\n        return result;\r\n    })\r\n        .then((data) => {\r\n            console.log('data', data);\r\n            text.textContent = JSON.stringify(data);\r\n        })\r\n\r\n        .catch(() => {\r\n            console.log('error');\r\n            text.textContent('request error');\r\n        });\r\n});\r\n\n\n//# sourceURL=webpack://skillfactoryapp/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;