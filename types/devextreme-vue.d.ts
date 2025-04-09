/* eslint-disable */
// @ts-nocheck
// @ts-ignore
// This file is excluded from TypeScript and ESLint checking
import Vue from "vue";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
// @ts-ignore
declare module "devextreme-vue/*" {
  interface ComponentPublicInstance {
    $t: (key: string, params?: any) => string;
  }
}

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
// @ts-ignore
declare module "vue" {
  interface ComponentCustomProperties {
    $t: (key: string, params?: any) => string;
  }
}

// Add an export to make ESLint treat this as a module
export {};
