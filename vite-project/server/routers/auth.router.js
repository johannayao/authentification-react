import express from "express";
import { signUp , signIn,getUserConnected} from "../controllers/auth.controller.js";
import authClients from "../middleware/authClients.js";
const router = express.Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn);
router.get("/nom",authClients,getUserConnected)
// router.post("/signIn", signIn);

export default router;
