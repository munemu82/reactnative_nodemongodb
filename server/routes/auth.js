import express from "express";

const router = express.Router();

//CONTROLLERS
const {signup, signin, forgotPassword, resetPassword} = require("../controllers/auth");

//CONFIGURE ROUTES
router.get("/", (req, res) =>{
    return res.json({
        data: "Hello World from API"
    })
})

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;