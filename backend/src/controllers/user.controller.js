import { UserRepository } from "../services/index.js";

export const changeRole = async (req, res) => {

    try {
        const userEmail = req?.body?.email;
        const role = req?.body?.role;

        const userForChange = await UserRepository.getUserByEmail(userEmail);

        if (userForChange.success == false) return res.status(404).send(userForChange);

        const newRole= userForChange?.data[0];
        newRole.role=role;

        const result= await UserRepository.updateUser(userForChange?.data[0]._id, newRole);

        res.status(200).send(result);

    } catch (error) {
        res.status(500).send({ status: 'error', message: 'Fail data in database' });
    }
}

//--------------------------------------------------------------------------------

export const getUsers = async (req, res) => {

    try {
        const result = await UserRepository.getUsers();

        if (result.success == false) return res.status(404).send(users);

        return res.status(200).send(result);

    } catch (error) {
        res.status(500).send({ status: 'error', message: 'Fail data in database' });
    }
}

//--------------------------------------------------------------------------------

export const getUserByEmail = async (req, res) => {

    try {
        const userEmail = req?.body?.email;

        const result = await UserRepository.getUserByEmail(userEmail);

        if (result.success == false) return res.status(404).send(result);

        return res.status(200).send(result);

    } catch (error) {
        res.status(500).send({ status: 'error', message: 'Fail data in database' });
    }
}

//--------------------------------------------------------------------------------

export const deleteUser = async (req, res) => {

    try {
        const userEmail = req?.body?.email;
        const user = await UserRepository.getUserByEmail(userEmail);

        if (user.success == false) return res.status(404).send(user);

        const result = await UserRepository.deleteUser(user?.data?.id);

        return res.status(200).send(result);

    } catch (error) {
        res.status(500).send({ status: 'error', message: 'Fail data in database' });

    }
}

//--------------------------------------------------------------------------------

export const createUser= async (req,res) => {

    try {
        const user=req.body;

        const result= await UserRepository.createUser(user);

        if (user.success == false) return res.status(404).send(user);

        return res.status(201).send(result);

    } catch (error) {
        res.status(500).send({ status: 'error', message: 'Fail data in database' });
    }
}