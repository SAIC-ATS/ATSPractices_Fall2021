exports.ids = [28,3,19,20];
exports.modules = {

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./theme/src/components/global/icons/IconClipboardCheck.vue?vue&type=template&id=e2afcf2a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"fill":"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24","stroke":"currentColor"}},[_vm._ssrNode("<path d=\"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./theme/src/components/global/icons/IconClipboardCheck.vue?vue&type=template&id=e2afcf2a&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./theme/src/components/global/icons/IconClipboardCheck.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3802f64f"
  
)

/* harmony default export */ var IconClipboardCheck = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./theme/src/components/global/icons/IconClipboardCopy.vue?vue&type=template&id=4f4bb0cd&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"fill":"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24","stroke":"currentColor"}},[_vm._ssrNode("<path d=\"M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./theme/src/components/global/icons/IconClipboardCopy.vue?vue&type=template&id=4f4bb0cd&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./theme/src/components/global/icons/IconClipboardCopy.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "145deafe"
  
)

/* harmony default export */ var IconClipboardCopy = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./theme/src/components/app/AppCopyButton.vue?vue&type=template&id=72ce95be&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{ref:"copy",staticClass:"copy"},[(_vm.state === 'copied')?_c('IconClipboardCheck',{staticClass:"w-5 h-5"}):_c('IconClipboardCopy',{staticClass:"w-5 h-5"})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./theme/src/components/app/AppCopyButton.vue?vue&type=template&id=72ce95be&

// EXTERNAL MODULE: external "clipboard"
var external_clipboard_ = __webpack_require__(53);
var external_clipboard_default = /*#__PURE__*/__webpack_require__.n(external_clipboard_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./theme/src/components/app/AppCopyButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var AppCopyButtonvue_type_script_lang_js_ = ({
  data() {
    return {
      state: 'init'
    };
  },

  mounted() {
    const copyCode = new external_clipboard_default.a(this.$refs.copy, {
      target(trigger) {
        return trigger.previousElementSibling;
      }

    });
    copyCode.on('success', event => {
      event.clearSelection();
      this.state = 'copied';
      window.setTimeout(() => {
        this.state = 'init';
      }, 2000);
    });
  }

});
// CONCATENATED MODULE: ./theme/src/components/app/AppCopyButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_AppCopyButtonvue_type_script_lang_js_ = (AppCopyButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./theme/src/components/app/AppCopyButton.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_AppCopyButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "17d86a06"
  
)

/* harmony default export */ var AppCopyButton = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconClipboardCheck: __webpack_require__(59).default,IconClipboardCopy: __webpack_require__(60).default})


/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./theme/src/pages/_.vue?vue&type=template&id=61788b58&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c(_vm.contentType,{tag:"component",attrs:{"document":_vm.document,"settings":_vm.settings,"prev":_vm.prev,"next":_vm.next}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./theme/src/pages/_.vue?vue&type=template&id=61788b58&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./theme/src/components/app/AppCopyButton.vue + 4 modules
var AppCopyButton = __webpack_require__(71);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./theme/src/pages/_.vue?vue&type=script&lang=js&
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



/* harmony default export */ var _vue_type_script_lang_js_ = ({
  name: "PageSlug",

  layout({
    store
  }) {
    return store.state.settings.layout || "default";
  },

  middleware({
    app,
    params,
    redirect
  }) {
    if (params.pathMatch === "index") {
      redirect(app.localePath("ATSPractices_Spring2021/"));
    }
  },

  data: function () {
    return {
      contentType: ""
    };
  },

  async asyncData({
    $content,
    store,
    app,
    params,
    error
  }) {
    const path = `/${app.i18n.locale}/${params.pathMatch || "index"}`;
    const [document] = await $content({
      deep: true
    }).where({
      path
    }).fetch();

    if (!document) {
      return error({
        statusCode: 404,
        message: "Page not found"
      });
    } // Get content type from front matter


    let contentType = document.content_type || "post";
    const [prev, next] = await $content(app.i18n.locale, {
      deep: true
    }).only(["title", "slug", "to", "meta_data"]).sortBy("position", "asc").surround(document.slug, {
      before: 1,
      after: 1
    }).fetch();
    return {
      document,
      contentType,
      prev,
      next
    };
  },

  head() {
    return {
      title: this.document.title,
      meta: [{
        hid: "description",
        name: "description",
        content: this.document.description
      }, // Open Graph
      {
        hid: "og:title",
        property: "og:title",
        content: this.document.title
      }, {
        hid: "og:description",
        property: "og:description",
        content: this.document.description
      }, // Twitter Card
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: this.document.title
      }, {
        hid: "twitter:description",
        name: "twitter:description",
        content: this.document.description
      }]
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])(["settings"])
  },

  mounted() {
    if (this.document.version) {
      localStorage.setItem(`document-${this.document.slug}-version`, this.document.version);
    }

    setTimeout(() => {
      const blocks = document.getElementsByClassName("nuxt-content-highlight");

      for (const block of blocks) {
        const CopyButton = external_vue_default.a.extend(AppCopyButton["default"]);
        const component = new CopyButton().$mount();
        block.appendChild(component.$el);
      }
    }, 100);
  }

});
// CONCATENATED MODULE: ./theme/src/pages/_.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_vue_type_script_lang_js_ = (_vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./theme/src/pages/_.vue





/* normalize component */

var _component = Object(componentNormalizer["a" /* default */])(
  pages_vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7b6833c8"
  
)

/* harmony default export */ var _ = __webpack_exports__["default"] = (_component.exports);

/***/ })

};;
//# sourceMappingURL=_.js.map