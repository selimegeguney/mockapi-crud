const express = require("express")
const app = express()
const API = "https://6499cee779fbe9bcf84003e1.mockapi.io"
const cors = require("cors")
app.use(cors())

app.listen(4000, () => {
  console.log("run-server")
})

app.use((req, res, next) => {
  const allowedOrigins = ["*"]
  const origin = req.headers.origin
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin)
  }
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS, POST, PUT, DELETE")
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization")
  res.header("Access-Control-Allow-Credentials", true)
  return next()
})

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
}

app.get("/animal", async (req, res) => {
  try {
    const apiRes = await fetch(`${API}/animal`, options)
    const data = await apiRes.json()
    console.log(data)
    res.json(data)
  } catch (err) {
    console.log(err)
  }
})
