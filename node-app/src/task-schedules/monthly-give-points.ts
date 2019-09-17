import schedule from 'node-schedule';
import pointTransactionModel from '../models/pointTransaction.model';
import userModel from '../models/user.model';
import moment from 'moment';

const givePoint = () => {
    console.log('Give Point Job is running');
    userModel.find().then((docs) => {
        // console.log(docs);
        docs.forEach((doc) => {
            const monthStart = moment().startOf('month').format('YYYY-MM-DD hh:mm');
            const monthEnd = moment().endOf('month').format('YYYY-MM-DD hh:mm');
            pointTransactionModel.find({
                'username': { $ne: 'system' },
                'type': 'Reward',
                'source': 'BotReward',
                'audit.createdDate': { $gte: monthStart, $lt: monthEnd },
            }).then((docs) => {
                // console.log(docs);
                if (docs.length === 0) {
                    const data = new pointTransactionModel({
                        receiver: doc._id,
                        points: 50,
                        type: 'Reward',
                        source: 'BotReward',
                    });
                    data.save();
                    console.log('point transaction is saved');
                }
            });
        });
    });
};

const monthlyGivePointJob = schedule.scheduleJob('0 0 1 * *', givePoint);
// const checkMonthlyPointsIsGiven = schedule.scheduleJob('* * * * *', givePoint);

const demoJob = schedule.scheduleJob('* * * * *', () => {
    console.log('Node Schedule is runnning in every minutes');
});

export default { demoJob, monthlyGivePointJob };
