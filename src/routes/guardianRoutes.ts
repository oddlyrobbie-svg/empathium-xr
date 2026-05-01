import { Router } from "express";
import { postGuardian } from "../controllers/guardianController";

const router = Router();

router.post("/", postGuardian);

export default router;
