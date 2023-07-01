import { defineConfig } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/post";

export default defineConfig({
  entities: [Post],
  dbName: "lireddit",
  type: "postgresql",
  debug: !__prod__,
});
