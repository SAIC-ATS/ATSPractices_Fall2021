<template>
  <div
    class="flex flex-wrap-reverse h-screen"
    :class="{
      'lg:-mx-8': settings.layout === 'single',
    }"
  >
    <div
      class="lg:pb-4 dark:border-gray-800 w-full"
      :class="{
        'lg:w-full': !document.fullscreen,
        '': settings.layout !== 'single',
      }"
    >
      <!-- <AppPrevNext :prev="prev" :next="next" /> -->
      <!-- bg image -->
      <div class="fade w-full h-full">
        <iframe :src="document.url" class="w-full h-full"></iframe>
        <!-- Subtitle (if present) -->
        <div v-if="document.website" class="mt-2">
          <a :href="document.website" target="_blank">Learn More...</a>
        </div>
      </div>

      <article class="dark:prose-dark max-w-none prose z-10">
        <!-- This is the actual markdown body -->
        <NuxtContent class="mt-12 ml-12" :document="document" />
      </article>
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
