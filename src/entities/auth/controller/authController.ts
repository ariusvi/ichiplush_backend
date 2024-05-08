import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../../user/model/User';
import { Request, Response } from 'express';

//--------REGISTER--------
export const register = async (req: Request, res: Response) => {

    try {
        const userName = req.body.userName;
        const email = req.body.email;
        const password = req.body.password;

        // Check if user already exists
        const user = await User.findOne({ where: { email } });
        if (user) {
            return res.status(400).json(
                {
                    success: false,
                    message: 'User already exists'
                });
        }

        // validation email
        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(email)) { //meth type test

            return res.status(400).json(
                {
                    success: false,
                    message: "email format invalid"
                }
            )
        }

        // validation username
        const usernameRegex = /^[\w]{3,25}$/;
        if (!usernameRegex.test(userName)) {
            return res.status(400).json(
                {
                    success: false,
                    message: "Username must be between 3 and 25 characters. It can include letters, numbers, and underscores"
                }
            )
        }

        // validation password
        const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{10,30}$/;
        if (!passwordRegex.test(password)) {
            return res.status(400).json(
                {
                    success: false,
                    message: "Password must be between 10 and 30 characters, and include at least one uppercase letter, one number, and one special character"
                }
            )
        }

        // hash password
        const passwordEncryted = bcrypt.hashSync(password, 8);


        // create user
        const newUser = await User.create({
            userName: userName,
            email: email,
            password: passwordEncryted,
            roleId: 4,
            isActive: true,
        }
        ).save();


        res.status(201).json(
            {
                success: true,
                message: "user registered successfully",
                data: {
                    userName: newUser.userName,
                    email: newUser.email,
                }
            }
        )

    } catch (error) {
        res.status(500).json(
            {
                susscess: false,
                message: "user can't be regstered",
                error: error
            }
        )
    }
};

//--------LOGIN--------
export const login = async (req: Request, res: Response) => {
    try {
        // receive information
        const email = req.body.email;
        const password = req.body.password;

        if (!email || !password) {
            return res.status(400).json(
                {
                    success: false,
                    message: "Email and password are required"
                }
            )
        }

        // validate email format
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email format",
            });
        }

        // find user

        const user = await User.findOne(
            {
                where: {
                    email: email
                },
                relations: {
                    role: true
                },
                select: {
                    id: true,
                    userName: true,
                    email: true,
                    password: true,
                    roleId: true,
                    isActive: true
                }
            }
        )

        // console.log(user, "user");

        if (!user) {
            return res.status(400).json(
                {
                    success: false,
                    message: "email or password invalid"
                }
            )
        }
        
        const isValidatePassword = bcrypt.compareSync(password, user.password);

        if (!isValidatePassword) {
            return res.status(400).json(
                {
                    success: false,
                    message: "email or password invalid"
                }
            )
        }

        //create token

        const token = jwt.sign(
            {
                id: user.id,
                username: user.userName,
                role: user.role.name
            },
            process.env.JWT_SECRET as string,
            {
                expiresIn: "10h"
            }
        )

        res.status(200).json(
            {
                success: true,
                message: "user logged successfully",
                token: token
            }
        )

    } catch (error) {
        res.status(500).json(
            {
                susscess: false,
                message: "user can't be logged",
                error: error
            }
        )
    }
}