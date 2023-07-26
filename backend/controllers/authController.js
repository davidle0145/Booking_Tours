import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req,res) => {

    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo: req.body.photo,
            role: req.body.role
        })
        await newUser.save()
        res.status(200).json({
            success: true,
            message: 'Successfully created new User'
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to created new User. Try again!'
        })
    }
}

export const login = async (req,res) => {

    const email = req.body.email
    try {
        const user = await User.findOne({email})
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Email is not correct!'
            })
        }

        const checkPassword = await bcrypt.compare(req.body.password, user.password)
        if (!checkPassword) {
            return res.status(401).json({
                success: false,
                message: 'Password is not correct!'
            })
        }

        const {password, role, ...rest} = user._doc
        const token = jwt.sign(
            {   id: user._id,
                role: user.role }, 
            process.env.JWT_SECRET_KEY,
            { expiresIn: "15d"} 
        )

        // set token in the browser cookies and send the res to the client
        res.cookie('accessToken', token, {
            httpOnly: true,
            expires: token.expiresIn
        }).status(200).json({
            success: true,
            message: 'Successfully login',
            data: {...rest},
            token,
            role
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to Login'
        })
    }
}
