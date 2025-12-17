import { userModel } from "../models/userModel.js";
import { DateTime } from "luxon";
import { responseMannager } from "../../../helpers/responses.js";

class UserManager {
    //----------------------------------------------------------------
    async getUsers() {

        try {
            const users = await userModel.paginate({}, { limit: 5 })

            if (!users) throw new Error("Fail to seach users in database");

            const result = responseMannager(true, users, "List of users");
            return result;

        } catch (error) {
            const result = responseMannager(false, null, 'Fail to search users', error.message);
            return result;
        }
    }

    //----------------------------------------------------------------
    async getUser(id) {
        try {
            const user = await userModel.findById(id);
            if (!user) throw new Error("Fail to seach user in database");

            const result = responseMannager(true, user, "User found");
            return result;
        } catch (error) {
            const result = responseMannager(false, null, 'user not found', error.message);
            return result;
        }
    }

    //----------------------------------------------------------------
    async createUser(user) {
        try {
            const userCreated = await userModel.create(user);

            const result = responseMannager(true, userCreated, "User created");
            return result;
        } catch (error) {
            const result = responseMannager(false, null, 'Fail to create user', error.message);
            return result;
        }
    }

    //----------------------------------------------------------------
    async getUserByEmail(emailUser) {
        try {
  
            const user = await userModel.find({ email: emailUser });

            if (!user) throw new Error("Fail to search user");

            const result = responseMannager(true, user, "User found");
            return result;
        } catch (error) {
            const result = responseMannager(false, null, 'User not found', error.message);
            return result;
        }
    }

    //----------------------------------------------------------------
    async updateUser(idUser, newValues) {
        try {
            const user = await userModel.findByIdAndUpdate(idUser, { $set: newValues }, { new: true, runValidator: true });

            if (!user) throw new Error("Fail to search user");

            const result = responseMannager(true, user, "User updated");
            return result;
        } catch (error) {
            const result = responseMannager(false, null, 'Fail to update user', error.message);
            return result;
        }
    }

    //----------------------------------------------------------------
    async deleteUser(idUser) {
        try {
            const user = await userModel.findByIdAndDelete(idUser, { $set: newValues }, { new: true, runValidator: true });

            const result = responseMannager(true, user, "User deleted");
            return result;
        } catch (error) {
            const result = responseMannager(false, null, 'Fail to delete user', error.message);
            return result;
        }
    }

    //----------------------------------------------------------------
    async deleteUserForInactivity() {
        try {
            const users = await userModel.find({
                lastConnection:{$lt: DateTime.now().toLocaleString()}
            });

            const usersForDelete=[];

            users.forEach(user => {
                let dateOne= DateTime.fromISO(DateTime.now());
                let dateTwo= DateTime.fromISO(user.lastConnection);

                const difference= dateTwo.diff(dateOne, 'days').toObject().days;

                const round=Math.round(difference);

                if(round > 2){
                    usersForDelete.push(user);
                }
            });

            const result = responseMannager(true, usersForDelete, "User deleted");
            return result;

        } catch (error) {
            const result = responseMannager(false, null, 'Error to delete Users', error.message);
            return result;
        }
    }
}

export default UserManager;


