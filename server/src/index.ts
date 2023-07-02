import { MikroORM } from "@mikro-orm/core";
import express from "express";
import mikroOrmConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);
  await orm.getMigrator().up();

  const app = express();

  app.listen(process.env.PORT || 4000, () => {
    console.log(`Server ready at http://localhost:4000`);
  });

  await orm.close(true);
};

main();
