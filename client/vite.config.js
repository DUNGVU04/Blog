import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/blog": {
        target: "https://devblogs.mine.bz/",
        secure: false,
      },
    },
  },

  plugins: [react()],
});
