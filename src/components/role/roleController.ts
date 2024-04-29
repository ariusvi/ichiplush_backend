import { Request, Response } from "express"


export const getRoles = (req: Request, res:Response) => {
    res.status(200).json(
        {
            success: true,
            message: "Roles retrieved successfully"
        })
}

export const createRole = (req: Request, res:Response) => {
    res.status(201).json(
        {
            success: true,
            message: "Role created successfully"
        })
};

export const updateRole = (req: Request, res:Response) => {
    res.status(200).json(
        {
            success: true,
            message: "Role updated successfully"
        })
};

export const deleteRole = (req: Request, res:Response) => {
    res.status(200).json(
        {
            success: true,
            message: "Role deleted successfully"
        })
};