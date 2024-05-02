import { Request, Response } from "express";
import { User } from "../model/User";

//retrieve users
export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find(
            {
                select: {
                    id: true,
                    userName: true,
                    email: true,
                    roleId: true,
                    isActive: true
                }
            }
        );
        return res.status(200).json({
            success: true,
            message: "users retrieved successfully",
            data: users,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error
        })
    }
}

// //retrieve user's profile
// export const getUserProfile = async (req: Request, res: Response) => {
//     try {
//         const userId = req.tokenData.userId
//         const user = await User.findOne(
//             {
//                 where: {
//                     id: userId
//                 }
//             }
//         );
//         console.log(userId, "userId");

//         if (!user) {
//             return res.status(404).json(
//                 {
//                     success: false,
//                     message: "Your profile doesn't exist"
//                 }
//             )
//         }
        
//     } catch (error: any) {
//     res.status(500).json(
//         {
//             susscess: false,
//             message: "your profile can't be retrieved",
//             error: error.message
//         }
//     )
// }
// }