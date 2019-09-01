import express from 'express';
import Controller from '../standards/controller';
import StandardRoutes from '../standards/routes';

const serviceName = 'driver';
const service = new Controller(serviceName);
const routes = new StandardRoutes(serviceName, service);
const router = routes.router(express.Router());

// mockup actions:
// 1. create/update item
router.post(`/demo-${serviceName}`, (req, res) => {
    if (req.body['id']) {
        service.create(req.body, null).then((result: any) => {
            res.status(result.status).json(result);
        }).catch((result) => {
            res.status(result.status).json(result);
        });
    } else {
        service.update(req.body, null).then((result: any) => {
            res.status(result.status).json(result);
        }).catch((result) => {
            res.status(result.status).json(result);
        });
    }
});
// 2. get collection
router.get(`/demo-${serviceName}`, (req, res) => {
    const queryModel = req.query.queryModel || '{}';
    service.fetchAll(JSON.parse(queryModel)).then((result: any) => {
        res.status(result.status).json(result);
    }).catch((result) => {
        res.status(result.status).json(result);
    });
});
// 3. get item by id
router.get(`/demo-${serviceName}/:id`, (req, res) => {
    service.fetch(req.params.id).then((result: any) => {
        res.status(result.status).json(result);
    }).catch((result) => {
        res.status(result.status).json(result);
    });
});
// 4. delete item
router.delete(`/demo-${serviceName}/:id`, (req, res) => {
    service.delete(req.params.id).then((result: any) => {
        res.status(result.status).json(result);
    }).catch((result) => {
        res.status(result.status).json(result);
    });
});

export default router;
