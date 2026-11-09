import userService from "../services/users.js"

class UserComtroller {
    async getAdmins(req, res) {
        let resData = await userService.getAdmins()
        return res.status(resData.status).json( resData )
    }
    async createUser(req, res) {
        let resData = await userService.createUser(req)
        return res.status(resData.status).json( resData )
    }
}


const userController = new UserComtroller()
export default userController