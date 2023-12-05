import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      provider: "istanbul",
    },
    exclude: ["./dist/"],
    globals: true,
    clearMocks: true,
    mockReset: true,
    environment: "jsdom",
  },
});