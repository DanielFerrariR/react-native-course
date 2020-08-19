import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import { Request, Response, NextFunction } from 'express'
import { User } from 'src/models/User'
import { ensure } from '../utils'

const User = mongoose.model('User')

const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).send({ error: 'You must be logged in.' })
  }

  const token = authorization.replace('Bearer ', '')

  jwt.verify(
    token,
    ensure(process.env.SECRET_KEY),
    async (error: any, payload: any) => {
      if (error) {
        return res.status(401).send({ error: 'You must be logged in.' })
      }

      const { userId } = payload

      const user = await User.findById(userId)

      req.user = user as User

      return next()
    }
  )
}

export default requireAuth
