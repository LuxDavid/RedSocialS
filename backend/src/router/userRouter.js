import {Router} from "express";
import { changeRole, createUser,deleteUser,getUsers,getUserByEmail } from "../controllers/user.controller.js";

const router= Router();

//----------------------------------------------------------
router.get('/listUsers', getUsers);

//----------------------------------------------------------
router.post('/email', getUserByEmail);

//----------------------------------------------------------
router.put('/change', changeRole);

//----------------------------------------------------------
router.post('/register', createUser);

//----------------------------------------------------------
router.delete('/deleteUser', deleteUser);

export default router;