import express from 'express';
import { checkAuth } from '../middlewares/checkAuth';
import PointTransaction from '../models/pointTransaction.model';
import moment from 'moment';
import { from, forkJoin } from 'rxjs';

const router = express.Router();

router.get('/bonus/profile', checkAuth, (req, res, next) => {
  const auth = req['auth'];
  let balancePoints = 0;
  //   let totalPoints = 0;
  let totalSentPoints = 0;
  let totalReceivedPoints = 0;

  PointTransaction.find({
    $or: [{ receiver: auth.user._id }, { sender: auth.user._id }],
  }).then((docs) => {
    docs.forEach((doc) => {
      const docDate = moment(doc['audit']['createdDate']);
      const isSameMonth = docDate.isSame(new Date(), 'month');
      if (doc['sender'].toString() === auth.user._id) {
        totalSentPoints += doc['points'];
        if (isSameMonth) {
          balancePoints -= doc['points'];
        }
      } else if (doc['receiver'].toString() === auth.user._id) {
        totalReceivedPoints += doc['points'];
        if (isSameMonth) {
          balancePoints += doc['points'];
        }
      }
    });
    res.status(200).json({
      balancePoints,
      totalSentPoints,
      totalReceivedPoints,
    });
  });
});

router.get('/bonus/leaderboard', checkAuth, (req, res, next) => {
  const $groupBySender = from(groupByProp('sender'));
  const $groupByReceiver = from(groupByProp('receiver'));

  forkJoin([$groupBySender, $groupByReceiver]).subscribe((results) => {
    res.status(200).json({
      topBonusSenders: results[0],
      topBonusReceivers: results[1],
    });
  });
});

const groupByProp = (prop) => {
  return PointTransaction.aggregate([
    {
      $group: {
        _id: '$' + prop,
        receiver: { $first: '$' + prop },
        sender: { $first: '$' + prop },
        count: { $sum: 1 },
      },
    },
    {
      $lookup: {
        from: 'users',
        localField: prop,
        foreignField: '_id',
        as: prop,
      },
    },
    { $unwind: { path: '$' + prop } },
    {
      $project: {
        receiver: {
          displayName: true,
        },
        sender: {
          displayName: true,
        },
        count: true,
      },
    },
  ])
    .sort({ count: -1 })
    .limit(5)
    .then((docs) => {
      if (prop === 'sender') {
        console.log(docs);
      }
      return docs;
    });
};

export default router;
