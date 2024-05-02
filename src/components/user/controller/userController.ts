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

//retrieve user's profile
export const getUserProfile = async (req: Request, res: Response) => {
    try {
        const userId = req.tokenData.userId
        const user = await User.findOne(
            {
                where: {
                    id: userId
                }
            }
        );
        console.log(userId, "userId");

        if (!user) {
            return res.status(404).json(
                {
                    success: false,
                    message: "Your profile doesn't exist"
                }
            )
        }

        return res.status(201).json(
            {
                success: true,
                message: "Your profile is retrieved successfully",
                data: user
            }
        )
        
    } catch (error: any) {
    res.status(500).json(
        {
            susscess: false,
            message: "your profile can't be retrieved",
            error: error.message
        }
    )
}
}

//update user's profile
export const updateUsersProfile = async (req: Request, res: Response) => {
try {
    
    const userName = req.body.userName;
    const email = req.body.email;
    const userId = req.tokenData.userId;

    if (userName && typeof userName !== "string") {
        return res.status(400).json({
            success: false,
            message: "Invalid userName format"
        })
    }

    const user = await User.findOne(
        {
            where: {
                id: userId
            }
        }
    );
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        })
    }
    user.userName = userName;
    user.email = email;
    const userUpdated = await user.save();

    res.status(200).json(
        {
            success: true,
            message: "user updated",
            data: userUpdated
        }
    )

} catch (error) {
    res.status(500).json({
        success: false,
        message: "user profile cant be updated",
        error: error
    })
}
}

//delete user 
export const deleteUser = async (req: Request, res: Response) => {
    try {
        
        const userId = req.body.id

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "User Id is required"
            })
        }

        const user = await User.findOne(
            {
                where: {
                    id: userId
                }
            }
        );

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        const userDeleted = await User.delete(
            {
                id: userId
            }
        )

        res.status(200).json(
            {
                success: true,
                message: "user deleted",
                data: userDeleted
            }
        )

    } catch (error:any) {
        res.status(500).json(
            {
                success: false,
                message: "user can't be deleted",
                error: error.message
            }
        )
    }
}