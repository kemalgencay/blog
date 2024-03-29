// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_app from "./routes/_app.tsx";
import * as $_middleware from "./routes/_middleware.ts";
import * as $blog_id_ from "./routes/blog/[id].tsx";
import * as $index from "./routes/index.tsx";
import * as $settings from "./routes/settings.tsx";
import * as $LocaleSelector from "./islands/LocaleSelector.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_app.tsx": $_app,
    "./routes/_middleware.ts": $_middleware,
    "./routes/blog/[id].tsx": $blog_id_,
    "./routes/index.tsx": $index,
    "./routes/settings.tsx": $settings,
  },
  islands: {
    "./islands/LocaleSelector.tsx": $LocaleSelector,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
