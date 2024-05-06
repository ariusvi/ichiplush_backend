import { Request, Response } from "express"
import { Role } from "../model/Role"


export const getRoles = (req: Request, res:Response) => {

    try {
        const roles = Role.find()

        res.status(200).json(
            {
                success: true,
                message: "Roles retrieved successfully",
                data: roles
            })
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Roles can't be retrieved",
                error: error
            }
        )
    }
    
}

export const createRole = async (req: Request, res: Response) => {

    try {
        const name = req.body.name

        const role = await Role.findOne({where: {name: name}})
        if (role) {
            res.status(400).json(
                {
                    success: false,
                    message: "Role already exists"
                }
            )
        }

        const newRole = await Role.create(
            {
                name: name
            }
        ).save()

        res.status(201).json(
            {
                success: true,
                message: "Role created",
                data: newRole
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                susscess: false,
                message: "role can't be created",
                error: error
            }
        )
    }

}

export const updateRole = async (req: Request, res:Response) => {

    try {
        const roleId = req.body.id
        const name = req.body.name
        const description = req.body.description

        const role = await Role.findOne(
            {
                where: {
                    id: roleId
                }
            }
        )

        if (!role) {
            res.status(404).json(
                {
                    success: false,
                    message: "Role not found"
                }
            )
        }

        if (name && typeof name !== 'string') {
            res.status(400).json(
                {
                    success: false,
                    message: "Name must be a string"
                }
            )
        }

        if (description && typeof description !== 'string') {
            res.status(400).json(
                {
                    success: false,
                    message: "Description must be a string"
                }
            )
        }

        const roleUpdated = await Role.update(
            {
                id: roleId
            },
            {
                name: name,
                description: description
            }
        )
        
        res.status(200).json(
            {
                success: true,
                message: "Role updated successfully",
                data: roleUpdated
            })
            
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Role can't be updated",
            error: error
        })
    }
    
};

export const deleteRole = async (req: Request, res:Response) => {
    try {
        const roleId = req.body.id

        if (!roleId) {
            res.status(400).json(
                {
                    success: false,
                    message: "Role id is required"
                }
            )
        }

        const role = await Role.findOne({where: {id: roleId}})

        if (!role) {
            res.status(404).json(
                {
                    success: false,
                    message: "Role not found"
                }
            )
        }

        const roleDeleted = await Role.delete({id: roleId})

        res.status(200).json(
            {
                success: true,
                message: "Role deleted successfully",
                data: roleDeleted
            })
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Role can't be deleted",
                error: error
            }
        )
    }
    
};