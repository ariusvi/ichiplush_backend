import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

//-------HEALTHY CHECK ROUTE-------
router.get('/' , (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: "Server is healthy"
    });
});

export default router;