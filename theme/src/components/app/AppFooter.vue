<template>
  <footer
    class="dark:border-gray-800 dark:bg-gray-900 relative z-20 w-full h-16 bg-white border-t"
  >
    <div
      class="lg:px-8 container flex items-center justify-between w-full h-full px-4 mx-auto"
    >
      <div class="flex items-end">
        <div></div>
        <!-- <a href="https://nuxtjs.org" target="_blank" rel="noopener">
          <BuiltWithNuxtLight class="light-img h-4" />
          <BuiltWithNuxtDark class="dark-img h-4" />
        </a> -->
      </div>
      <div class="flex items-center space-x-4">
        <AppLangSwitcher />
        <!-- <AppColorSwitcher /> -->
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
};
</script>
