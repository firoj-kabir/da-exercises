const { Student } = require('../models/student.model')

const createStudentInfo = async (req, res) => {
	const newStudent = new Student(req.body)
	const insertedStudent = await newStudent.save()
	res.status(201).json(insertedStudent)
}

const getAllStudents = async (req, res) => {
	const students = await Student.find()
	res.json(students)
}

module.exports = {
	createStudentInfo,
	getAllStudents
}
