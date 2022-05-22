import { defineBuildConfig } from "unbuild"
export default defineBuildConfig({
  entries: ["./server/index"],
  outDir: "dist/server",
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
