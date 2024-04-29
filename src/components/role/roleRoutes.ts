import express from "express";
import { createRole, deleteRole, getRoles, updateRole } from "./roleController";
const router = express.Router();

//-----ROLE ROUTES-----
//todo esto lo tendria que ver solo el SuperAdmin
router.get('/', getRoles);
router.post('/', createRole);
router.put('/', updateRole);
router.delete('/', deleteRole);

//-----export router-----
export default router;
