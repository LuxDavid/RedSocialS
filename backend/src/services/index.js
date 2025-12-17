import {Users} from "../databases/factory.js";

import UserService from "./user.service.js";

export const UserRepository= new UserService(new Users());