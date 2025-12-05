import dotenv from "dotenv"

dotenv.config()

import express from "express"
import cors from "cors"
import { connect } from "mongoose"

const app = express()
const PORT = process.env.PORT || 3000
connect(process.env.MONGODB_URI || "mongodb://localhost:27017/ElderEase")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.error("Connection error:", err))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.send("API is running")
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})