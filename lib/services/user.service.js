import mongodb from "mongodb";
var ObjectID = mongodb.ObjectID;
import md5 from "md5";

import {User, UserDAO} from "../models/user.model";
import {UserRedisUtil} from "../models/user.redis.util";

export class UserService {
  static getInstance() {
    return UserService._instance;
  }

  constructor(log) {
  	this._log = log;
  	UserService._instance = this;
  	this._log.info("user service inited");
  }

  * login(account, password) {
  	var user = yield UserDAO.getByAccount(account);
  	if (!user) {
  	  throw { status: 501, message: "account not exist"};
  	}
  	var md5password = md5(password);
  	if (md5password == user.password) {
  	   var token = md5(user._id + " " + new Date().getTime() + Math.random());
  	   delete user.password;
  	   yield UserRedisUtil.addUser(token, user);
  	   user.token = token;
  	} else {
  	  throw { status: 501, message: "password error"};
  	}
  }

  
}