<template>
  <div
    class="flex flex-wrap-reverse h-screen"
    :class="{
      'lg:-mx-8': settings.layout === 'single',
    }"
  >
    <div
      class="pt-8 lg:pb-4 dark:border-gray-800 w-full py-4"
      :class="{
        'lg:w-full': !document.fullscreen,
        '': settings.layout !== 'single',
      }"
    >
      <!-- bg image -->
      <div class="fade w-full h-full">
        <iframe :src="document.url" class="w-full h-full"></iframe>
      </div>

      <article class="dark:prose-dark max-w-none prose z-10">
        <!-- Subtitle (if present) -->
        <div v-if="document.website" class="-mt-4">
          <a :href="document.website" target="_blank">Learn More...</a>
        </div>
        <!-- This is the actual markdown body -->
        <NuxtContent class="mt-12 ml-12" :document="document" />
      </article>

      <AppGithubLink :document="document" />
      <AppPrevNext :prev="prev" :next="next" />
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
