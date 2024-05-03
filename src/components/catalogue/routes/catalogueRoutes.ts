import express from 'express';
import { auth } from "../../../middlewares/authMiddleware";
import { isSuperAdmin } from "../../../middlewares/isSuperAdminMiddleware";
import { createItem, deleteItem, getItems, updateItem } from "../controller/catalogueController";

const router = express.Router();


router.post('/', auth, isSuperAdmin, createItem);
router.get('/', getItems);
router.put('/', auth, isSuperAdmin, updateItem);
router.delete('/', auth, isSuperAdmin, deleteItem);

export default router;