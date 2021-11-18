exports.ids = [5,15,16];
exports.modules = {

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./theme/src/components/global/icons/IconArrowLeft.vue?vue&type=template&id=5e08a9c7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"fill":"currentColor","viewBox":"0 0 20 20"}},[_vm._ssrNode("<path fill-rule=\"evenodd\" d=\"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z\" clip-rule=\"evenodd\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./theme/src/components/global/icons/IconArrowLeft.vue?vue&type=template&id=5e08a9c7&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./theme/src/components/global/icons/IconArrowLeft.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4b0268fa"
  
)

/* harmony default export */ var IconArrowLeft = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./theme/src/components/global/icons/IconArrowRight.vue?vue&type=template&id=685b8b2d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"fill":"currentColor","viewBox":"0 0 20 20"}},[_vm._ssrNode("<path fill-rule=\"evenodd\" d=\"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z\" clip-rule=\"evenodd\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./theme/src/components/global/icons/IconArrowRight.vue?vue&type=template&id=685b8b2d&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./theme/src/components/global/icons/IconArrowRight.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9ac08260"
  
)

/* harmony default export */ var IconArrowRight = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./theme/src/components/app/AppPrevNext.vue?vue&type=template&id=d521b0c0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.prev || _vm.next)?_c('div',{staticClass:"grid grid-cols-2 gap-2 lg:px-8 pt-4 border-t dark:border-gray-800",class:{
    'lg:border-t-0': _vm.settings.layout === 'single',
  }},[(_vm.prev)?_c('NuxtLink',{staticClass:"text-primary-500 font-bold hover:underline flex items-center justify-start z-40",attrs:{"to":_vm.localePath(_vm.prev.to)}},[_c('IconArrowLeft',{staticClass:"w-4 h-4 mr-1 flex-shrink-0"}),_vm._v(" "),_c('span',{staticClass:"truncate"},[_vm._v(_vm._s(_vm.prev.title))])],1):_c('span',[_vm._v(" ")]),_vm._ssrNode(" "),(_vm.next)?_c('NuxtLink',{staticClass:"text-primary-500 font-bold hover:underline flex items-center justify-end z-40",attrs:{"to":_vm.localePath(_vm.next.to)}},[_c('span',{staticClass:"truncate"},[_vm._v(_vm._s(_vm.next.title))]),_vm._v(" "),_c('IconArrowRight',{staticClass:"w-4 h-4 ml-1 flex-shrink-0"})],1):_c('span',[_vm._v(" ")])],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./theme/src/components/app/AppPrevNext.vue?vue&type=template&id=d521b0c0&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./theme/src/components/app/AppPrevNext.vue?vue&type=script&lang=js&
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

/* harmony default export */ var AppPrevNextvue_type_script_lang_js_ = ({
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  },
  computed: { ...Object(external_vuex_["mapGetters"])(["settings"])
  }
});
// CONCATENATED MODULE: ./theme/src/components/app/AppPrevNext.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_AppPrevNextvue_type_script_lang_js_ = (AppPrevNextvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./theme/src/components/app/AppPrevNext.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_AppPrevNextvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "cb3ea888"
  
)

/* harmony default export */ var AppPrevNext = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconArrowLeft: __webpack_require__(61).default,IconArrowRight: __webpack_require__(62).default})


/***/ })

};;
//# sourceMappingURL=app-prev-next.js.map