import express from 'express';
import { checkAuth } from '../middlewares/checkAuth';
import { from } from 'rxjs';
import rewardModel from '../models/reward.model';

const router = express.Router();

router.get('/game/getRewards', checkAuth, (req, res, next) => {
    from(getAllRewards()).subscribe((reward) => {
        res.status(200).json(reward);
    });
});

const getAllRewards = () => {
    return rewardModel.aggregate([
        { $sort: { 'audit.createdDate': -1 } },
        { $limit: 1 },
        {
            $project: {
                prizes: {
                    _id: true,
                    name: true,
                },
            },
        },
    ]).then((docs) => {
        return docs[0];
    });
};

export default router;
