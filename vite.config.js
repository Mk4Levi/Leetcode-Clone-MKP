import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [nodeResolve()],
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});
