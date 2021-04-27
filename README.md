# Static Site for SAIC Spring 21 Art & Technology Practices

## Setup

Install dependencies:

```bash
npm install --global yarn
yarn install
```

## Development

```bash
yarn dev
```
## Adding Content
Create directories and pages inside of `/content/en/`

Might be to create a folder for each page to keep associated media organized.

## Post Types
Like in Wordpress, we can define different templates for our content.

These are defined in `/theme/src/content_templates`

To create a new post type, clone the `/theme/src/content_templates/post.vue` file.

To specify a different post type for content, add `post: your_post_type` (without the .vue extension) to the front matter of the markdown.

## Static Generation

This will create the `dist/` directory for publishing to static hosting:

```bash
yarn generate
```

To preview the static generated app, run `yarn start`

For detailed explanation on how things work, checkout [nuxt/content](https://content.nuxtjs.org) and [@nuxt/content theme docs](https://content.nuxtjs.org/themes-docs).
