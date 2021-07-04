const Router = require("koa-router");

const { create, avatarInfo } = require("../controller/user.controller");
const { verifyUser, handlePassword } = require("../middleware/user.middle");

const userRouter = new Router({ prefix: "/users" });
userRouter.post("/", verifyUser, handlePassword, create);
userRouter.get("/:userId/avatar", avatarInfo);
module.exports = userRouter;
