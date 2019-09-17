import mongoose from 'mongoose';
import auditable from './auditable.model';

const schema = new mongoose.Schema({
    winner: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    redeemed: { type: Boolean, default: false },
    redeemedDate: { type: Date, default: null },
    rewardId: { type: mongoose.Types.ObjectId, required: true },
    rewardName: { type: String, required: true },
});

schema.add(auditable);

export default mongoose.model('RewardTransaction', schema);
