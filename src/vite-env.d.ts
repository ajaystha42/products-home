/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_PDP_URL: string;
  readonly VITE_CART_URL: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "pdp/PDPContent";

declare module "cart/MiniCart";
declare module "cart/Login";
declare module "cart/CartContent";
declare module "cart/cart";
