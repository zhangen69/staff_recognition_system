import express from 'express';
import Controller from '../standards/controller';
import StandardRoutes from '../standards/routes';
import { checkAuth } from '../middlewares/checkAuth';

const service = 'bonus-status';
const routes = new StandardRoutes(service, new Controller(service));

const router = routes.router(express.Router());

router.get('/bonus/profile', checkAuth, (req, res, next) => {
    const auth = req['auth'];
});

export default router;
