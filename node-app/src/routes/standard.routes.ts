import { Router, Request, Response, NextFunction } from 'express';
import { checkAuth } from '../middlewares/checkAuth';
import { selectController } from '../middlewares/ServiceControllerSelector';
import { IController } from '../standards/IController';
import { from } from 'rxjs';
import IResult from '../standards/IResult';

const router = Router();

// Submit
router.post(
  '/service/:controllerName',
  selectController,
  checkAuth,
  (req: Request, res: Response, next: NextFunction) => {
    const controller: IController = req['controller'];
    const func = req.body._id ? controller.update : controller.create;
    const action = from(func(controller.model, req.body, req['auth']));
    action.subscribe(
      (result: IResult) => {
        res.status(result.status).json(result);
      },
      (result: IResult) => {
        res.status(result.status).json(result);
      },
    );
  },
);

// Get Item
router.get(
  '/service/:controllerName/:id',
  selectController,
  checkAuth,
  (req: Request, res: Response, next: NextFunction) => {
    const controller: IController = req['controller'];
    const action = from(controller.fetch(req.params.id));
    action.subscribe(
      (result: IResult) => {
        res.status(result.status).json(result);
      },
      (result: IResult) => {
        res.status(result.status).json(result);
      },
    );
  },
);

// Query / Get Collection
router.get(
  '/service/:controllerName',
  selectController,
  checkAuth,
  (req: Request, res: Response, next: NextFunction) => {
    const controller: IController = req['controller'];
    const queryModel = req.query.queryModel || '{}';
    const action = from(controller.fetchAll(JSON.parse(queryModel)));
    action.subscribe(
      (result: IResult) => {
        res.status(result.status).json(result);
      },
      (result: IResult) => {
        res.status(result.status).json(result);
      },
    );
  },
);

// Delete
router.delete(
  '/service/:controllerName/:id',
  selectController,
  checkAuth,
  (req: Request, res: Response, next: NextFunction) => {
    const controller: IController = req['controller'];
    const action = from(controller.delete(req.params.id));
    action.subscribe(
      (result: IResult) => {
        res.status(result.status).json(result);
      },
      (result: IResult) => {
        res.status(result.status).json(result);
      },
    );
  },
);

export default router;
