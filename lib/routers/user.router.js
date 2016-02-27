import router from "koa-router";

import {UserService} from "../services/user.service";
import {UserController} from "../controllers/user.controller";

export function UserRouter(redisClient, log) {
  var service = new UserService(redisClient, log);
  var controller = new UserController(service);
  var r = new router();
  r.get("/login", controller.login);
  r.get("/session/users", controller.getList);
  r.get("/session/user/name", controller.search);
  r.post("/user", controller.register);
  r.put("/session/user", controller.update);
  r.get("/session/friends", controller.getFriends);
  r.post("/session/friend", controller.addFriend);
  r.post("/session/friend/approve", controller.approveFriend);
  r.delete("/session/friend", controller.delFriend);
  log.info("user router inited");
  return r;
}
