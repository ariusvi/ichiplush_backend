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
        // check that the password is encrypted
        console.log(passwordEncryted);

        // create user
        const newUser = await User.create({
            userName: userName,
            email: email,
            password: passwordEncryted
            //todo: add role
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