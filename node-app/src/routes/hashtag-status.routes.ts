import express from 'express';
import { checkAuth } from '../middlewares/checkAuth';
import { from } from 'rxjs';
import postModel from '../models/post.model';

const router = express.Router();

router.get('/hashtag/trending', checkAuth, (req, res, next) => {
    from(getAllHashtagFromPost()).subscribe((hashtags) => {
        res.status(200).json(hashtags);
    });
});

const getAllHashtagFromPost = () => {
    return postModel.aggregate([
        {
            $group: {
                _id: '$hashtag',
                name: { $first: '$hashtag' },
                count: { $sum: 1 },
            },
        },
        { $sort: { count: -1 } },
        {
            $limit: 5,
        },
    ]).then((docs) => {
        return docs;
    });
};

export default router;
