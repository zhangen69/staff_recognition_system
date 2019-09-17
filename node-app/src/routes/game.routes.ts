import express from 'express';
import { checkAuth } from '../middlewares/checkAuth';
import { from } from 'rxjs';
import rewardModel from '../models/reward.model';
import moment from 'moment';

const router = express.Router();

router.get('/game/getRewards', checkAuth, (req, res, next) => {
    from(getAllRewards()).subscribe((reward) => {
        res.status(200).json(reward);
    });
});

const getAllRewards = () => {
    const yearStart = moment().startOf('year').format('YYYY-MM-DD hh:mm');
    const yearEnd = moment().endOf('year').format('YYYY-MM-DD hh:mm');
    const now = new Date();
    return rewardModel.aggregate([
        { $match: { startFrom: { $lte: now }, expiredDate: { $gte: now } } },
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
        // console.log(docs);
        return docs[0];
    });
};

export default router;
