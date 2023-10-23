import express from 'express'

const port = 3001
const app = express()


app.get('/', (req, res) => {
  res.json({ foo: "bar" })
})


app.get('/test', (req, res) => {
  res.status(200).send('Test work')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})


