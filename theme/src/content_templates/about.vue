<template>
  <div
    class="flex flex-wrap-reverse"
    :class="{
      'lg:-mx-8': settings.layout === 'single',
    }"
  >
    <div
      class="pt-8 lg:pb-4 dark:border-gray-800 w-full py-4"
      :class="{
        'lg:w-auto': !document.fullscreen,
        '': settings.layout !== 'single',
      }"
    >
      <!-- bg image -->
      <div class="fixed fade opacity-25 z-index: -1; inset-0">
        <div class="absolute right-0 h-full">
        <img :src="document.image" class="h-full opacity-50">
        </img>
        </div>
      </div>

      <article class="dark:prose-dark max-w-none lg:px-12 prose">
        <!-- Header -->
        <h1 class="font-college flex items-center justify-between">
          {{ document.title }}
          <Badge v-if="document.badge">{{ document.badge }}</Badge>
        </h1>
        <!-- Subtitle (if present) -->
        <div v-if="document.subtitle" class="-mt-4">
          <p class="dark:text-gray-400 text-gray-600">
            {{ document.subtitle }}
          </p>
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
