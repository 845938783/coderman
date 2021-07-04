const Koa = require("koa");
const bodyParser = require("koa-bodyparser");

const errorHandler = require("./error-handle");
const useRouter = require("../router/index");

const app = new Koa();

app.useRouter = useRouter;

app.use(bodyParser());
app.useRouter();

app.on("error", errorHandler);

module.exports = app;
