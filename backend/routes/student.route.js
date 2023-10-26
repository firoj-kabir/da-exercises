const express = require('express')

const { createStudentInfo, getAllStudents } = require('../controllers/student.controller')
const { Validator } = require('../middlewares/validator.middleware')
const { studentSchema } = require('../schemas/student.schema')

const router = express.Router()

router.post('/', Validator(studentSchema), createStudentInfo)

router.get('/', getAllStudents)

module.exports = {
	studentRouter: router
}
