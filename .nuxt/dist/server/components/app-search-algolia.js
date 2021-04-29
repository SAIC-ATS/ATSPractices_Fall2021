exports.ids = [6];
exports.modules = {

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {//
//
//
//
function isSpecialClick(event) {
  return event.button === 1 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
}

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    options: {
      type: Object,
      required: true
    },
    settings: {
      type: Object,
      required: true
    }
  },
  watch: {
    '$i18n.locale'(newValue) {
      this.update(this.options, newValue);
    },

    options(newValue) {
      this.update(newValue, this.$i18n.locale);
    }

  },

  mounted() {
    this.initialize(this.options, this.$i18n.locale);
  },

  methods: {
    stripTrailingSlash(url) {
      return url.replace(/\/$|\/(?=\?)|\/(?=#)/g, '');
    },

    getRelativePath(absoluteUrl) {
      const {
        pathname,
        hash
      } = new URL(absoluteUrl);
      const url = pathname.replace(this.settings.url, '/') + hash;
      return this.stripTrailingSlash(url);
    },

    initialize(userOptions, code) {
      const lang = this.$i18n.locales.find(locale => locale.code === code);
      Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 55, 7)), Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 56, 7))]).then(([docsearch]) => {
        docsearch = docsearch.default;
        docsearch(Object.assign({}, userOptions, {
          container: '#docsearch',
          searchParameters: Object.assign({}, lang && {
            facetFilters: [`${userOptions.langAttribute || 'language'}:${lang.iso}`].concat(userOptions.facetFilters || [])
          }),
          navigator: {
            navigate: ({
              suggestionUrl
            }) => {
              const {
                pathname: hitPathname
              } = new URL(window.location.origin + suggestionUrl); // Vue Router doesn't handle same-page navigation so we use
              // the native browser location API for anchor navigation.

              if (this.$router.history.current.path === hitPathname) {
                window.location.assign(window.location.origin + suggestionUrl);
              } else {
                this.$router.push(suggestionUrl);
              }
            }
          },
          transformItems: items => {
            return items.map(item => {
              return Object.assign({}, item, {
                url: this.getRelativePath(item.url)
              });
            });
          },
          hitComponent: ({
            hit,
            children
          }) => {
            return {
              type: 'a',
              ref: undefined,
              constructor: undefined,
              key: undefined,
              props: {
                href: hit.url,
                onClick: event => {
                  if (isSpecialClick(event)) {
                    return;
                  } // We rely on the native link scrolling when user is
                  // already on the right anchor because Vue Router doesn't
                  // support duplicated history entries.


                  if (this.$router.history.current.fullPath === hit.url) {
                    return;
                  }

                  const {
                    pathname: hitPathname
                  } = new URL(window.location.origin + hit.url); // If the hits goes to another page, we prevent the native link behavior
                  // to leverage the Vue Router loading feature.

                  if (this.$router.history.current.path !== hitPathname) {
                    event.preventDefault();
                  }

                  this.$router.push(hit.url);
                },
                children
              }
            };
          }
        }));
      });
    },

    update(options, lang) {
      this.$el.innerHTML = '<div id="docsearch"></div>';
      this.initialize(options, lang);
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(54)["URL"]))

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("6a997a44", content, true, context)
};

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSearchAlgolia_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSearchAlgolia_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSearchAlgolia_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSearchAlgolia_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSearchAlgolia_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".DocSearch{--docsearch-primary-color:var(--color-primary-500);--docsearch-highlight-color:var(--docsearch-primary-color);--docsearch-text-color:var(--color-gray-700);--docsearch-modal-background:var(--color-gray-100);--docsearch-searchbox-shadow:inset 0 0 0 2px var(--docsearch-primary-color);--docsearch-searchbox-background:var(--color-gray-200);--docsearch-searchbox-focus-background:var(--color-gray-200);--docsearch-hit-color:var(--color-gray-700);--docsearch-muted-color:var(--color-gray-500)}.DocSearch-Button{width:100%!important;margin-left:0!important;border-radius:.375rem!important}.DocSearch-Button,.DocSearch-Button-Placeholder{padding-left:.75rem!important;padding-right:.75rem!important}.DocSearch-Screen-Icon>svg{display:inline!important}.dark-mode .DocSearch{--docsearch-text-color:var(--color-gray-300);--docsearch-container-background:rgba(9,10,17,0.8);--docsearch-modal-background:var(--color-gray-900);--docsearch-modal-shadow:inset 1px 1px 0 0 #2c2e40,0 3px 8px 0 #000309;--docsearch-searchbox-background:var(--color-gray-800);--docsearch-searchbox-focus-background:var(--color-gray-800);--docsearch-hit-color:var(--color-gray-300);--docsearch-hit-shadow:none;--docsearch-hit-background:var(--color-gray-800);--docsearch-key-gradient:linear-gradient(-26.5deg,#565872,#31355b);--docsearch-key-shadow:inset 0 -2px 0 0 #282d55,inset 0 0 1px 1px #51577d,0 2px 2px 0 rgba(3,4,9,0.3);--docsearch-footer-background:var(--color-gray-800);--docsearch-footer-shadow:inset 0 1px 0 0 rgba(73,76,106,0.5),0 -4px 8px 0 rgba(0,0,0,0.2);--docsearch-logo-color:#fff;--docsearch-muted-color:var(--color-gray-500)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./theme/src/components/app/AppSearchAlgolia.vue?vue&type=template&id=6407d8d9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lg:w-full",attrs:{"id":"docsearch"}},[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./theme/src/components/app/AppSearchAlgolia.vue?vue&type=template&id=6407d8d9&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./theme/src/components/app/AppSearchAlgolia.vue?vue&type=script&lang=js&
var AppSearchAlgoliavue_type_script_lang_js_ = __webpack_require__(64);

// CONCATENATED MODULE: ./theme/src/components/app/AppSearchAlgolia.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_AppSearchAlgoliavue_type_script_lang_js_ = (AppSearchAlgoliavue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./theme/src/components/app/AppSearchAlgolia.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(85)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_AppSearchAlgoliavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3c45def0"
  
)

/* harmony default export */ var AppSearchAlgolia = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=app-search-algolia.js.map