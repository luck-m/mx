import { defineClientConfig } from "@vuepress/client";

import HopeIcon from "@theme-hope/components/HopeIcon";
import Layout from "D:/dev/DOCS/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.184_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-theme-hope/lib/client/layouts/Layout.js";
import NotFound from "D:/dev/DOCS/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.184_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-theme-hope/lib/client/layouts/NotFound.js";

import { useScrollPromise } from "@theme-hope/composables/index";
import { injectDarkmode, setupDarkmode } from "@theme-hope/modules/outlook/composables/index";
import { setupSidebarItems } from "@theme-hope/modules/sidebar/composables/index";

import "D:/dev/DOCS/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.184_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-theme-hope/lib/client/styles/index.scss";

import GlobalEncrypt from "@theme-hope/modules/encrypt/components/GlobalEncrypt";
import LocalEncrypt from "@theme-hope/modules/encrypt/components/LocalEncrypt";
import Slide from "D:/dev/DOCS/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.184_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-theme-hope/lib/client/layouts/Slide.js";

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // render icon for auto-catalog
    app.component("HopeIcon", HopeIcon);

    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,
    Slide,
  }
});