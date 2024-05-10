import { Request, Response } from "express"
import { Review } from "../model/Review"
import { User } from "../../user/model/User"



export const createReview = async (req: Request, res: Response) => {

    try {

        const userId = req.tokenData.id
        const orderId = req.body.orderId
        const text = req.body.text
        const rating = req.body.rating
        const user = await User.findOne(
            {
                where: {
                    id: userId
                }
            }
        )

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "You must login first to create a review"
            })
        }

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
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
            createdAt: new Date(),

        }).save()

        res.status(201).json({
            success: true,
            message: "Review created",
            data: newReview
        })

    } catch (error: any) {
        res.status(500).json(
            {
                success: false,
                message: "review can't be created",
                error: error.message
            }
        )
    }
}

export const getReview = async (req: Request, res: Response) => {
    try {


        const findReviews = await Review.find(
            {
                select: {
                    text: true,
                    rating: true,
                    createdAt: true,
                    userId: true,
                }
            }
        )

        const reviews = await Promise.all(findReviews.map(async (review) => {
            const user = await User.findOne(
                {
                    where: {
                        id: review.userId
                    }
                }
            )
            return {
                text: review.text,
                rating: review.rating,
                createdAt: review.createdAt,
                user: user?.userName
            }
        }))

        res.status(200).json({
            success: true,
            message: "reviews retrieved successfully",
            data: reviews
        })

    } catch (error: any) {
        res.status(500).json(
            {
                success: false,
                message: "review can't be retrieved",
                error: error.message
            }
        )
    }
}

export const deleteReview = async (req: Request, res: Response) => {
    try {

        const reviewId = req.body.reviewId

        const review = await Review.findOne(
            {
                where: {
                    id: reviewId
                }
            }
        )

        if (!review) {
            return res.status(404).json({
                success: false,
                message: "Review not found"
            })
        }

        const reviewDeleted = await Review.delete(
            {
                id: reviewId
            }
        )
        res.status(200).json(
            {
                success: true,
                message: "review deleted",
                data: reviewDeleted
            }
        )

    }
    catch (error: any) {
        res.status(500).json(
            {
                success: false,
                message: "review can't be deleted",
                error: error.message
            }
        )
    }
}

export const getUserName = async (req: Request, res: Response) => {
    try {
        const reviews = await Review.find({ relations: ["user"] });

        const reviewsWithUserName = reviews.map(review => ({
            ...review,
            userName: review.user.userName
        }));

        res.status(200).json({
            success: true,
            message: "reviews retrieved successfully",
            data: reviewsWithUserName
        });
    } catch (error: any) {
        res.status(500).json(
            {
                success: false,
                message: "review's userName can't be retrieved",
                error: error.message
            }
        )
    }
}

