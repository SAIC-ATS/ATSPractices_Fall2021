exports.ids = [4,22];
exports.modules = {

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./theme/src/components/global/icons/IconExternalLink.vue?vue&type=template&id=b2f4dff6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"fill":"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24","stroke":"currentColor"}},[_vm._ssrNode("<path d=\"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./theme/src/components/global/icons/IconExternalLink.vue?vue&type=template&id=b2f4dff6&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./theme/src/components/global/icons/IconExternalLink.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1d02f815"
  
)

/* harmony default export */ var IconExternalLink = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./theme/src/components/app/AppGithubLink.vue?vue&type=template&id=54e2f988&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.link)?_c('div',{staticClass:"pt-4 pb-4 lg:px-8 flex"},[_vm._ssrNode("<a"+(_vm._ssrAttr("href",_vm.link))+" target=\"_blank\" rel=\"noopener\" class=\"text-gray-600 dark:text-gray-400 text-sm font-medium hover:underline flex items-center\">","</a>",[_vm._ssrNode(_vm._ssrEscape("\n    "+_vm._s(_vm.$t('article.github'))+"\n    ")),_c('IconExternalLink',{staticClass:"w-4 h-4 ml-1"})],2)]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./theme/src/components/app/AppGithubLink.vue?vue&type=template&id=54e2f988&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./theme/src/components/app/AppGithubLink.vue?vue&type=script&lang=js&
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

/* harmony default export */ var AppGithubLinkvue_type_script_lang_js_ = ({
  props: {
    document: {
      type: Object,
      required: true
    }
  },
  computed: { ...Object(external_vuex_["mapGetters"])(['settings', 'githubUrls', 'lastRelease']),

    link() {
      if (!this.settings.github) {
        return;
      }

      return [this.githubUrls.repo, 'edit', this.settings.defaultBranch, this.settings.defaultDir, `content${this.document.path}${this.document.extension}`].filter(path => !!path).join('/');
    }

  }
});
// CONCATENATED MODULE: ./theme/src/components/app/AppGithubLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_AppGithubLinkvue_type_script_lang_js_ = (AppGithubLinkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./theme/src/components/app/AppGithubLink.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_AppGithubLinkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "61ce0ca6"
  
)

/* harmony default export */ var AppGithubLink = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconExternalLink: __webpack_require__(61).default})


/***/ })

};;
//# sourceMappingURL=app-github-link.js.map