const Joi = require('joi');

const UserValidation = req =>
{
    const schema = Joi.object
    ({
        username: Joi.string().min(4).max(26).required(),
        email: Joi.string().min(4).max(26).required(),
        password: Joi.string().min(7).max(16).required()
    }); 
    return schema.validate(req.body)
}

module.exports.UserValidation = UserValidation;