import Controller from '../standards/controller';
import { NextFunction, Response, Request } from 'express';

const selectController = (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl.startsWith('/service')) {
    try {
      const controller = new Controller(req.params.controllerName);
      controller.getModule().then((_) => {
        req['controller'] = controller;
        next();
      });
    } catch (error) {
      res.status(400).json({ message: 'Controller not found!' });
    }
  }
};

export { selectController };
