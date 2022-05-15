import express from 'express'
import cors from "cors"
import ismmishawaka from "./api/ismmishawaka.route.js"

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/v1/ismmishawaka", ismmishawaka)
app.use("*", (req, res) => res.status(404).json({ error: "Not Found" }))

export default app