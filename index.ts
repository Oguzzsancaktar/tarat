const path = require('path')
import dotenv from 'dotenv'
import { createServer } from 'http'
import express from 'express'
import mongoose from 'mongoose'

// Logger.
import morgan from 'morgan'
// Parsers.
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
// Security.
import helmet from 'helmet'
import cors from 'cors'

import routes from './routes'

require('dotenv').config()

const URI = process.env.MONGO_URI || ""

console.log("URI", URI)

const PORT = process.env.PORT || 8000

const main = async () => {
  try {
    // Mongo Connection
    await mongoose.connect(URI, {})
    console.log('Connected to MongoDB')
  } catch (err) {
    console.log('Error connecting to MongoDB:', err.message)
  }

  // App Server
  const app = express()
  const httpServer = createServer(app)


  // Middlewares
  app.use(express.json())
  app.use(cookieParser())
  app.use(
    helmet({
      crossOriginEmbedderPolicy: false,
      crossOriginOpenerPolicy: { policy: 'same-origin-allow-popups' },
      originAgentCluster: true,
      referrerPolicy: {
        policy: 'no-referrer-when-downgrade'
      }
    })
  )


  app.use(
    helmet.contentSecurityPolicy({
      useDefaults: true,
      directives: {
        'img-src': ["'self'", 'https: data: blob:'],
        'default-src': ["'self'", 'https://*'],
        'connect-src': ["'self'", 'https://*', 'wss://*', 'data: blob:'],
        'script-src': ["'self'", 'https: data: blob: https://*']
      }
    })
  )

  app.use(cors())
  app.use(morgan('dev'))

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  app.use('/api', routes)



  // error handler
  app.use(function (err, req, res, next) {
    console.log(err)
    res.sendStatus(err.status || 500)
  })

  process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error)
  })

  process.on('uncaughtException', error => {
    console.log('uncaughtException', error)
  })

  app.use(
    express.urlencoded({
      extended: true
    })
  )

  httpServer.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}

main().then(() => {
  console.log('SUCCESS STARTING SERVER')
})
