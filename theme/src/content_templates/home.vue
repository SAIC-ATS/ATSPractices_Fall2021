<template>
  <div
    class="flex flex-wrap-reverse"
    :class="{
      'lg:-mx-8': settings.layout === 'single',
    }"
  >
    <div
      class="pt-0 lg:pb-4 w-full h-full"
      :class="{
        'lg:w-full': !document.fullscreen,
        '': settings.layout !== 'single',
      }"
    >
      <!-- bg image -->
      <div class="fade inset-0 pt-6 fixed">
        <div class="opacity-50 w-full h-full left-0 absolute">
          <iframe
            :src="document.url"
            class="w-full h-full overflow-hidden"
            id="content"
          ></iframe>
        </div>
      </div>
    </div>

    <AppToc v-if="!document.fullscreen" :toc="document.toc" />
  </div>
</template>

<script>
export default {
  props: {
    document: Object,
    settings: Object,
    prev: Object,
    next: Object,
  },
};
</script>
