(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Discovery"],{

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/Discovery/Discovery.vue?vue&type=style&index=0&lang=less&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Discovery/Discovery.vue?vue&type=style&index=0&lang=less& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#discovery .demo-loadmore-wrap {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n#discovery .demo-loadmore-wrap .mu-appbar {\n  width: 100%;\n}\n#discovery .demo-loadmore-wrap .demo-loadmore-content {\n  flex: 1;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n#discovery .demo-loadmore-wrap .container {\n  padding: 0;\n}\n#discovery .demo-loadmore-wrap .myList {\n  display: flex;\n}\n#discovery .demo-loadmore-wrap .myList .mu-list {\n  margin: 2px;\n  padding: 0;\n}\n#discovery .demo-loadmore-wrap .myList .mu-list > li {\n  margin-bottom: 4px;\n}\n#discovery .demo-loadmore-wrap .myList .mu-item {\n  height: auto;\n  padding: 0;\n}\n#discovery .demo-loadmore-wrap .myList .mu-item img {\n  width: 100%;\n  height: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/Discovery/Discovery.vue?vue&type=style&index=0&lang=less&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Discovery/Discovery.vue?vue&type=style&index=0&lang=less& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Discovery.vue?vue&type=style&index=0&lang=less& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/Discovery/Discovery.vue?vue&type=style&index=0&lang=less&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Discovery/Discovery.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Discovery/Discovery.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            refreshing: false,
            loading: false,
            isGallery: false,
            aGallery: [],
            aGalleryLeft: [],
            aGalleryRight: [],
            start: 0, // 分页使用表示第个数据
            iLeftTotal: 0, // 左瀑布流的高度
            iRightTotal: 0, // 右瀑布流的高度
        }
    },
    mounted() {
        this.$nextTick(() => {
            let iMainHeight = $(window).height() - $('#header').height() - $('#footer').height();
            $('.main .demo-loadmore-wrap').css({
                height: iMainHeight + 'px'
            });
            this.initData();
        });
    },
    methods: {
        initData() {
            this.$http.jsonp('http://api.douban.com/v2/movie/top250?start=' + this.start + '&count=10')
                .then(response => {
                    for (let item of response.body.subjects) {
                        if (!this.aGalleryLeft.length) {
                            this.aGalleryLeft.push(item);
                            setTimeout(() => {
                                $('#waterpull_left .mu-item img').css({
                                    height: this.rnd(180, 220) + 'px'
                                });
                                this.iLeftTotal += $('#waterpull_left .mu-item img').height();
                            }, 0);
                        } else if (!this.aGalleryRight.length) {
                            this.aGalleryRight.push(item);
                            setTimeout(() => {
                                $('#waterpull_right .mu-item img').css({
                                    height: this.rnd(180, 220) + 'px'
                                });
                                this.iRightTotal += $('#waterpull_right .mu-item img').height();
                            }, 0);
                        } else {
                            setTimeout(() => {
                                // console.log(this.iLeftTotal, this.iRightTotal)
                                if (this.iLeftTotal <= this.iRightTotal) {
                                    this.aGalleryLeft.push(item);
                                    setTimeout(() => {
                                        this.iLeftTotal += $('#waterpull_left .mu-item img').height();
                                        // console.log(this.iLeftTotal)
                                        $('#waterpull_left .mu-item img').css({
                                            height: this.rnd(180, 220) + 'px'
                                        });
                                    }, 0);
                                    // console.log(this.iLeftTotal)
                                } else {
                                    this.aGalleryRight.push(item);
                                    setTimeout(() => {
                                        $('#waterpull_right .mu-item img').css({
                                            height: this.rnd(180, 220) + 'px'
                                        });
                                        this.iRightTotal += $('#waterpull_right .mu-item img').height();
                                    }, 0);
                                }
                            }, 0);
                        }
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },
        rnd(n, m) {
            return Math.floor(Math.random() * (m - n) + n);
        },
        refresh() {
            this.refreshing = true;
            this.$refs.container.scrollTop = 0;
            setTimeout(() => {
                this.refreshing = false;
                this.aGallery = [];
                this.start = 0;
                this.initData();
            }, 2000)
        },
        load() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
                this.start += 10;
                this.initData();
            }, 2000)
        }
    }
});


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Discovery/Discovery.vue?vue&type=template&id=1acf8971&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Discovery/Discovery.vue?vue&type=template&id=1acf8971& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "discovery" } },
    [
      _c(
        "mu-paper",
        { staticClass: "demo-loadmore-wrap", attrs: { "z-depth": 5 } },
        [
          _c(
            "mu-container",
            { ref: "container", staticClass: "demo-loadmore-content" },
            [
              _c(
                "mu-load-more",
                {
                  attrs: { refreshing: _vm.refreshing, loading: _vm.loading },
                  on: {
                    refresh: function($event) {
                      _vm.refresh()
                    },
                    load: function($event) {
                      _vm.load()
                    }
                  }
                },
                [
                  _c(
                    "div",
                    { staticClass: "myList" },
                    [
                      _c(
                        "mu-list",
                        { attrs: { id: "waterpull_left" } },
                        [
                          _vm._l(_vm.aGalleryLeft, function(item) {
                            return [
                              _c("mu-list-item", [
                                _c("img", {
                                  attrs: {
                                    src: item.images.large,
                                    alt: item.title
                                  }
                                })
                              ])
                            ]
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "mu-list",
                        { attrs: { id: "waterpull_right" } },
                        [
                          _vm._l(_vm.aGalleryRight, function(item) {
                            return [
                              _c("mu-list-item", [
                                _c("img", {
                                  attrs: {
                                    src: item.images.large,
                                    alt: item.title
                                  }
                                })
                              ])
                            ]
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "mu-list",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.isGallery,
                              expression: "isGallery"
                            }
                          ],
                          attrs: { id: "mylist" }
                        },
                        [
                          _vm._l(_vm.aGallery, function(item) {
                            return [
                              _c("mu-list-item", [
                                _c("img", {
                                  attrs: {
                                    src: item.images.large,
                                    alt: item.title
                                  }
                                })
                              ])
                            ]
                          })
                        ],
                        2
                      )
                    ],
                    1
                  )
                ]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/components/Discovery/Discovery.vue":
/*!************************************************!*\
  !*** ./src/components/Discovery/Discovery.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Discovery_vue_vue_type_template_id_1acf8971___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Discovery.vue?vue&type=template&id=1acf8971& */ "./src/components/Discovery/Discovery.vue?vue&type=template&id=1acf8971&");
/* harmony import */ var _Discovery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Discovery.vue?vue&type=script&lang=js& */ "./src/components/Discovery/Discovery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Discovery_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Discovery.vue?vue&type=style&index=0&lang=less& */ "./src/components/Discovery/Discovery.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Discovery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Discovery_vue_vue_type_template_id_1acf8971___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Discovery_vue_vue_type_template_id_1acf8971___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Discovery/Discovery.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Discovery/Discovery.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/components/Discovery/Discovery.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Discovery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./Discovery.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Discovery/Discovery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Discovery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Discovery/Discovery.vue?vue&type=style&index=0&lang=less&":
/*!**********************************************************************************!*\
  !*** ./src/components/Discovery/Discovery.vue?vue&type=style&index=0&lang=less& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Discovery_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Discovery.vue?vue&type=style&index=0&lang=less& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/Discovery/Discovery.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Discovery_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Discovery_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Discovery_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Discovery_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Discovery_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/Discovery/Discovery.vue?vue&type=template&id=1acf8971&":
/*!*******************************************************************************!*\
  !*** ./src/components/Discovery/Discovery.vue?vue&type=template&id=1acf8971& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Discovery_vue_vue_type_template_id_1acf8971___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Discovery.vue?vue&type=template&id=1acf8971& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Discovery/Discovery.vue?vue&type=template&id=1acf8971&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Discovery_vue_vue_type_template_id_1acf8971___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Discovery_vue_vue_type_template_id_1acf8971___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=Discovery.bundle.js.map