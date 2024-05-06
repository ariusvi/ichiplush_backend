import { Request, Response } from "express";
import { Order } from "../model/Order";
import { Budget } from "../../budget/model/Budget";


export const createOrder = async (req: Request, res: Response) => {
    
        try {
    
            const userId = req.tokenData.id
            const reference = req.body.budgetReference
    
            if (!userId) {
                return res.status(400).json({
                    success: false,
                    message: "You must login first to create an order"
                })
            }
    
            const budget = await Budget.findOne({
                where: {
                    reference: reference
                }
            })

            if (!budget) {
                return res.status(404).json({
                    success: false,
                    message: "Budget not found"
                })
            }

            const budgetId = budget.id

            const newOrder = await Order.create({
                userId: userId,
                budgetId: budgetId,
                status: "pending"
            }).save()
        
            res.status(201).json({
                success: true,
                message: "Order created",
                data: {
                    budgetId: newOrder.budgetId,
                    status: newOrder.status
                }

            })
    
        } catch (error: any) {
            res.status(500).json(
                {
                    success: false,
                    message: "Order can't be created",
                    error: error.message
                }
            )
        }
}

export const getOrder = async (req: Request, res: Response) => {
    try {
        
        const orderId = req.body.id

        if (!orderId) {
            return res.status(400).json({
                success: false,
                message: "Order Id is required"
            })
        }

        const order = await Order.findOne({
            where: {
                id: orderId
            }
        })

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Order retrieved",
            data: {
                budgetId: order.budgetId,
                status: order.status
            }
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Order can't be retrieved",
            error: error.message
        })
        
    }
}

export const updateOrder = async (req: Request, res: Response) => {
    try {
        
        const orderId = req.body.id
        const status = req.body.status

        if (!orderId) {
            return res.status(400).json({
                success: false,
                message: "Order Id is required"
            })
        }

        const order = await Order.findOne({
            where: {
                id: orderId
            }
        })

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found"
            })
        }

        order.status = status
        const orderUpdated = await order.save()

        res.status(200).json({
            success: true,
            message: "Order updated",
            data: {
                budgetId: orderUpdated.budgetId,
                status: orderUpdated.status
            }
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Order can't be updated",
            error: error.message
        })
        
    }
}

