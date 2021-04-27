import theme from "./theme";

export default theme({
  content: {
    fullTextSearchFields: ['title', 'description', 'meta_data'],
  },
  docs: {
    primaryColor: "a01a58",
  },
  watch: ["~/theme/**/*.js", "~/theme/**/*.vue"],
  googleFonts: {
    families: {
      "Roboto Slab": true,
    },
  },
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
});
