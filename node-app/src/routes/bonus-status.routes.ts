import express from 'express';
import { checkAuth } from '../middlewares/checkAuth';
import PointTransaction from '../models/pointTransaction.model';
import moment from 'moment';

const router = express.Router();

router.get('/bonus/profile', checkAuth, (req, res, next) => {
  const auth = req['auth'];
  let balancePoints = 0;
//   let totalPoints = 0;
  let totalSentPoints = 0;
  let totalReceivedPoints = 0;

  PointTransaction.find({
    $or: [
        { receiver: auth.user._id },
        { sender: auth.user._id },
    ],
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

export default router;
