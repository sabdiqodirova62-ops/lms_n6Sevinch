import joi from "joi"

const userSchema = joi.object({
    fullname: joi.string().min(3).max(30).required(),
    phone: joi.string().pattern(/^\+998(9[0-9]|33|71|88)[0-9]{7}$/).required(),
    password: joi.string().min(6).max(30).required(),
    role_id: joi.number().integer().required()
})

export default { userSchema }