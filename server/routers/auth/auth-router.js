const express = require('express');
const { userRegister } = require('../../controllers/auth/auth-controller');


const authRouter = express.Router();


authRouter.post("/register", userRegister)


module.exports = authRouter;