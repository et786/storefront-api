import express, { Request, Response } from 'express'
import { User, UserStore } from '../models/user';
import jwt from "jsonwebtoken";

const store = new UserStore();

const index = async (_req: Request, res: Response) => {
    const users = await store.index();
    res.json(users);
};
  

const show = async (req: Request, res: Response) => {
    const user = await store.show(req.body.id);
    res.json(user);
};

const create = async (req: Request, res: Response) => {
    try {
        const user: User = {
            id: req.body.id,
            username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password
        };

        const newUser = await store.create(user);
        var token = jwt.sign({user: newUser}, `${process.env.TOKEN_SECRET}`);
        res.json(token);
    } catch(err) {
        res.status(400);
        res.json(err);
    }
};

const destroy = async (req: Request, res: Response) => {
    const deleted = await store.delete(req.body.id)
    res.json(deleted)
};

const authenticate = async (req: Request, res: Response) => {
    const user: User = {
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
    }
    try {
        const u = await store.authenticate(user.username, user.password)
        var token = jwt.sign({ user: u }, `${process.env.TOKEN_SECRET}`);
        res.json(token)
    } catch(error) {
        res.status(401)
        res.json({ error })
    }
}

const addOrder = async (_req: Request, res: Response) => {
    const quantity = _req.params.quantity;
    const orderId = _req.params.id;
    const userId = _req.body.user_id;
    try {
      const addedOrder = await store.addOrder(parseInt(quantity), userId, orderId);
      res.json(addedOrder)
    } catch(err) {
      res.status(400)
      res.json(err)
    }
} 

const userRoutes = (app: express.Application) => {
  app.get('/users', index);
  app.get('/users/:id', show);
  app.post('/users', create);
  app.delete('/users', destroy);
  app.post('/users/:id/orders', addOrder);
}

export default userRoutes;
