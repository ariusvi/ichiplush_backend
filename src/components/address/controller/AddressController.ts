import { Request, Response } from "express";


export const createAddress = async (req: Request, res: Response) => {
    try {
        const userId = req.tokenData.id
        const titte = req.body.title
        const name = req.body.name
        const surname = req.body.surname
        const phone = req.body.phone
        const street = req.body.street
        const city = req.body.city
        const state = req.body.state
        const country = req.body.country
        const postalCode = req.body.postalCode
        

        // Create a new address
        // Return the new address
        res.status(201).json({
            success: true,
            message: "Address created",
            // data: address
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Address cant be created",
            error: error
        })
    }
}