import {Users, Products} from "../databases/factory.js";

import UserService from "./user.service.js";
import ProductService from "./product.service.js";

export const UserRepository= new UserService(new Users());
export const ProductRepository= new ProductService(new Products());