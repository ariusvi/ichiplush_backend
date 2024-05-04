import { Request, Response } from "express";
import { Budget } from "../model/Budget";


export const createBudget = async (req: Request, res: Response) => {

    const calculateBudget = (baseBody: number, withoutFace: boolean, animalEars: boolean, wings: boolean, quantity: number) => {
        let total = baseBody;
    
        if (withoutFace) {
            total -= 5;
        }
    
        if (animalEars) {
            total += 5;
        }
    
        if (wings) {
            total += 5;
        }
    
        return total * quantity;
    }


    try {
        const email = req.body.email
        const baseBody = 40;
        const withoutFace = req.body.withoutFace
        const animalEars = req.body.animalEars
        const wings = req.body.wings
        const quantity = req.body.quantity;

        const totalPrice = calculateBudget(baseBody, withoutFace, animalEars, wings, quantity);
        
        if (!email || withoutFace === undefined || animalEars === undefined || wings === undefined || !quantity) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email format"
            })
        }

        const newBudget = await Budget.create({
            email,
            quantity,
            baseBody,
            withoutFace,
            animalEars,
            wings,
            totalPrice,
            isActive: true
        }).save()

        const loadedBudget:any = await Budget.preload(newBudget);
        
        res.status(201).json({
            success: true,
            message: "Budget created",
            data: {
                totalPrice: loadedBudget.totalPrice,
                reference: loadedBudget.reference
            }
        })
        

    } catch (error:any) {
        res.status(500).json({
            success: false,
            message: "Budget can't be created",
            error: error.message
        })
    }
}

export const getBudget = async (req: Request, res: Response) => {

    try {
        const reference = req.body.reference;

        if (!reference) {
            return res.status(400).json({
                success: false,
                message: "Reference is required"
            })
        }

        const budget: any = await Budget.findOne({
            where: {
                reference: reference
            }
        })
        res.status(200).json({
            success: true,
            message: "Budget retrieved",
            data: {
                quantity: budget.quantity,
                withoutFace: budget.withoutFace,
                animalEars: budget.animalEars,
                wings: budget.wings,
                totalPrice: budget.totalPrice
            }
        })
    } catch (error:any) {
        res.status(500).json({
            success: false,
            message: "Budget can't be retrieved",
            error: error.message
        })
        
    }
}