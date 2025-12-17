class UserService{

    constructor(dao){
        this.dao=dao;
    }

    getUsers=async() => this.dao.getUsers();
    getUser=async(id) =>this.dao.getUser(id);
    createUser=async(user)=>this.dao.createUser(user);
    getUserByEmail=async(emailUser)=>this.dao.getUserByEmail(emailUser);
    updateUser=async(idUser, newValues)=>this.dao.updateUser(idUser, newValues);
    deleteUser=async(idUser)=>this.dao.deleteUser(idUser);
    deleteUserForInactivity=async()=>this.dao.deleteUserForInactivity();
}

export default UserService;