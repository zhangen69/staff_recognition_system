import mongoose from 'mongoose';
import auditable from './auditable.model';

const PointTransactionSchema = new mongoose.Schema({
    transferFrom: { type: mongoose.Types.ObjectId, ref: 'User' },
    transferTo: { type: mongoose.Types.ObjectId, ref: 'User' },
    points: { type: Number, default: 0 },
    type: { type: String, enum: ['Transfer', 'Reward', 'Award'], required: true },
    source: { type: String, enum: ['Post', 'GameReward', 'ManualAward', 'BotAward', 'ClaimableAward'], required: true },
    sourceId: { type: mongoose.Types.ObjectId },
});

PointTransactionSchema.add(auditable);

export default mongoose.model('PointTransaction', PointTransactionSchema);
