webpackHotUpdate_N_E("pages/index",{

/***/ "./src/hooks/useIsMobile.tsx":
/*!***********************************!*\
  !*** ./src/hooks/useIsMobile.tsx ***!
  \***********************************/
/*! exports provided: useIsMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsMobile", function() { return useIsMobile; });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_isClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/isClient */ "./src/services/isClient.ts");
var _s = $RefreshSig$();





function hasMinSize(width) {
  if (Object(_services_isClient__WEBPACK_IMPORTED_MODULE_2__["isClient"])()) return window.innerWidth >= width && window.innerHeight >= 700;else return false;
}

function useIsMobile() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      mobile = _useState[0],
      setMobile = _useState[1];

  var theme = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["useTheme"])();
  var minDesktopWidth = theme.breakpoints.values["lg"];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // Only update this data after a delay, to prevent SSR desync
    setMobile(!hasMinSize(minDesktopWidth));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var listener = function listener() {
      var shouldBeMobile = !hasMinSize(minDesktopWidth);
      if (shouldBeMobile != mobile) setMobile(shouldBeMobile);
    };

    window.addEventListener("resize", listener);
    return function () {
      return window.removeEventListener("resize", listener);
    };
  }, [mobile]);
  return mobile;
}

_s(useIsMobile, "xkgrOvh22ceQn3WRwL4VBiRBnOo=", false, function () {
  return [_emotion_react__WEBPACK_IMPORTED_MODULE_0__["useTheme"]];
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUlzTW9iaWxlLnRzeCJdLCJuYW1lcyI6WyJoYXNNaW5TaXplIiwid2lkdGgiLCJpc0NsaWVudCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInVzZUlzTW9iaWxlIiwidXNlU3RhdGUiLCJtb2JpbGUiLCJzZXRNb2JpbGUiLCJ0aGVtZSIsInVzZVRoZW1lIiwibWluRGVza3RvcFdpZHRoIiwiYnJlYWtwb2ludHMiLCJ2YWx1ZXMiLCJ1c2VFZmZlY3QiLCJsaXN0ZW5lciIsInNob3VsZEJlTW9iaWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUE0QztBQUN4QyxNQUFJQyxtRUFBUSxFQUFaLEVBQ0ksT0FBT0MsTUFBTSxDQUFDQyxVQUFQLElBQXFCSCxLQUFyQixJQUE4QkUsTUFBTSxDQUFDRSxXQUFQLElBQXNCLEdBQTNELENBREosS0FFSyxPQUFPLEtBQVA7QUFDUjs7QUFFTSxTQUFTQyxXQUFULEdBQWdDO0FBQUE7O0FBQUEsa0JBQ1BDLHNEQUFRLENBQUMsS0FBRCxDQUREO0FBQUEsTUFDNUJDLE1BRDRCO0FBQUEsTUFDcEJDLFNBRG9COztBQUVuQyxNQUFNQyxLQUFLLEdBQUdDLCtEQUFRLEVBQXRCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHRixLQUFLLENBQUNHLFdBQU4sQ0FBa0JDLE1BQWxCLENBQXlCLElBQXpCLENBQXhCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaO0FBQ0FOLGFBQVMsQ0FBQyxDQUFDVCxVQUFVLENBQUNZLGVBQUQsQ0FBWixDQUFUO0FBQ0gsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUtBRyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ25CLFVBQU1DLGNBQWMsR0FBRyxDQUFDakIsVUFBVSxDQUFDWSxlQUFELENBQWxDO0FBQ0EsVUFBSUssY0FBYyxJQUFJVCxNQUF0QixFQUE4QkMsU0FBUyxDQUFDUSxjQUFELENBQVQ7QUFDakMsS0FIRDs7QUFLQWQsVUFBTSxDQUFDZSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0YsUUFBbEM7QUFDQSxXQUFPO0FBQUEsYUFBTWIsTUFBTSxDQUFDZ0IsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNILFFBQXJDLENBQU47QUFBQSxLQUFQO0FBQ0gsR0FSUSxFQVFOLENBQUNSLE1BQUQsQ0FSTSxDQUFUO0FBVUEsU0FBT0EsTUFBUDtBQUNIOztHQXJCZUYsVztVQUVFSyx1RCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNjM4MjE2YTAwNDczNmQyODBkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VUaGVtZX0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtpc0NsaWVudH0gZnJvbSBcIi4uL3NlcnZpY2VzL2lzQ2xpZW50XCI7XG5cbmZ1bmN0aW9uIGhhc01pblNpemUod2lkdGg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmIChpc0NsaWVudCgpKVxuICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggPj0gd2lkdGggJiYgd2luZG93LmlubmVySGVpZ2h0ID49IDcwMDtcbiAgICBlbHNlIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUlzTW9iaWxlKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IFttb2JpbGUsIHNldE1vYmlsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICAgIGNvbnN0IG1pbkRlc2t0b3BXaWR0aCA9IHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlc1tcImxnXCJdO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gT25seSB1cGRhdGUgdGhpcyBkYXRhIGFmdGVyIGEgZGVsYXksIHRvIHByZXZlbnQgU1NSIGRlc3luY1xuICAgICAgICBzZXRNb2JpbGUoIWhhc01pblNpemUobWluRGVza3RvcFdpZHRoKSk7XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRCZU1vYmlsZSA9ICFoYXNNaW5TaXplKG1pbkRlc2t0b3BXaWR0aCk7XG4gICAgICAgICAgICBpZiAoc2hvdWxkQmVNb2JpbGUgIT0gbW9iaWxlKSBzZXRNb2JpbGUoc2hvdWxkQmVNb2JpbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGxpc3RlbmVyKTtcbiAgICB9LCBbbW9iaWxlXSk7XG5cbiAgICByZXR1cm4gbW9iaWxlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==