import mongoose from 'mongoose';
import auditable from './auditable.model';

const schema = new mongoose.Schema({
    tripId: { type: mongoose.Types.ObjectId, ref: 'Trip' },
    latitude: { type: Number },
    longitude: { type: Number },
    date: { type: Date, default: Date.now },
});

schema.add(auditable);

export default mongoose.model('GPSLog', schema);
