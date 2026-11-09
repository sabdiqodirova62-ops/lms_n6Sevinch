import express from "express"

import userController from "../controllers/users.js"

const router=express.Router()
 
router
  .get("/admins",userController.getAdmins)
  .post("/users", userController.createUser) 


export default router