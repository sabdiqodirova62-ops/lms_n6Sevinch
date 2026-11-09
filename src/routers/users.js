// import express from "express"
// import roleController from "../controllers/roles.js"
// import middlewares from "../middleware/validation.js"
// import userController from "../controllers/users.js";
// const router=express.Router()
 
// router
// //    .get("/all",roleController.getAllRoles)
// //   .post("/", roleController.createRole) 
// .post("/users", middlewares.createUsers, userController.createUser);
// .get("/admins", userController.getAdmins);


  
// export default router
import express from "express";

import roleController from "../controllers/roles.js"
import userController from "../controllers/users.js";
import middlewares from "../middleware/validation.js";

const router = express.Router();
router.post("/roles", roleController.createRole);
router.get("/roles/all", roleController.getAllRoles);
router.get("/admins", userController.getAdmins);
router.post("/users", middlewares.createUsers, userController.createUser);

export default router;