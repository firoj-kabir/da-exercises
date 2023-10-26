require('dotenv').config()
const express = require('express')
const cors = require('cors')
const  mongoose = require('mongoose')

const { router } = require('./routes')

const app = express()

const port = process.env.PORT || 3000

mongoose.connect(process.env.DB_URL).then(
	() => {
		console.log('DB connected!')
	},
	(err) => {
		console.log('Connection error', err)
	}
)

// app.get('/', (req, res) => {
// 	res.send('Hello world!')
// })

app.use(cors())
app.use(express.json())
app.use('/', router)

app.listen(port, () => {
	console.log(`App listening on port ${port}`)
})
