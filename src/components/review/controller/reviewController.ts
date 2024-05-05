import { Request, Response } from "express"
import { Review } from "../model/Review"



export const createReview = async (req: Request, res: Response) => {

    try {

        const userId = req.tokenData.id
        const orderId = req.body.orderId
        const text = req.body.text
        const rating = req.body.rating

        if (!userId ) {
            return res.status(400).json({
                success: false,
                message: "You must login first to create a review"
            })
        }

        if (!orderId || !text || !rating) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const newReview = await Review.create({
            userId: userId,
            orderId: orderId,
            text: text,
            rating: rating,
            createdAt: new Date()
        }).save()

        res.status(201).json({
            success: true,
            message: "Review created",
            data: newReview
        })

    } catch (error:any) {
        res.status(500).json(
            {
                success: false,
                message: "review can't be created",
                error: error.message
            }
        )
    }
}