<template>
  <div>
    <component
      :is="contentType"
      :document="document"
      :settings="settings"
      :prev="prev"
      :next="next"
    ></component>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";

import AppCopyButton from "~/components/app/AppCopyButton";

export default {
  name: "PageSlug",
  layout({ store }) {
    return store.state.settings.layout || "default";
  },
  middleware({ app, params, redirect }) {
    if (params.pathMatch === "index") {
      redirect(app.localePath("ATSPractices_Spring2021/"));
    }
  },
  data: function () {
    return {
      contentType: "",
    };
  },
  async asyncData({ $content, store, app, params, error }) {
    const path = `/${app.i18n.locale}/${params.pathMatch || "index"}`;
    const [document] = await $content({ deep: true }).where({ path }).fetch();

    if (!document) {
      return error({ statusCode: 404, message: "Page not found" });
    }

    // Get content type from front matter
    let contentType = document.content_type || "post";

    const [prev, next] = await $content(app.i18n.locale, { deep: true })
      .only(["title", "slug", "to", "meta_data"])
      .sortBy("position", "asc")
      .surround(document.slug, { before: 1, after: 1 })
      .fetch();

    return {
      document,
      contentType,
      prev,
      next,
    };
  },
  head() {
    return {
      title: this.document.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.document.description,
        },
        // Open Graph
        { hid: "og:title", property: "og:title", content: this.document.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.document.description,
        },
        // Twitter Card
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.document.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.document.description,
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["settings"]),
  },
  mounted() {
    if (this.document.version) {
      localStorage.setItem(
        `document-${this.document.slug}-version`,
        this.document.version
      );
    }

    setTimeout(() => {
      const blocks = document.getElementsByClassName("nuxt-content-highlight");

      for (const block of blocks) {
        const CopyButton = Vue.extend(AppCopyButton);
        const component = new CopyButton().$mount();
        block.appendChild(component.$el);
      }
    }, 100);
  },
};
</script>
