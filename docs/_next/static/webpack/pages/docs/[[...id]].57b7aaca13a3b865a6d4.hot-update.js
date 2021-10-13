webpackHotUpdate_N_E("pages/docs/[[...id]]",{

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator/_index.mjs":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/regenerator/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/services/mdx/components/YTPlayer.tsx":
/*!**************************************************!*\
  !*** ./src/services/mdx/components/YTPlayer.tsx ***!
  \**************************************************/
/*! exports provided: YTPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YTPlayer", function() { return YTPlayer; });
/* harmony import */ var I_projects_Github_LaunchMenu_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var I_projects_Github_LaunchMenu_github_io_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var I_projects_Github_LaunchMenu_github_io_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(I_projects_Github_LaunchMenu_github_io_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var I_projects_Github_LaunchMenu_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var I_projects_Github_LaunchMenu_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var I_projects_Github_LaunchMenu_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var youtube_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! youtube-player */ "./node_modules/youtube-player/dist/index.js");
/* harmony import */ var youtube_player__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(youtube_player__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/GridList */ "./node_modules/@material-ui/core/esm/GridList/index.js");
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/GridListTile */ "./node_modules/@material-ui/core/esm/GridListTile/index.js");
/* harmony import */ var _material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/GridListTileBar */ "./node_modules/@material-ui/core/esm/GridListTileBar/index.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");






var _jsxFileName = "I:\\projects\\Github\\LaunchMenu.github.io\\src\\services\\mdx\\components\\YTPlayer.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(I_projects_Github_LaunchMenu_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











function getVideoData(_x) {
  return _getVideoData.apply(this, arguments);
}

function _getVideoData() {
  _getVideoData = Object(I_projects_Github_LaunchMenu_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/I_projects_Github_LaunchMenu_github_io_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(ID) {
    var response, data;
    return I_projects_Github_LaunchMenu_github_io_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return fetch("https://www.youtube.com/oembed?format=json&url=https://www.youtube.com/watch?v=".concat(ID), {
              credentials: "omit"
            });

          case 2:
            response = _context5.sent;
            _context5.next = 5;
            return response.json();

          case 5:
            data = _context5.sent;
            return _context5.abrupt("return", {
              title: data.title,
              image: data.thumbnail_url,
              author: data.author_name,
              width: data.width,
              height: data.height
            });

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getVideoData.apply(this, arguments);
}

var YTPlayer = function YTPlayer(_ref) {
  _s();

  var video = _ref.video,
      playlist = _ref.playlist,
      _ref$showPlaylistVide = _ref.showPlaylistVideos,
      showPlaylistVideos = _ref$showPlaylistVide === void 0 ? true : _ref$showPlaylistVide,
      aspectRatio = _ref.aspectRatio,
      rest = Object(I_projects_Github_LaunchMenu_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["video", "playlist", "showPlaylistVideos", "aspectRatio"]);

  var player = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  var container = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
  var placeholder = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      videos = _useState[0],
      setVideos = _useState[1]; // Create the video player and load the data of the playlist


  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (placeholder.current) {
      // Create the video player
      var p = player.current = youtube_player__WEBPACK_IMPORTED_MODULE_6___default()(placeholder.current, {
        width: "100%",
        videoId: video,
        playerVars: {
          listType: "playlist",
          list: playlist,
          color: "white",
          rel: 0
        }
      }); // Get the video data in the playlist

      if (showPlaylistVideos) {
        Object(I_projects_Github_LaunchMenu_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/I_projects_Github_LaunchMenu_github_io_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
          var IDS, videos;
          return I_projects_Github_LaunchMenu_github_io_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return p.getPlaylist();

                case 2:
                  IDS = _context2.sent;
                  _context2.next = 5;
                  return Promise.all(IDS.map( /*#__PURE__*/function () {
                    var _ref3 = Object(I_projects_Github_LaunchMenu_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/I_projects_Github_LaunchMenu_github_io_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(ID, index) {
                      var data;
                      return I_projects_Github_LaunchMenu_github_io_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _context.prev = 0;
                              _context.next = 3;
                              return getVideoData(ID);

                            case 3:
                              data = _context.sent;
                              return _context.abrupt("return", _objectSpread({
                                ID: ID,
                                index: index
                              }, data));

                            case 7:
                              _context.prev = 7;
                              _context.t0 = _context["catch"](0);

                            case 9:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee, null, [[0, 7]]);
                    }));

                    return function (_x2, _x3) {
                      return _ref3.apply(this, arguments);
                    };
                  }()));

                case 5:
                  videos = _context2.sent;
                  setVideos(videos.filter(function (b) {
                    return !!b;
                  }));

                case 7:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))();
      }

      return function () {
        return p.destroy();
      };
    }
  }, []); // Load the aspect ratio tracker

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(16 / 9),
      contentRatio = _useState2[0],
      setContentRatio = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var p = player.current;

    if (p) {
      var videoID = "";

      var updateSize = /*#__PURE__*/function () {
        var _ref4 = Object(I_projects_Github_LaunchMenu_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/I_projects_Github_LaunchMenu_github_io_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
          var params, ID, data;
          return I_projects_Github_LaunchMenu_github_io_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.t0 = URLSearchParams;
                  _context3.next = 3;
                  return p.getVideoUrl();

                case 3:
                  _context3.t1 = _context3.sent;
                  params = new _context3.t0(_context3.t1);
                  ID = params.get("v");

                  if (!(ID && ID != videoID)) {
                    _context3.next = 12;
                    break;
                  }

                  videoID = ID;
                  _context3.next = 10;
                  return getVideoData(ID);

                case 10:
                  data = _context3.sent;
                  setContentRatio(data.width / data.height);

                case 12:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function updateSize() {
          return _ref4.apply(this, arguments);
        };
      }();

      updateSize();
      p.on("stateChange", updateSize);
      return function () {
        return p.removeEventListener("stateChange", updateSize);
      };
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (!aspectRatio) return;

    var updateHeight = /*#__PURE__*/function () {
      var _ref5 = Object(I_projects_Github_LaunchMenu_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/I_projects_Github_LaunchMenu_github_io_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
        var p, el, playerEl, height;
        return I_projects_Github_LaunchMenu_github_io_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                p = player.current;
                el = container.current;

                if (!(el && p)) {
                  _context4.next = 9;
                  break;
                }

                _context4.next = 5;
                return p.getIframe();

              case 5:
                playerEl = _context4.sent;
                height = 0;
                if (aspectRatio == "auto") height = el.clientWidth / contentRatio;else height = el.clientWidth / aspectRatio;
                playerEl.style.height = "".concat(Math.floor(height), "px");

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function updateHeight() {
        return _ref5.apply(this, arguments);
      };
    }();

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return function () {
      return window.removeEventListener("resize", updateHeight);
    };
  }, [contentRatio]); // Video selection

  var selectVideo = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (index) {
    var p = player.current;
    if (p) p.playVideoAt(index);
  }, []); // Render the UI

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
    ref: container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", Object(I_projects_Github_LaunchMenu_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: placeholder
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
    css: function css(theme) {
      return {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
        ".gridList": {
          flexWrap: "nowrap",
          // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS: https://material-ui.com/components/grid-list/
          transform: "translateZ(0)",
          minWidth: "100%"
        },
        ".tile": Object(I_projects_Github_LaunchMenu_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
          cursor: "pointer"
        }, theme.breakpoints.down("xs"), {
          width: "50% !important"
        }),
        ".title": {
          fontSize: 14,
          whiteSpace: "normal"
        },
        ".titleBar": {
          background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.35) 80%, rgba(0,0,0,0) 100%)",
          height: "auto",
          paddingTop: 16,
          paddingBottom: 8
        }
      };
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }, videos && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    cellHeight: 130,
    className: "gridList",
    cols: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 21
    }
  }, videos.map(function (_ref6) {
    var title = _ref6.title,
        image = _ref6.image,
        index = _ref6.index;
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: image,
      className: "tile",
      onClick: function onClick() {
        return selectVideo(index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 29
      }
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("img", {
      src: image,
      alt: title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 33
      }
    }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
      title: title,
      classes: {
        root: "titleBar",
        title: "title"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 33
      }
    }));
  }))));
};

_s(YTPlayer, "0t6Q1o2TTIvaJX25Ai4JRexmmtE=");

_c = YTPlayer;

var _c;

$RefreshReg$(_c, "YTPlayer");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvc2VydmljZXMvbWR4L2NvbXBvbmVudHMvWVRQbGF5ZXIudHN4Il0sIm5hbWVzIjpbImdldFZpZGVvRGF0YSIsIklEIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJ0aXRsZSIsImltYWdlIiwidGh1bWJuYWlsX3VybCIsImF1dGhvciIsImF1dGhvcl9uYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJZVFBsYXllciIsInZpZGVvIiwicGxheWxpc3QiLCJzaG93UGxheWxpc3RWaWRlb3MiLCJhc3BlY3RSYXRpbyIsInJlc3QiLCJwbGF5ZXIiLCJ1c2VSZWYiLCJjb250YWluZXIiLCJwbGFjZWhvbGRlciIsInVzZVN0YXRlIiwidmlkZW9zIiwic2V0VmlkZW9zIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInAiLCJ5b3VUdWJlUGxheWVyIiwidmlkZW9JZCIsInBsYXllclZhcnMiLCJsaXN0VHlwZSIsImxpc3QiLCJjb2xvciIsInJlbCIsImdldFBsYXlsaXN0IiwiSURTIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImluZGV4IiwiZmlsdGVyIiwiYiIsImRlc3Ryb3kiLCJjb250ZW50UmF0aW8iLCJzZXRDb250ZW50UmF0aW8iLCJ2aWRlb0lEIiwidXBkYXRlU2l6ZSIsIlVSTFNlYXJjaFBhcmFtcyIsImdldFZpZGVvVXJsIiwicGFyYW1zIiwiZ2V0Iiwib24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidXBkYXRlSGVpZ2h0IiwiZWwiLCJnZXRJZnJhbWUiLCJwbGF5ZXJFbCIsImNsaWVudFdpZHRoIiwic3R5bGUiLCJNYXRoIiwiZmxvb3IiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2VsZWN0VmlkZW8iLCJ1c2VDYWxsYmFjayIsInBsYXlWaWRlb0F0IiwidGhlbWUiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJqdXN0aWZ5Q29udGVudCIsIm92ZXJmbG93IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsInRyYW5zZm9ybSIsIm1pbldpZHRoIiwiY3Vyc29yIiwiYnJlYWtwb2ludHMiLCJkb3duIiwiZm9udFNpemUiLCJ3aGl0ZVNwYWNlIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJyb290Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7OztBQ2JBLGlCQUFpQixtQkFBTyxDQUFDLDBFQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0M5QztBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUdBOzs7U0FJZUEsWTs7Ozs7NlVBQWYsa0JBQTRCQyxFQUE1QjtBQUFB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QjtBQUEyQixhQUFTLEVBQUMsVUFBckM7QUFBZ0QsUUFBSSxFQUFFLENBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0EsTUFBTSxDQUFDZ0IsR0FBUCxDQUFXO0FBQUEsUUFBRWxDLEtBQUYsU0FBRUEsS0FBRjtBQUFBLFFBQVNDLEtBQVQsU0FBU0EsS0FBVDtBQUFBLFFBQWdCa0MsS0FBaEIsU0FBZ0JBLEtBQWhCO0FBQUEsV0FDUiw0REFBQyxzRUFBRDtBQUNJLFNBQUcsRUFBRWxDLEtBRFQ7QUFFSSxlQUFTLEVBQUMsTUFGZDtBQUdJLGFBQU8sRUFBRTtBQUFBLGVBQU0wRCxXQUFXLENBQUN4QixLQUFELENBQWpCO0FBQUEsT0FIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUk7QUFBSyxTQUFHLEVBQUVsQyxLQUFWO0FBQWlCLFNBQUcsRUFBRUQsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpKLEVBS0ksNERBQUMseUVBQUQ7QUFDSSxXQUFLLEVBQUVBLEtBRFg7QUFFSSxhQUFPLEVBQUU7QUFDTGdGLFlBQUksRUFBRSxVQUREO0FBRUxoRixhQUFLLEVBQUU7QUFGRixPQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMSixDQURRO0FBQUEsR0FBWCxDQURMLENBaENSLENBSEosQ0FESjtBQXlESCxDQTVKTTs7R0FBTU8sUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL1tbLi4uaWRdXS41N2I3YWFjYTEzYTNiODY1YTZkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImltcG9ydCB7dXNlVGhlbWV9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0ZDLCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeW91VHViZVBsYXllciBmcm9tIFwieW91dHViZS1wbGF5ZXJcIjtcbmltcG9ydCB7WW91VHViZVBsYXllcn0gZnJvbSBcInlvdXR1YmUtcGxheWVyL2Rpc3QvdHlwZXNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IEdyaWRMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdFwiO1xuaW1wb3J0IEdyaWRMaXN0VGlsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3RUaWxlXCI7XG5pbXBvcnQgR3JpZExpc3RUaWxlQmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdFRpbGVCYXJcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XG5pbXBvcnQgU3RhckJvcmRlckljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TdGFyQm9yZGVyXCI7XG5pbXBvcnQge3VzZUNhbGxiYWNrfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXNlQm9keVNpemV9IGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VCb2R5U2l6ZVwiO1xuXG50eXBlIElWaWRlb0RhdGEgPSB7dGl0bGU6IHN0cmluZzsgSUQ6IHN0cmluZzsgaW1hZ2U6IHN0cmluZzsgaW5kZXg6IG51bWJlcn07XG5hc3luYyBmdW5jdGlvbiBnZXRWaWRlb0RhdGEoSUQ6IHN0cmluZyk6IFByb21pc2U8e1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgaW1hZ2U6IHN0cmluZztcbiAgICBhdXRob3I6IHN0cmluZztcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xufT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9vZW1iZWQ/Zm9ybWF0PWpzb24mdXJsPWh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9JHtJRH1gLFxuICAgICAgICB7Y3JlZGVudGlhbHM6IFwib21pdFwifVxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgICAgICBpbWFnZTogZGF0YS50aHVtYm5haWxfdXJsLFxuICAgICAgICBhdXRob3I6IGRhdGEuYXV0aG9yX25hbWUsXG4gICAgICAgIHdpZHRoOiBkYXRhLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGRhdGEuaGVpZ2h0LFxuICAgIH07XG59XG5cbmV4cG9ydCBjb25zdCBZVFBsYXllcjogRkM8e1xuICAgIHZpZGVvOiBzdHJpbmc7XG4gICAgcGxheWxpc3Q/OiBzdHJpbmc7XG4gICAgLyoqIFdoZXRoZXIgdG8gc2hvdyB0aGUgdmlkZW9zIGluIHRoZSBwbGF5bGlzdCBiZWxvdyB0aGUgdmlkZW8gKi9cbiAgICBzaG93UGxheWxpc3RWaWRlb3M/OiBib29sZWFuO1xuICAgIC8qKiBUaGUgd2lkdGgvaGVpZ2h0IHJhdGlvIHRoYXQgdGhlIGVsZW1lbnQgc2hvdWxkIGhhdmUsIHRoZSBwbGF5ZXIncyB3aWR0aCB3aWxsIGZpbGwgaXRzIHBhcmVudCBieSBkZWZhdWx0LiBcImF1dG9cIiByZWxpZXMgb24geXQncyB2aWRlbyBkYXRhIGhvd2V2ZXIsIHdoaWNoIHNlZW1zIHRvIGJlIHdyb25nIGF0bSAqL1xuICAgIGFzcGVjdFJhdGlvPzogbnVtYmVyIHwgXCJhdXRvXCI7XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xufT4gPSAoe3ZpZGVvLCBwbGF5bGlzdCwgc2hvd1BsYXlsaXN0VmlkZW9zID0gdHJ1ZSwgYXNwZWN0UmF0aW8sIC4uLnJlc3R9KSA9PiB7XG4gICAgY29uc3QgcGxheWVyID0gdXNlUmVmPFlvdVR1YmVQbGF5ZXI+KCk7XG4gICAgY29uc3QgY29udGFpbmVyID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gICAgY29uc3QgW3ZpZGVvcywgc2V0VmlkZW9zXSA9IHVzZVN0YXRlPElWaWRlb0RhdGFbXT4oW10pO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSB2aWRlbyBwbGF5ZXIgYW5kIGxvYWQgdGhlIGRhdGEgb2YgdGhlIHBsYXlsaXN0XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHBsYWNlaG9sZGVyLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgdmlkZW8gcGxheWVyXG4gICAgICAgICAgICBjb25zdCBwID0gKHBsYXllci5jdXJyZW50ID0geW91VHViZVBsYXllcihwbGFjZWhvbGRlci5jdXJyZW50LCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIHZpZGVvSWQ6IHZpZGVvLFxuICAgICAgICAgICAgICAgIHBsYXllclZhcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdFR5cGU6IFwicGxheWxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgbGlzdDogcGxheWxpc3QsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlbDogMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAvLyBHZXQgdGhlIHZpZGVvIGRhdGEgaW4gdGhlIHBsYXlsaXN0XG4gICAgICAgICAgICBpZiAoc2hvd1BsYXlsaXN0VmlkZW9zKSB7XG4gICAgICAgICAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgSURTID0gYXdhaXQgcC5nZXRQbGF5bGlzdCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2aWRlb3MgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgICAgICAgICAgICAgIElEUy5tYXAoYXN5bmMgKElELCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRWaWRlb0RhdGEoSUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge0lELCBpbmRleCwgLi4uZGF0YX0gYXMgSVZpZGVvRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHt9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldFZpZGVvcyh2aWRlb3MuZmlsdGVyKChiKTogYiBpcyBJVmlkZW9EYXRhID0+ICEhYikpO1xuICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoKSA9PiBwLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIC8vIExvYWQgdGhlIGFzcGVjdCByYXRpbyB0cmFja2VyXG4gICAgY29uc3QgW2NvbnRlbnRSYXRpbywgc2V0Q29udGVudFJhdGlvXSA9IHVzZVN0YXRlKDE2IC8gOSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgcCA9IHBsYXllci5jdXJyZW50O1xuICAgICAgICBpZiAocCkge1xuICAgICAgICAgICAgbGV0IHZpZGVvSUQ6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVTaXplID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoYXdhaXQgcC5nZXRWaWRlb1VybCgpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBJRCA9IHBhcmFtcy5nZXQoXCJ2XCIpO1xuICAgICAgICAgICAgICAgIGlmIChJRCAmJiBJRCAhPSB2aWRlb0lEKSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZGVvSUQgPSBJRDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFZpZGVvRGF0YShJRCk7XG4gICAgICAgICAgICAgICAgICAgIHNldENvbnRlbnRSYXRpbyhkYXRhLndpZHRoIC8gZGF0YS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB1cGRhdGVTaXplKCk7XG5cbiAgICAgICAgICAgIHAub24oXCJzdGF0ZUNoYW5nZVwiLCB1cGRhdGVTaXplKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiBwLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdGF0ZUNoYW5nZVwiLCB1cGRhdGVTaXplKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIWFzcGVjdFJhdGlvKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgdXBkYXRlSGVpZ2h0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcCA9IHBsYXllci5jdXJyZW50O1xuICAgICAgICAgICAgY29uc3QgZWwgPSBjb250YWluZXIuY3VycmVudDtcbiAgICAgICAgICAgIGlmIChlbCAmJiBwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGxheWVyRWwgPSBhd2FpdCBwLmdldElmcmFtZSgpO1xuICAgICAgICAgICAgICAgIGxldCBoZWlnaHQgPSAwO1xuICAgICAgICAgICAgICAgIGlmIChhc3BlY3RSYXRpbyA9PSBcImF1dG9cIilcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gZWwuY2xpZW50V2lkdGggLyBjb250ZW50UmF0aW87XG4gICAgICAgICAgICAgICAgZWxzZSBoZWlnaHQgPSBlbC5jbGllbnRXaWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgICAgIHBsYXllckVsLnN0eWxlLmhlaWdodCA9IGAke01hdGguZmxvb3IoaGVpZ2h0KX1weGA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdXBkYXRlSGVpZ2h0KCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZUhlaWdodCk7XG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGVIZWlnaHQpO1xuICAgIH0sIFtjb250ZW50UmF0aW9dKTtcblxuICAgIC8vIFZpZGVvIHNlbGVjdGlvblxuICAgIGNvbnN0IHNlbGVjdFZpZGVvID0gdXNlQ2FsbGJhY2soKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgcCA9IHBsYXllci5jdXJyZW50O1xuICAgICAgICBpZiAocCkgcC5wbGF5VmlkZW9BdChpbmRleCk7XG4gICAgfSwgW10pO1xuXG4gICAgLy8gUmVuZGVyIHRoZSBVSVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgcmVmPXtjb250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdiByZWY9e3BsYWNlaG9sZGVyfSB7Li4ucmVzdH0gLz5cblxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNzcz17dGhlbWUgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgICAgICAgICAgICAgICAgXCIuZ3JpZExpc3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleFdyYXA6IFwibm93cmFwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQcm9tb3RlIHRoZSBsaXN0IGludG8gaGlzIG93biBsYXllciBvbiBDaHJvbWUuIFRoaXMgY29zdCBtZW1vcnkgYnV0IGhlbHBzIGtlZXBpbmcgaGlnaCBGUFM6IGh0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL2NvbXBvbmVudHMvZ3JpZC1saXN0L1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVooMClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCIudGlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI1MCUgIWltcG9ydGFudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCIudGl0bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3JtYWxcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCIudGl0bGVCYXJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwwLDAsMC43KSAwJSwgcmdiYSgwLDAsMCwwLjM1KSA4MCUsIHJnYmEoMCwwLDAsMCkgMTAwJSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAxNixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDgsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSl9PlxuICAgICAgICAgICAgICAgIHt2aWRlb3MgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8R3JpZExpc3QgY2VsbEhlaWdodD17MTMwfSBjbGFzc05hbWU9XCJncmlkTGlzdFwiIGNvbHM9ezN9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3ZpZGVvcy5tYXAoKHt0aXRsZSwgaW1hZ2UsIGluZGV4fSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGlzdFRpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdFZpZGVvKGluZGV4KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PXt0aXRsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMaXN0VGlsZUJhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3Q6IFwidGl0bGVCYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJ0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMaXN0VGlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMaXN0PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9