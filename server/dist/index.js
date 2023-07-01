"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const post_1 = require("./entities/post");
const mikro_orm_config_1 = __importDefault(require("./mikro-orm.config"));
const main = async () => {
    const orm = await core_1.MikroORM.init(mikro_orm_config_1.default);
    await orm.getMigrator().up();
    const post = orm.em.create(post_1.Post, { title: "My fist post" });
    await orm.em.persistAndFlush(post);
    const posts = await orm.em.find(post_1.Post, {});
    console.log(posts);
    await orm.close(true);
};
main();
//# sourceMappingURL=index.js.map