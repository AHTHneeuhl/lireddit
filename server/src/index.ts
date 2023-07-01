import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entities/post";
import mikroOrmConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);

  const post = orm.em.create(Post, { title: "My fist post" });
  await orm.em.persistAndFlush(post);
};

main();
