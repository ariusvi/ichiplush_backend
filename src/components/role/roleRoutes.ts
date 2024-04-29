import express from "express";
const router = express.Router();

//-----ROLE ROUTES-----
//todo esto lo tendria que ver solo el SuperAdmin
router.get('/', (req, res) => {
    res.status(200).json(
        {
            success: true,
            message: "Roles retrieved successfully"
        })
});

//-----export router-----
export default router;
