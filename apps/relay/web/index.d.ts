/// <reference types="@nx/next/typings/style.d.ts" />

declare module "*.svg" {
  // biome-ignore lint/suspicious/noExplicitAny: SVG webpack/turbopack asset loader
  const content: any;
  // biome-ignore lint/suspicious/noExplicitAny: SVG webpack/turbopack asset loader
  export const ReactComponent: any;
  export default content;
}
