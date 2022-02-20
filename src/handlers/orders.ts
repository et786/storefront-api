import express, { Request, Response } from 'express'
import { Order, OrderStore } from '../models/order';

const store = new OrderStore();

const index = async (_req: Request, res: Response) => {
    const orders = await store.index();
    res.json(orders);
};
  

const show = async (req: Request, res: Response) => {
    const order = await store.show(req.body.id);
    res.json(order);
};

const create = async (req: Request, res: Response) => {
    try {
        const order: Order = {
            id: req.body.id,
            status: req.body.status,
            user_id: req.body.user_id
        };

        const newOrder = await store.create(order);
        res.json(newOrder);
    } catch(err) {
        res.status(400);
        res.json(err);
    }
};

const destroy = async (req: Request, res: Response) => {
    const deleted = await store.delete(req.body.id)
    res.json(deleted)
};

const orderRoutes = (app: express.Application) => {
  app.get('/orders', index);
  app.get('/orders/:id', show);
  app.post('/orders', create);
  app.delete('/orders', destroy);
}

export default orderRoutes;
