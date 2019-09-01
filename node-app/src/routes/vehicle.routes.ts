import express from 'express';
import Controller from '../standards/controller';
import StandardRoutes from '../standards/routes';

const service = 'vehicle';
const routes = new StandardRoutes(service, new Controller(service));

export default routes.router(express.Router());
