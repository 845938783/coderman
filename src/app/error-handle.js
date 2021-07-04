const errorType = require("../constants/error-types");
const errorHandler = (error, ctx) => {
  let status, message;
  switch (error.message) {
    case errorType.NAME_OR_PASSWORD_IS_REQUIRED:
      status = 400; //Bad Require
      message = "用户名或者密码不能为空~~~";
      break;
    case errorType.USER_ALREADY_EXISTS:
      status = 409; // confict
      message = "用户名已经存在~~~";
      break;
    case errorType.USER_DOES_NOT_EXISTS:
      status = 400; //参数错误
      message = "用户名不存在~~~";
      break;
    case errorType.PASSWORD_IS_INCORRENT:
      status = 400; //参数错误
      message = "密码不正确~~~";
      break;
    case errorType.UNAUTHORIZATION:
      status = 401; //参数错误
      message = "未授权——无效的token~~~";
      break;
    case errorType.UNPERMISSION:
      status = 401; //参数错误
      message = "您不具备操作的权限~~~";
      break;
    default:
      status = 404;
      message = "NOT FOUND";
  }

  ctx.status = status;
  ctx.body = message;
};
module.exports = errorHandler;
