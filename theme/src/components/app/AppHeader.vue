<template>
  <nav
    class="dark:border-gray-800 dark:bg-gray-900 fixed top-0 z-40 w-full bg-white border-b"
    :class="{ 'shadow border-transparent': scrolled }"
    @click="scrollToTop"
  >
    <div class="lg:px-8 container flex-1 px-4 mx-auto">
      <div class="flex items-center justify-between h-16">
        <div class="lg:w-1/2 flex items-center pr-4" @click.stop="noop">
          <NuxtLink
            :to="localePath('/')"
            class="flex-1 flex-shrink-0 text-xl font-bold"
            :aria-label="`${settings.title} Logo`"
          >
            <span>{{ settings.title }}</span>
          </NuxtLink>
        </div>
        <div
          v-if="settings.layout !== 'single'"
          class="flex justify-start flex-1 w-4/6"
        >
          <!-- <AppSearchAlgolia
            v-if="settings.algolia"
            :options="settings.algolia"
            :settings="settings"
          />
          <AppSearch v-else class="lg:block hidden" /> -->
        </div>
        <div
          class="lg:w-1/5 lg:pl-8 flex items-center pl-4"
          :class="{
            'justify-between': lastRelease && settings.layout !== 'single',
            'justify-end': !lastRelease || settings.layout === 'single',
          }"
        >
          <AppColorSwitcher />
          <NuxtLink
            v-if="lastRelease"
            to="/releases"
            class="dark:text-gray-300 hover:text-primary-500 dark-hover:text-primary-500 mr-4 text-base font-semibold leading-none text-gray-700"
            exact-active-class="text-primary-500"
            >{{ lastRelease.name }}</NuxtLink
          >
          <div class="flex items-center">
            <a
              v-if="settings.twitter"
              :href="`https://twitter.com/${settings.twitter}`"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
              name="Twitter"
              class="dark:text-gray-300 hover:text-primary-500 dark-hover:text-primary-500 ml-4 text-gray-700"
              :class="{
                'hidden lg:block': settings.layout !== 'single',
              }"
            >
              <IconTwitter class="w-5 h-5" />
            </a>
            <a
              v-if="settings.github"
              :href="githubUrls.repo"
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
              name="Github"
              class="dark:text-gray-300 hover:text-primary-500 dark-hover:text-primary-500 ml-4 text-gray-700"
              :class="{
                'hidden lg:block': settings.layout !== 'single',
              }"
            >
              <IconGithub class="w-5 h-5" />
            </a>

            <button
              v-if="settings.layout !== 'single'"
              class="lg:hidden dark:text-gray-300 focus:outline-none p-2 -mr-2 text-gray-700 rounded-md"
              aria-label="Menu"
              @click.stop="menu = !menu"
            >
              <IconX v-if="menu" class="w-5 h-5" />
              <IconMenu v-else class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      scrolled: 0,
    };
  },
  computed: {
    ...mapGetters(["settings", "githubUrls", "lastRelease"]),
    menu: {
      get() {
        return this.$store.state.menu.open;
      },
      set(val) {
        this.$store.commit("menu/toggle", val);
      },
    },
    logo() {
      if (!this.settings.logo) {
        return;
      }

      if (typeof this.settings.logo === "object") {
        return this.settings.logo;
      }

      return {
        light: this.settings.logo,
        dark: this.settings.logo,
      };
    },
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    },
    scrollToTop() {
      if (window.innerWidth >= 1280) {
        return;
      }
      window.scrollTo(0, 0);
    },
    noop() {},
  },
};
</script>
