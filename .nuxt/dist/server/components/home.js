exports.ids = [14,7];
exports.modules = {

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./theme/src/components/app/AppToc.vue?vue&type=template&id=6e16420a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.toc.length)?_c('div',{staticClass:"w-full lg:w-1/4 block relative"},[_vm._ssrNode("<div class=\"lg:sticky lg:top-16 overflow-y-auto h-full lg:h-auto lg:max-h-(screen-16)\">","</div>",[_vm._ssrNode("<nav"+(_vm._ssrClass("py-4 lg:py-8",{
        'lg:pl-8 lg:pr-2': _vm.settings.layout !== 'single',
        'lg:px-8': _vm.settings.layout === 'single'
      }))+">","</nav>",[_vm._ssrNode("<p class=\"mb-3 lg:mb-2 text-gray-500 uppercase tracking-wider font-bold text-sm lg:text-xs\">"+_vm._ssrEscape(_vm._s(_vm.$t('toc.title')))+"</p> "),_c('scrollactive',{attrs:{"highlight-first-item":"","active-class":"text-primary-500","offset":0,"tag":"ul"}},_vm._l((_vm.toc),function(link){return _c('li',{key:link.id,staticClass:"text-gray-700 dark:text-gray-300",class:{
            'border-t border-dashed dark:border-gray-800 first:border-t-0': link.depth === 2
          }},[_c('a',{staticClass:"block text-sm scrollactive-item transition-padding ease-in-out duration-300 hover:pl-1",class:{
              'py-2': link.depth === 2,
              'ml-2 pb-2': link.depth === 3,
              'ml-3 pb-2': link.depth === 4,
              'ml-4 pb-2': link.depth === 5,
              'ml-5 pb-2': link.depth === 6
            },attrs:{"href":("#" + (link.id))}},[_vm._v(_vm._s(link.text))])])}),0)],2)])]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./theme/src/components/app/AppToc.vue?vue&type=template&id=6e16420a&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./theme/src/components/app/AppToc.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//

/* harmony default export */ var AppTocvue_type_script_lang_js_ = ({
  props: {
    toc: {
      type: Array,
      default: () => []
    }
  },
  computed: { ...Object(external_vuex_["mapGetters"])(['settings'])
  }
});
// CONCATENATED MODULE: ./theme/src/components/app/AppToc.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_AppTocvue_type_script_lang_js_ = (AppTocvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./theme/src/components/app/AppToc.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_AppTocvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6959d0c2"
  
)

/* harmony default export */ var AppToc = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./theme/src/content_templates/home.vue?vue&type=template&id=62c01fa6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex flex-wrap-reverse",class:{
    'lg:-mx-8': _vm.settings.layout === 'single',
  }},[_vm._ssrNode("<div"+(_vm._ssrClass("pt-0 lg:pb-4 w-full h-full",{
      'lg:w-full': !_vm.document.fullscreen,
      '': _vm.settings.layout !== 'single',
    }))+"><div class=\"fade inset-0 pt-6 fixed\"><div class=\"opacity-50 w-full h-full left-0 absolute\"><iframe"+(_vm._ssrAttr("src",_vm.document.url))+" id=\"content\" class=\"w-full h-full overflow-hidden\"></iframe></div></div></div> "),(!_vm.document.fullscreen)?_c('AppToc',{attrs:{"toc":_vm.document.toc}}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./theme/src/content_templates/home.vue?vue&type=template&id=62c01fa6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./theme/src/content_templates/home.vue?vue&type=script&lang=js&
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
/* harmony default export */ var homevue_type_script_lang_js_ = ({
  props: {
    document: Object,
    settings: Object,
    prev: Object,
    next: Object
  }
});
// CONCATENATED MODULE: ./theme/src/content_templates/home.vue?vue&type=script&lang=js&
 /* harmony default export */ var content_templates_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./theme/src/content_templates/home.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  content_templates_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "dc778c92"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AppToc: __webpack_require__(58).default})


/***/ })

};;
//# sourceMappingURL=home.js.map