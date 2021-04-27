import Vue from 'vue'

const globalComponents = {
  Alert: () => import('../../theme/src/components/global/base/Alert.vue' /* webpackChunkName: "components/alert" */).then(c => c.default || c),
  Badge: () => import('../../theme/src/components/global/base/Badge.vue' /* webpackChunkName: "components/badge" */).then(c => c.default || c),
  CodeBlock: () => import('../../theme/src/components/global/base/CodeBlock.vue' /* webpackChunkName: "components/code-block" */).then(c => c.default || c),
  CodeGroup: () => import('../../theme/src/components/global/base/CodeGroup.vue' /* webpackChunkName: "components/code-group" */).then(c => c.default || c),
  CodeSandbox: () => import('../../theme/src/components/global/base/CodeSandbox.vue' /* webpackChunkName: "components/code-sandbox" */).then(c => c.default || c),
  List: () => import('../../theme/src/components/global/base/List.vue' /* webpackChunkName: "components/list" */).then(c => c.default || c),
  AppColorSwitcher: () => import('../../theme/src/components/global/app/AppColorSwitcher.vue' /* webpackChunkName: "components/app-color-switcher" */).then(c => c.default || c),
  BuiltWithNuxtDark: () => import('../../theme/src/components/global/icons/BuiltWithNuxtDark.vue' /* webpackChunkName: "components/built-with-nuxt-dark" */).then(c => c.default || c),
  BuiltWithNuxtLight: () => import('../../theme/src/components/global/icons/BuiltWithNuxtLight.vue' /* webpackChunkName: "components/built-with-nuxt-light" */).then(c => c.default || c),
  IconArrowLeft: () => import('../../theme/src/components/global/icons/IconArrowLeft.vue' /* webpackChunkName: "components/icon-arrow-left" */).then(c => c.default || c),
  IconArrowRight: () => import('../../theme/src/components/global/icons/IconArrowRight.vue' /* webpackChunkName: "components/icon-arrow-right" */).then(c => c.default || c),
  IconBadgeCheck: () => import('../../theme/src/components/global/icons/IconBadgeCheck.vue' /* webpackChunkName: "components/icon-badge-check" */).then(c => c.default || c),
  IconCheckCircle: () => import('../../theme/src/components/global/icons/IconCheckCircle.vue' /* webpackChunkName: "components/icon-check-circle" */).then(c => c.default || c),
  IconChevronRight: () => import('../../theme/src/components/global/icons/IconChevronRight.vue' /* webpackChunkName: "components/icon-chevron-right" */).then(c => c.default || c),
  IconClipboardCheck: () => import('../../theme/src/components/global/icons/IconClipboardCheck.vue' /* webpackChunkName: "components/icon-clipboard-check" */).then(c => c.default || c),
  IconClipboardCopy: () => import('../../theme/src/components/global/icons/IconClipboardCopy.vue' /* webpackChunkName: "components/icon-clipboard-copy" */).then(c => c.default || c),
  IconExclamationCircle: () => import('../../theme/src/components/global/icons/IconExclamationCircle.vue' /* webpackChunkName: "components/icon-exclamation-circle" */).then(c => c.default || c),
  IconExternalLink: () => import('../../theme/src/components/global/icons/IconExternalLink.vue' /* webpackChunkName: "components/icon-external-link" */).then(c => c.default || c),
  IconGithub: () => import('../../theme/src/components/global/icons/IconGithub.vue' /* webpackChunkName: "components/icon-github" */).then(c => c.default || c),
  IconInformationCircle: () => import('../../theme/src/components/global/icons/IconInformationCircle.vue' /* webpackChunkName: "components/icon-information-circle" */).then(c => c.default || c),
  IconMenu: () => import('../../theme/src/components/global/icons/IconMenu.vue' /* webpackChunkName: "components/icon-menu" */).then(c => c.default || c),
  IconMoon: () => import('../../theme/src/components/global/icons/IconMoon.vue' /* webpackChunkName: "components/icon-moon" */).then(c => c.default || c),
  IconSearch: () => import('../../theme/src/components/global/icons/IconSearch.vue' /* webpackChunkName: "components/icon-search" */).then(c => c.default || c),
  IconSun: () => import('../../theme/src/components/global/icons/IconSun.vue' /* webpackChunkName: "components/icon-sun" */).then(c => c.default || c),
  IconTranslate: () => import('../../theme/src/components/global/icons/IconTranslate.vue' /* webpackChunkName: "components/icon-translate" */).then(c => c.default || c),
  IconTwitter: () => import('../../theme/src/components/global/icons/IconTwitter.vue' /* webpackChunkName: "components/icon-twitter" */).then(c => c.default || c),
  IconX: () => import('../../theme/src/components/global/icons/IconX.vue' /* webpackChunkName: "components/icon-x" */).then(c => c.default || c),
  IconXCircle: () => import('../../theme/src/components/global/icons/IconXCircle.vue' /* webpackChunkName: "components/icon-x-circle" */).then(c => c.default || c),
  About: () => import('../../theme/src/content_templates/about.vue' /* webpackChunkName: "components/about" */).then(c => c.default || c),
  Home: () => import('../../theme/src/content_templates/home.vue' /* webpackChunkName: "components/home" */).then(c => c.default || c),
  Student: () => import('../../theme/src/content_templates/student.vue' /* webpackChunkName: "components/student" */).then(c => c.default || c)
}

for (const name in globalComponents) {
  Vue.component(name, globalComponents[name])
}
