import { defineConfig } from "vitest/config";

export default defineConfig({
  // Resolves the "@/*" alias from tsconfig.json.
  resolve: { tsconfigPaths: true },
  test: {
    environment: "node",
    // e2e/ belongs to Playwright.
    include: ["src/**/*.test.ts"],
    // `npm run test:coverage` writes coverage/lcov.info, which CI uploads to
    // Codecov. Generated Prisma code and shadcn primitives aren't ours to test.
    coverage: {
      provider: "v8",
      // lcov also writes a browsable HTML report to coverage/lcov-report/.
      reporter: ["text", "text-summary", "lcov"],
      include: ["src/**"],
      exclude: [
        "src/generated/**",
        "src/components/ui/**",
        "src/**/*.test.ts",
      ],
    },
  },
});
