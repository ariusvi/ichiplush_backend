import { Request, Response } from "express";
import { Address } from "../model/Address";


export const createAddress = async (req: Request, res: Response) => {
    try {
        const userId = req.tokenData.id
        const title = req.body.title
        const name = req.body.name
        const surname = req.body.surname
        const phone = req.body.phone
        const street = req.body.street
        const city = req.body.city
        const state = req.body.state
        const country = req.body.country
        const postalCode = req.body.postalCode
        
        // check if all required fields are filled
        if (!title || !name || !surname || !phone || !street || !city || !state || !country || !postalCode) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const newAddress = await Address.create({
            userId: userId,
            title: title,
            name: name,
            surname: surname,
            phone: phone,
            street: street,
            city: city,
            state: state,
            country: country,
            postalCode: postalCode,
            isActive: true,
        }).save()

        // Return the new address
        res.status(201).json({
            success: true,
            message: "Address created",
            data: newAddress
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Address cant be created",
            error: error
        })
    }
}

export const getAddresses = async (req: Request, res: Response) => {
    try {
        const userId = req.tokenData.id
        const addresses = await Address.find({
            where: {
                userId: userId
            }
        })
        res.status(200).json({
            success: true,
            message: "Addresses retrieved",
            data: addresses
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Addresses cant be retrieved",
            error: error
        })
    }
}

export const updateAddress = async (req: Request, res: Response) => {

    try {
        const userId = req.tokenData.id
        const addressId = req.body.id
        const title = req.body.title
        const name = req.body.name
        const surname = req.body.surname
        const phone = req.body.phone
        const street = req.body.street
        const city = req.body.city
        const state = req.body.state
        const country = req.body.country
        const postalCode = req.body.postalCode

        // check if all required fields are filled
        if (!title || !name || !surname || !phone || !street || !city || !state || !country || !postalCode) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const address = await Address.findOne({
            where: {
                id: addressId,
                userId: userId
            }
        })

        if (!address) {
            return res.status(404).json({
                success: false,
                message: "Address not found"
            })
        }

        address.title = title
        address.name = name
        address.surname = surname
        address.phone = phone
        address.street = street
        address.city = city
        address.state = state
        address.country = country
        address.postalCode = postalCode

        const addressUpdated = await address.save()

        res.status(200).json({
            success: true,
            message: "Address updated successfully",
            data: addressUpdated
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Address can't be updated",
            error: error
        })
    }
}