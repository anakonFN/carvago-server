const express = require('express')

const app = express()
const cors = require('cors')
const axios = require('axios')

app.use(cors())

const port = process.env.PROXY_PORT || 5000

app.get('/*', (req, res) => {
  const backendUrl = `https://auto.ria.com${req.originalUrl}`

  axios.get(backendUrl).then(response => res.send(response.data))
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
