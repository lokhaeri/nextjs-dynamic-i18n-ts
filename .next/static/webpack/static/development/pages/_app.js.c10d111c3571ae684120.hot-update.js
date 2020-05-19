webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./i18n.ts":
/*!*****************!*\
  !*** ./i18n.ts ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ \"./node_modules/i18next/dist/esm/i18next.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n\n\ni18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"] // load translation using http -> see /public/locales\n// learn more: https://github.com/i18next/i18next-http-backend\n//.use(Backend)\n// detect user language\n// learn more: https://github.com/i18next/i18next-browser-languageDetector\n// .use(LanguageDetector)\n// pass the i18n instance to react-i18next.\n.use(react_i18next__WEBPACK_IMPORTED_MODULE_1__[\"initReactI18next\"]) // init i18next\n// for all options read: https://www.i18next.com/overview/configuration-options\n.init({\n  lng: 'en',\n  fallbackLng: ['en', 'de'],\n  whitelist: ['en', 'de'],\n  debug: true,\n  resources: {\n    en: {\n      translation: {\n        \"welcome\": \"Welcome to hello world\",\n        \"description\": {\n          \"part2\": \"This is really unbelievable that it loads\"\n        }\n      }\n    },\n    de: {\n      translation: {\n        \"welcome\": \"Herzlig wilkommen nach Halo Welt\",\n        \"description\": {\n          \"part2\": \"Es ist ziemlig unglaublige Das dieses hat geloaden\"\n        }\n      }\n    }\n  },\n  interpolation: {\n    escapeValue: false // not needed for react as it escapes by default\n\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (i18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pMThuLnRzPzJhMzYiXSwibmFtZXMiOlsiaTE4biIsInVzZSIsImluaXRSZWFjdEkxOG5leHQiLCJpbml0IiwibG5nIiwiZmFsbGJhY2tMbmciLCJ3aGl0ZWxpc3QiLCJkZWJ1ZyIsInJlc291cmNlcyIsImVuIiwidHJhbnNsYXRpb24iLCJkZSIsImludGVycG9sYXRpb24iLCJlc2NhcGVWYWx1ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUVBQSwrQ0FBSSxDQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEUsQ0FRREMsR0FSSCxDQVFPQyw4REFSUCxFQVNFO0FBQ0E7QUFWRixDQVdHQyxJQVhILENBV1E7QUFDTkMsS0FBRyxFQUFFLElBREM7QUFFSkMsYUFBVyxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FGVDtBQUdOQyxXQUFTLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUhMO0FBSUpDLE9BQUssRUFBRSxJQUpIO0FBS05DLFdBQVMsRUFBRTtBQUNWQyxNQUFFLEVBQUU7QUFDSEMsaUJBQVcsRUFBRTtBQUNaLG1CQUFXLHdCQURDO0FBRVosdUJBQWU7QUFDZCxtQkFBUztBQURLO0FBRkg7QUFEVixLQURNO0FBU1ZDLE1BQUUsRUFBRTtBQUNIRCxpQkFBVyxFQUFFO0FBQ1osbUJBQVcsa0NBREM7QUFFWix1QkFBZTtBQUNkLG1CQUFTO0FBREs7QUFGSDtBQURWO0FBVE0sR0FMTDtBQXVCSkUsZUFBYSxFQUFFO0FBQ2JDLGVBQVcsRUFBRSxLQURBLENBQ087O0FBRFA7QUF2QlgsQ0FYUjtBQXVDZWIsOEdBQWYiLCJmaWxlIjoiLi9pMThuLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGkxOG4gZnJvbSAnaTE4bmV4dCc7XG5pbXBvcnQgQmFja2VuZCBmcm9tICdpMThuZXh0LWh0dHAtYmFja2VuZCc7XG5pbXBvcnQgTGFuZ3VhZ2VEZXRlY3RvciBmcm9tICdpMThuZXh0LWJyb3dzZXItbGFuZ3VhZ2VkZXRlY3Rvcic7XG5pbXBvcnQgeyBpbml0UmVhY3RJMThuZXh0IH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5cbmkxOG5cbiAgLy8gbG9hZCB0cmFuc2xhdGlvbiB1c2luZyBodHRwIC0+IHNlZSAvcHVibGljL2xvY2FsZXNcbiAgLy8gbGVhcm4gbW9yZTogaHR0cHM6Ly9naXRodWIuY29tL2kxOG5leHQvaTE4bmV4dC1odHRwLWJhY2tlbmRcbiAgLy8udXNlKEJhY2tlbmQpXG4gIC8vIGRldGVjdCB1c2VyIGxhbmd1YWdlXG4gIC8vIGxlYXJuIG1vcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9pMThuZXh0L2kxOG5leHQtYnJvd3Nlci1sYW5ndWFnZURldGVjdG9yXG4gIC8vIC51c2UoTGFuZ3VhZ2VEZXRlY3RvcilcbiAgLy8gcGFzcyB0aGUgaTE4biBpbnN0YW5jZSB0byByZWFjdC1pMThuZXh0LlxuICAudXNlKGluaXRSZWFjdEkxOG5leHQpXG4gIC8vIGluaXQgaTE4bmV4dFxuICAvLyBmb3IgYWxsIG9wdGlvbnMgcmVhZDogaHR0cHM6Ly93d3cuaTE4bmV4dC5jb20vb3ZlcnZpZXcvY29uZmlndXJhdGlvbi1vcHRpb25zXG4gIC5pbml0KHtcblx0XHRsbmc6ICdlbicsXG4gICAgZmFsbGJhY2tMbmc6IFsnZW4nLCAnZGUnXSxcblx0XHR3aGl0ZWxpc3Q6IFsnZW4nLCAnZGUnXSxcbiAgICBkZWJ1ZzogdHJ1ZSxcblx0XHRyZXNvdXJjZXM6IHtcblx0XHRcdGVuOiB7XG5cdFx0XHRcdHRyYW5zbGF0aW9uOiB7XG5cdFx0XHRcdFx0XCJ3ZWxjb21lXCI6IFwiV2VsY29tZSB0byBoZWxsbyB3b3JsZFwiLFxuXHRcdFx0XHRcdFwiZGVzY3JpcHRpb25cIjoge1xuXHRcdFx0XHRcdFx0XCJwYXJ0MlwiOiBcIlRoaXMgaXMgcmVhbGx5IHVuYmVsaWV2YWJsZSB0aGF0IGl0IGxvYWRzXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRkZToge1xuXHRcdFx0XHR0cmFuc2xhdGlvbjoge1xuXHRcdFx0XHRcdFwid2VsY29tZVwiOiBcIkhlcnpsaWcgd2lsa29tbWVuIG5hY2ggSGFsbyBXZWx0XCIsXG5cdFx0XHRcdFx0XCJkZXNjcmlwdGlvblwiOiB7XG5cdFx0XHRcdFx0XHRcInBhcnQyXCI6IFwiRXMgaXN0IHppZW1saWcgdW5nbGF1YmxpZ2UgRGFzIGRpZXNlcyBoYXQgZ2Vsb2FkZW5cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG4gICAgaW50ZXJwb2xhdGlvbjoge1xuICAgICAgZXNjYXBlVmFsdWU6IGZhbHNlLCAvLyBub3QgbmVlZGVkIGZvciByZWFjdCBhcyBpdCBlc2NhcGVzIGJ5IGRlZmF1bHRcbiAgICB9LFxuICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgaTE4bjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./i18n.ts\n");

/***/ })

})