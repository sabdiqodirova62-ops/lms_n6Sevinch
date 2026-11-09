import schema from "../utils/validation.js";

const middlewares = {
    createUsers(req, res, next) {
     

        const { error } = schema.userSchema.validate(req.body);

        if (error) {
            return res.status(400).json({
                status: 400,
                message: error.details[0].message
            });
        }

        next();
    }
};

export default middlewares;
