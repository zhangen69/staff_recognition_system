import mongoose from 'mongoose';
import auditable from './auditable.model';

const PrizeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, default: 1 },
});

const schema = new mongoose.Schema({
    prizes: { type: [PrizeSchema], default: [] },
    expiredDate: { type: Date, required: true },
});

schema.add(auditable);

export default mongoose.model('Reward', schema);
