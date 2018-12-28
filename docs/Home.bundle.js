(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Home"],{

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/Home/Home.vue?vue&type=style&index=0&lang=less&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Home/Home.vue?vue&type=style&index=0&lang=less& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#home .mu-carousel {\n  height: 200px;\n  z-index: 9;\n}\n#home .mu-carousel .mu-carousel-item a {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n#home .mu-carousel .mu-carousel-item a img {\n  width: 100%;\n  height: 100%;\n}\n#home .gridlist-inline-demo {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/Home/Home.vue?vue&type=style&index=0&lang=less&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Home/Home.vue?vue&type=style&index=0&lang=less& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=less& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/Home/Home.vue?vue&type=style&index=0&lang=less&");

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

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Home/Home.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Home/Home.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
            aBanner: [{
                src: __webpack_require__(/*! ../../assets/images/banner.jpg */ "./src/assets/images/banner.jpg"),
                alt: '轮播图1'
            }, {
                src: __webpack_require__(/*! ../../assets/images/banner-01.jpg */ "./src/assets/images/banner-01.jpg"),
                alt: '轮播图2'
            }, {
                src: __webpack_require__(/*! ../../assets/images/banner-02.jpg */ "./src/assets/images/banner-02.jpg"),
                alt: '轮播图3'
            }, {
                src: __webpack_require__(/*! ../../assets/images/banner-03.jpg */ "./src/assets/images/banner-03.jpg"),
                alt: '轮播图4'
            }],
            gridOptions1: {
                title: '正在热映',
                aGridList: []
            },
            gridOptions2: {
                title: '即将上映',
                aGridList: []
            },
            gridOptions3: {
                title: '口碑榜',
                aGridList: []
            },
            aHotData: [], // 交互过来的正在热映的数据
            aComingData: [], // 交互过来的即将上映的数据
            aWordofMouthData: [], // 交互过来的口碑榜的数据
        }
    },
    mounted() {
        this.initHotData();
        this.initComingData();
        this.initWordofMouthData();
    },
    methods: {
        initHotData() {
            this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters?start=0&count=10')
                .then(response => {
                    let aData = response.body.subjects;
                    this.aHotData = aData;
                    for (let i = 0; i < aData.length; i++) {
                        let obj = {};
                        obj.id = aData[i].id;
                        obj.src = aData[i].images.large;
                        obj.title = aData[i].title;
                        obj.name = aData[i].casts[0].name;
                        this.gridOptions1.aGridList.push(obj);
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },
        initComingData() {
            this.$http.jsonp('https://api.douban.com/v2/movie/coming_soon?start=0&count=10')
                .then(response => {
                    let aData = response.body.subjects;
                    this.aComingData = aData;
                    for (let i = 0; i < aData.length; i++) {
                        let obj = {};
                        obj.id = aData[i].id;
                        obj.src = aData[i].images.large;
                        obj.title = aData[i].title;
                        obj.name = aData[i].casts[0].name;
                        this.gridOptions2.aGridList.push(obj);
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },
        initWordofMouthData() {
            this.$http.jsonp('https://api.douban.com/v2/movie/weekly?apikey=0b2bdeda43b5688921839c8ecb20399b')
                .then(response => {
                    let aData = response.body.subjects;
                    this.aWordofMouthData = aData;
                    for (let i = 0; i < aData.length; i++) {
                        let obj = {};
                        obj.id = aData[i].subject.id;
                        obj.src = aData[i].subject.images.large;
                        obj.title = aData[i].subject.title;
                        obj.name = aData[i].subject.casts[0].name;
                        this.gridOptions3.aGridList.push(obj);
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },
        getHotMovieInfo(id) {
            this.aHotData.forEach((obj) => {
                if (obj.id === id) {
                    this.$router.push({
                        name: 'MovieDetail',
                        params: obj
                    });
                }
            });
        },
        getComingMovieInfo(id) {
            this.aComingData.forEach((obj) => {
                if (obj.id === id) {
                    this.$router.push({
                        name: 'MovieDetail',
                        params: obj
                    });
                }
            });
        },
        getWordofMouthMovieInfo(id) {
            this.aWordofMouthData.forEach((obj) => {
                if (obj.subject.id === id) {
                    this.$router.push({
                        name: 'MovieDetail',
                        params: obj
                    });
                }
            });
        },
        starHotMovie(ev, id) {
            if (ev.target.nextSibling.style.color == '') {
                ev.target.nextSibling.style.color = '#f90';
                this.$toast.center('收藏成功');
            } else if (ev.target.nextSibling.style.color == 'rgb(255, 153, 0)') {
                ev.target.nextSibling.style.color = '';
                this.$toast.center('已取消收藏');
            }
        }
    }
});



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Home/Home.vue?vue&type=template&id=15737ea2&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Home/Home.vue?vue&type=template&id=15737ea2& ***!
  \***************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "home" } },
    [
      _c(
        "mu-carousel",
        { attrs: { "hide-controls": "", interval: "3000" } },
        _vm._l(_vm.aBanner, function(item, index) {
          return _c("mu-carousel-item", { key: index }, [
            _c("a", { attrs: { href: "javascript:;", title: "" } }, [
              _c("img", { attrs: { src: item.src, alt: item.alt } })
            ])
          ])
        })
      ),
      _vm._v(" "),
      _c("Grid", {
        ref: "grid1",
        attrs: { gridOptions: _vm.gridOptions1 },
        on: { star: _vm.starHotMovie, getMovieInfo: _vm.getHotMovieInfo }
      }),
      _vm._v(" "),
      _c("Grid", {
        ref: "grid2",
        attrs: { gridOptions: _vm.gridOptions2 },
        on: { star: _vm.starComingMovie, getMovieInfo: _vm.getComingMovieInfo }
      }),
      _vm._v(" "),
      _c("Grid", {
        ref: "grid3",
        attrs: { gridOptions: _vm.gridOptions3 },
        on: {
          star: _vm.starWordofMouthMovie,
          getMovieInfo: _vm.getWordofMouthMovieInfo
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/assets/images/banner-01.jpg":
/*!*****************************************!*\
  !*** ./src/assets/images/banner-01.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "banner-01.jpg";

/***/ }),

/***/ "./src/assets/images/banner-02.jpg":
/*!*****************************************!*\
  !*** ./src/assets/images/banner-02.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "banner-02.jpg";

/***/ }),

/***/ "./src/assets/images/banner-03.jpg":
/*!*****************************************!*\
  !*** ./src/assets/images/banner-03.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "banner-03.jpg";

/***/ }),

/***/ "./src/assets/images/banner.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/banner.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "banner.jpg";

/***/ }),

/***/ "./src/components/Home/Home.vue":
/*!**************************************!*\
  !*** ./src/components/Home/Home.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_15737ea2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=15737ea2& */ "./src/components/Home/Home.vue?vue&type=template&id=15737ea2&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./src/components/Home/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&lang=less& */ "./src/components/Home/Home.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_15737ea2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_15737ea2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Home/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Home/Home.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/components/Home/Home.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Home/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Home/Home.vue?vue&type=style&index=0&lang=less&":
/*!************************************************************************!*\
  !*** ./src/components/Home/Home.vue?vue&type=style&index=0&lang=less& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=less& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/Home/Home.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/Home/Home.vue?vue&type=template&id=15737ea2&":
/*!*********************************************************************!*\
  !*** ./src/components/Home/Home.vue?vue&type=template&id=15737ea2& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_15737ea2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=15737ea2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Home/Home.vue?vue&type=template&id=15737ea2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_15737ea2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_15737ea2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=Home.bundle.js.map