import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["esm"], // Remove "cjs" to avoid the error
    dts: true,
    outDir: "dist",
    sourcemap: true,
    clean: true,
});
