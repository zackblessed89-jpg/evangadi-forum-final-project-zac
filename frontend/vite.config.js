// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base:'/evangadi-forum-project-group-1-zac/',
  resolve: {
    alias: {
      // This tells Vite that "@" means the "src" folder
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
