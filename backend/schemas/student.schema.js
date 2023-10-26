const Joi = require('joi')

const schema = Joi.object({
	name: Joi.string()
		.min(3)
		.max(15)
		.required(),

	phone: Joi.string()
		.required()
})

module.exports = {
	studentSchema: schema
}
