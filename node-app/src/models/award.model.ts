import mongoose from 'mongoose';
import auditable from './auditable.model';

const schema = new mongoose.Schema({
    role: { type: String, required: true },
    bonus: { type: Number, required: true },
    receiver: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
});

schema.add(auditable);

export default mongoose.model('Award', schema);
