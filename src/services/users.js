import pool from "../config/db.js"
import argon from "argon2"

class UserServices{
    async getAdmins() {
    const role = await pool.query(
        `SELECT * FROM users WHERE role_id = (SELECT id FROM roles WHERE name = 'admin')`
    );
    return {
        status: 200,
        data: role.rows
    };
}
    async createUser(req){
          const{fullname,phone,password,role_id}=req.body

          const existUser=await pool.query(`select * from users where phone=$1`,[phone])
          if(existUser.rows.length){
            return{
                status:409,
                message:"User already exists"
            }
          }


          const existRole=await pool.query(`select * from roles where id=$1`,[role_id])
          if(!existRole.rows.length){
            return{
                status:404,
                message:"Role not found"
            }
          }

          const hashpassword=await argon.hash(password)

          
          await pool.query(`insert into users(fullname,phone,password,role_id) values($1,$2,$3,$4)`,[fullname,phone,hashpassword,role_id])
          return{
            status:201,
            message:"User created successfully"
          }
    }
}

const userService=new UserServices()
export default userService 