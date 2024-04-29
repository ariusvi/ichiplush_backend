import express from "express";
import { getRoles } from "./roleController";
const router = express.Router();

//-----ROLE ROUTES-----
//todo esto lo tendria que ver solo el SuperAdmin
router.get('/', getRoles);

//-----export router-----
export default router;
