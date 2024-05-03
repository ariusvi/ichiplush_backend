import { Request, Response } from "express";
import { Catalogue } from "../model/Catalogue";

export const createItem = async (req: Request, res: Response) => {
    try {
        const title = req.body.title;
        const description = req.body.description;
        const image = req.body.image;

        if (!title || !description) {
            return res.status(400).json(
                {
                    success: false,
                    message: "Title and description are required"
                }
            )
        }

        const newItem = await Catalogue.create(
            {
                title: title,
                description: description,
                image: image
            }
        ).save();

        res.status(201).json(
            {
                success: true,
                message: "Item created successfully",
                data: newItem
            }
        )

    } catch (error:any) {
        res.status(500).json(
            {
                susscess: false,
                message: "Item can't be created",
                error: error.message
            }
        )
    }
}


export const getItems = async (req: Request, res: Response) => {
    try {
        const items = await Catalogue.find(
            {
                select: ["title", "description", "image"]
            }
        );
        res.status(200).json(
            {
                success: true,
                message: "Items retrieved successfully",
                data: items
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Items can't be retrieved",
                error: error
            }
        )
    }
}