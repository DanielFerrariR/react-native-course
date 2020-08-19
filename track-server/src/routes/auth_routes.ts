import express from 'express'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import { ensure } from '../utils'

const User = mongoose.model('User')

const router = express.Router()

router.post('/register', async (req, res) => {
  const { email, password } = req.body

  try {
    const user = new User({ email, password })

    await user.save()

    const token = jwt.sign({ userId: user._id }, ensure(process.env.SECRET_KEY))

    res.send({ email, token })
  } catch (error) {
    console.log(error)
    res.status(422).send(error.message)
  }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(422).send({ error: 'Must provide email and password' })
  }

  const user = await User.findOne({ email })

  if (!user) {
    return res.status(401).send({ error: 'Invalid password or email.' })
  }

  try {
    const isEqual = await user.schema.methods.comparePassword(password)

    if (!isEqual) {
      return res.status(401).send({ error: 'Invalid password or email.' })
    }

    const token = jwt.sign({ userId: user._id }, ensure(process.env.SECRET_KEY))

    return res.send({ email, token })
  } catch (error) {
    return res.status(401).send({ error: 'Invalid password or email.' })
  }
})

export default router
