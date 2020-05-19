webpackHotUpdate("static/development/pages/en.js",{

/***/ "./pages/en/index.tsx":
/*!****************************!*\
  !*** ./pages/en/index.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\nvar _jsxFileName = \"/Users/smbpro/dev/next.js/examples/with-typescript-styled-components/pages/en/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n //import '../../i18n';\n\n\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1.withConfig({\n  displayName: \"en__Title\",\n  componentId: \"sc-1vrc996-0\"\n})([\"color:red;font-size:50px;\"]);\n_c = Title;\n\nfunction Page() {\n  _s();\n\n  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__[\"useTranslation\"])(),\n      t = _useTranslation.t,\n      i18n = _useTranslation.i18n;\n\n  var changeLanguage = function changeLanguage(lng) {\n    i18n.changeLanguage(lng);\n  };\n\n  return __jsx(\"div\", {\n    className: \"App\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"App-header\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(Title, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, t('welcome')), __jsx(\"button\", {\n    onClick: function onClick() {\n      return changeLanguage('de');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, \"de\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return changeLanguage('en');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, \"en\")), __jsx(\"div\", {\n    className: \"App-intro\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, t('description.part2')));\n}\n\n_s(Page, \"OZwazanA59tbNDUkc8lMSmTHj9Q=\", false, function () {\n  return [react_i18next__WEBPACK_IMPORTED_MODULE_2__[\"useTranslation\"]];\n});\n\n_c2 = Page;\n\nvar Loader = function Loader() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, \"Loading..\");\n};\n\n_c3 = Loader;\nfunction App() {\n  return __jsx(Page, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  });\n}\n_c4 = App;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Title\");\n$RefreshReg$(_c2, \"Page\");\n$RefreshReg$(_c3, \"Loader\");\n$RefreshReg$(_c4, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lbi9pbmRleC50c3g/NDc4MCJdLCJuYW1lcyI6WyJUaXRsZSIsInN0eWxlZCIsImgxIiwiUGFnZSIsInVzZVRyYW5zbGF0aW9uIiwidCIsImkxOG4iLCJjaGFuZ2VMYW5ndWFnZSIsImxuZyIsIkxvYWRlciIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFJQSxJQUFNQSxLQUFLLEdBQUdDLHlEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEsaUNBQVg7S0FBTUYsSzs7QUFLTixTQUFTRyxJQUFULEdBQWdCO0FBQUE7O0FBQUEsd0JBQ01DLG9FQUFjLEVBRHBCO0FBQUEsTUFDTkMsQ0FETSxtQkFDTkEsQ0FETTtBQUFBLE1BQ0hDLElBREcsbUJBQ0hBLElBREc7O0FBR2QsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxHQUFHLEVBQUk7QUFDNUJGLFFBQUksQ0FBQ0MsY0FBTCxDQUFvQkMsR0FBcEI7QUFDRCxHQUZEOztBQUlBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUgsQ0FBQyxDQUFDLFNBQUQsQ0FBVCxDQURGLEVBRUU7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNRSxjQUFjLENBQUMsSUFBRCxDQUFwQjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRixFQUdFO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTUEsY0FBYyxDQUFDLElBQUQsQ0FBcEI7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBSEYsQ0FERixFQU1FO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNRixDQUFDLENBQUMsbUJBQUQsQ0FBUCxDQVJGLENBREY7QUFZRDs7R0FuQlFGLEk7VUFDYUMsNEQ7OztNQURiRCxJOztBQXFCVCxJQUFNTSxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLFNBQ2QsK0VBRGM7QUFBQSxDQUFmOztNQUFNQSxNO0FBSVMsU0FBU0MsR0FBVCxHQUFlO0FBQzVCLFNBQ0ksTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESjtBQUdEO01BSnVCQSxHIiwiZmlsZSI6Ii4vcGFnZXMvZW4vaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbi8vaW1wb3J0ICcuLi8uLi9pMThuJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uLCB3aXRoVHJhbnNsYXRpb24sIFRyYW5zLCBJMThuZXh0UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1pMThuZXh0JztcblxuXG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDUwcHg7XG5gXG5cbmZ1bmN0aW9uIFBhZ2UoKSB7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICBjb25zdCBjaGFuZ2VMYW5ndWFnZSA9IGxuZyA9PiB7XG4gICAgaTE4bi5jaGFuZ2VMYW5ndWFnZShsbmcpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwLWhlYWRlclwiPlxuICAgICAgICA8VGl0bGU+e3QoJ3dlbGNvbWUnKX08L1RpdGxlPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNoYW5nZUxhbmd1YWdlKCdkZScpfT5kZTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNoYW5nZUxhbmd1YWdlKCdlbicpfT5lbjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcC1pbnRyb1wiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2Pnt0KCdkZXNjcmlwdGlvbi5wYXJ0MicpfTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBMb2FkZXIgPSAoKSA9PiAoXG5cdDw+TG9hZGluZy4uPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgICA8UGFnZSAvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/en/index.tsx\n");

/***/ })

})