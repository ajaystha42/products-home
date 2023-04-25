import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      react(),
      federation({
        name: "home",
        filename: "remoteEntry.js",
        remotes: {
          pdp: env["VITE_PDP_URL"],
          cart: env["VITE_CART_URL"],
        },
        exposes: {
          "./Header": "./src/components/Header/Header.tsx",
          "./Footer": "./src/components/Footer/Footer.tsx",
          "./products": "./src/services/products.ts",
          "./MainLayout": "./src/MainLayout.tsx",
        },
        shared: ["react", "react-dom", "react-router-dom"],
      }),
    ],
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
  };
});
