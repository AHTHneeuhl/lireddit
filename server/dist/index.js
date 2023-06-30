"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const constants_1 = require("./constants");
const post_1 = require("./entities/post");
const main = async () => {
    const orm = await core_1.MikroORM.init({
        entities: [post_1.Post],
        dbName: "lireddit",
        type: "postgresql",
        debug: !constants_1.__prod__,
    });
    const post = orm.em.create(post_1.Post, { title: "My fist post" });
    await orm.em.persistAndFlush(post);
};
main();
//# sourceMappingURL=index.js.map