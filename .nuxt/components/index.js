import { wrapFunctional } from './utils'

export { default as AppColorSwitcher } from '../../theme/src/components/global/app/AppColorSwitcher.vue'
export { default as Alert } from '../../theme/src/components/global/base/Alert.vue'
export { default as Badge } from '../../theme/src/components/global/base/Badge.vue'
export { default as CodeBlock } from '../../theme/src/components/global/base/CodeBlock.vue'
export { default as CodeGroup } from '../../theme/src/components/global/base/CodeGroup.vue'
export { default as CodeSandbox } from '../../theme/src/components/global/base/CodeSandbox.vue'
export { default as List } from '../../theme/src/components/global/base/List.vue'
export { default as BuiltWithNuxtDark } from '../../theme/src/components/global/icons/BuiltWithNuxtDark.vue'
export { default as BuiltWithNuxtLight } from '../../theme/src/components/global/icons/BuiltWithNuxtLight.vue'
export { default as IconArrowLeft } from '../../theme/src/components/global/icons/IconArrowLeft.vue'
export { default as IconArrowRight } from '../../theme/src/components/global/icons/IconArrowRight.vue'
export { default as IconBadgeCheck } from '../../theme/src/components/global/icons/IconBadgeCheck.vue'
export { default as IconCheckCircle } from '../../theme/src/components/global/icons/IconCheckCircle.vue'
export { default as IconChevronRight } from '../../theme/src/components/global/icons/IconChevronRight.vue'
export { default as IconClipboardCheck } from '../../theme/src/components/global/icons/IconClipboardCheck.vue'
export { default as IconClipboardCopy } from '../../theme/src/components/global/icons/IconClipboardCopy.vue'
export { default as IconExclamationCircle } from '../../theme/src/components/global/icons/IconExclamationCircle.vue'
export { default as IconExternalLink } from '../../theme/src/components/global/icons/IconExternalLink.vue'
export { default as IconGithub } from '../../theme/src/components/global/icons/IconGithub.vue'
export { default as IconInformationCircle } from '../../theme/src/components/global/icons/IconInformationCircle.vue'
export { default as IconMenu } from '../../theme/src/components/global/icons/IconMenu.vue'
export { default as IconMoon } from '../../theme/src/components/global/icons/IconMoon.vue'
export { default as IconSearch } from '../../theme/src/components/global/icons/IconSearch.vue'
export { default as IconSun } from '../../theme/src/components/global/icons/IconSun.vue'
export { default as IconTranslate } from '../../theme/src/components/global/icons/IconTranslate.vue'
export { default as IconTwitter } from '../../theme/src/components/global/icons/IconTwitter.vue'
export { default as IconX } from '../../theme/src/components/global/icons/IconX.vue'
export { default as IconXCircle } from '../../theme/src/components/global/icons/IconXCircle.vue'
export { default as AppCopyButton } from '../../theme/src/components/app/AppCopyButton.vue'
export { default as AppDropdown } from '../../theme/src/components/app/AppDropdown.vue'
export { default as AppFooter } from '../../theme/src/components/app/AppFooter.vue'
export { default as AppGithubLink } from '../../theme/src/components/app/AppGithubLink.vue'
export { default as AppHeader } from '../../theme/src/components/app/AppHeader.vue'
export { default as AppLangSwitcher } from '../../theme/src/components/app/AppLangSwitcher.vue'
export { default as AppNav } from '../../theme/src/components/app/AppNav.vue'
export { default as AppPrevNext } from '../../theme/src/components/app/AppPrevNext.vue'
export { default as AppSearch } from '../../theme/src/components/app/AppSearch.vue'
export { default as AppSearchAlgolia } from '../../theme/src/components/app/AppSearchAlgolia.vue'
export { default as AppToc } from '../../theme/src/components/app/AppToc.vue'
export { default as About } from '../../theme/src/content_templates/about.vue'
export { default as Home } from '../../theme/src/content_templates/home.vue'
export { default as Student } from '../../theme/src/content_templates/student.vue'

export const LazyAppColorSwitcher = import('../../theme/src/components/global/app/AppColorSwitcher.vue' /* webpackChunkName: "components/app-color-switcher" */).then(c => wrapFunctional(c.default || c))
export const LazyAlert = import('../../theme/src/components/global/base/Alert.vue' /* webpackChunkName: "components/alert" */).then(c => wrapFunctional(c.default || c))
export const LazyBadge = import('../../theme/src/components/global/base/Badge.vue' /* webpackChunkName: "components/badge" */).then(c => wrapFunctional(c.default || c))
export const LazyCodeBlock = import('../../theme/src/components/global/base/CodeBlock.vue' /* webpackChunkName: "components/code-block" */).then(c => wrapFunctional(c.default || c))
export const LazyCodeGroup = import('../../theme/src/components/global/base/CodeGroup.vue' /* webpackChunkName: "components/code-group" */).then(c => wrapFunctional(c.default || c))
export const LazyCodeSandbox = import('../../theme/src/components/global/base/CodeSandbox.vue' /* webpackChunkName: "components/code-sandbox" */).then(c => wrapFunctional(c.default || c))
export const LazyList = import('../../theme/src/components/global/base/List.vue' /* webpackChunkName: "components/list" */).then(c => wrapFunctional(c.default || c))
export const LazyBuiltWithNuxtDark = import('../../theme/src/components/global/icons/BuiltWithNuxtDark.vue' /* webpackChunkName: "components/built-with-nuxt-dark" */).then(c => wrapFunctional(c.default || c))
export const LazyBuiltWithNuxtLight = import('../../theme/src/components/global/icons/BuiltWithNuxtLight.vue' /* webpackChunkName: "components/built-with-nuxt-light" */).then(c => wrapFunctional(c.default || c))
export const LazyIconArrowLeft = import('../../theme/src/components/global/icons/IconArrowLeft.vue' /* webpackChunkName: "components/icon-arrow-left" */).then(c => wrapFunctional(c.default || c))
export const LazyIconArrowRight = import('../../theme/src/components/global/icons/IconArrowRight.vue' /* webpackChunkName: "components/icon-arrow-right" */).then(c => wrapFunctional(c.default || c))
export const LazyIconBadgeCheck = import('../../theme/src/components/global/icons/IconBadgeCheck.vue' /* webpackChunkName: "components/icon-badge-check" */).then(c => wrapFunctional(c.default || c))
export const LazyIconCheckCircle = import('../../theme/src/components/global/icons/IconCheckCircle.vue' /* webpackChunkName: "components/icon-check-circle" */).then(c => wrapFunctional(c.default || c))
export const LazyIconChevronRight = import('../../theme/src/components/global/icons/IconChevronRight.vue' /* webpackChunkName: "components/icon-chevron-right" */).then(c => wrapFunctional(c.default || c))
export const LazyIconClipboardCheck = import('../../theme/src/components/global/icons/IconClipboardCheck.vue' /* webpackChunkName: "components/icon-clipboard-check" */).then(c => wrapFunctional(c.default || c))
export const LazyIconClipboardCopy = import('../../theme/src/components/global/icons/IconClipboardCopy.vue' /* webpackChunkName: "components/icon-clipboard-copy" */).then(c => wrapFunctional(c.default || c))
export const LazyIconExclamationCircle = import('../../theme/src/components/global/icons/IconExclamationCircle.vue' /* webpackChunkName: "components/icon-exclamation-circle" */).then(c => wrapFunctional(c.default || c))
export const LazyIconExternalLink = import('../../theme/src/components/global/icons/IconExternalLink.vue' /* webpackChunkName: "components/icon-external-link" */).then(c => wrapFunctional(c.default || c))
export const LazyIconGithub = import('../../theme/src/components/global/icons/IconGithub.vue' /* webpackChunkName: "components/icon-github" */).then(c => wrapFunctional(c.default || c))
export const LazyIconInformationCircle = import('../../theme/src/components/global/icons/IconInformationCircle.vue' /* webpackChunkName: "components/icon-information-circle" */).then(c => wrapFunctional(c.default || c))
export const LazyIconMenu = import('../../theme/src/components/global/icons/IconMenu.vue' /* webpackChunkName: "components/icon-menu" */).then(c => wrapFunctional(c.default || c))
export const LazyIconMoon = import('../../theme/src/components/global/icons/IconMoon.vue' /* webpackChunkName: "components/icon-moon" */).then(c => wrapFunctional(c.default || c))
export const LazyIconSearch = import('../../theme/src/components/global/icons/IconSearch.vue' /* webpackChunkName: "components/icon-search" */).then(c => wrapFunctional(c.default || c))
export const LazyIconSun = import('../../theme/src/components/global/icons/IconSun.vue' /* webpackChunkName: "components/icon-sun" */).then(c => wrapFunctional(c.default || c))
export const LazyIconTranslate = import('../../theme/src/components/global/icons/IconTranslate.vue' /* webpackChunkName: "components/icon-translate" */).then(c => wrapFunctional(c.default || c))
export const LazyIconTwitter = import('../../theme/src/components/global/icons/IconTwitter.vue' /* webpackChunkName: "components/icon-twitter" */).then(c => wrapFunctional(c.default || c))
export const LazyIconX = import('../../theme/src/components/global/icons/IconX.vue' /* webpackChunkName: "components/icon-x" */).then(c => wrapFunctional(c.default || c))
export const LazyIconXCircle = import('../../theme/src/components/global/icons/IconXCircle.vue' /* webpackChunkName: "components/icon-x-circle" */).then(c => wrapFunctional(c.default || c))
export const LazyAppCopyButton = import('../../theme/src/components/app/AppCopyButton.vue' /* webpackChunkName: "components/app-copy-button" */).then(c => wrapFunctional(c.default || c))
export const LazyAppDropdown = import('../../theme/src/components/app/AppDropdown.vue' /* webpackChunkName: "components/app-dropdown" */).then(c => wrapFunctional(c.default || c))
export const LazyAppFooter = import('../../theme/src/components/app/AppFooter.vue' /* webpackChunkName: "components/app-footer" */).then(c => wrapFunctional(c.default || c))
export const LazyAppGithubLink = import('../../theme/src/components/app/AppGithubLink.vue' /* webpackChunkName: "components/app-github-link" */).then(c => wrapFunctional(c.default || c))
export const LazyAppHeader = import('../../theme/src/components/app/AppHeader.vue' /* webpackChunkName: "components/app-header" */).then(c => wrapFunctional(c.default || c))
export const LazyAppLangSwitcher = import('../../theme/src/components/app/AppLangSwitcher.vue' /* webpackChunkName: "components/app-lang-switcher" */).then(c => wrapFunctional(c.default || c))
export const LazyAppNav = import('../../theme/src/components/app/AppNav.vue' /* webpackChunkName: "components/app-nav" */).then(c => wrapFunctional(c.default || c))
export const LazyAppPrevNext = import('../../theme/src/components/app/AppPrevNext.vue' /* webpackChunkName: "components/app-prev-next" */).then(c => wrapFunctional(c.default || c))
export const LazyAppSearch = import('../../theme/src/components/app/AppSearch.vue' /* webpackChunkName: "components/app-search" */).then(c => wrapFunctional(c.default || c))
export const LazyAppSearchAlgolia = import('../../theme/src/components/app/AppSearchAlgolia.vue' /* webpackChunkName: "components/app-search-algolia" */).then(c => wrapFunctional(c.default || c))
export const LazyAppToc = import('../../theme/src/components/app/AppToc.vue' /* webpackChunkName: "components/app-toc" */).then(c => wrapFunctional(c.default || c))
export const LazyAbout = import('../../theme/src/content_templates/about.vue' /* webpackChunkName: "components/about" */).then(c => wrapFunctional(c.default || c))
export const LazyHome = import('../../theme/src/content_templates/home.vue' /* webpackChunkName: "components/home" */).then(c => wrapFunctional(c.default || c))
export const LazyStudent = import('../../theme/src/content_templates/student.vue' /* webpackChunkName: "components/student" */).then(c => wrapFunctional(c.default || c))
