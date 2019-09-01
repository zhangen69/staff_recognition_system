import mongoose from 'mongoose';
import auditable from './auditable.model';

const schema = new mongoose.Schema({
    routeId: { type: mongoose.Types.ObjectId, ref: 'Route' },
    address: { type: String },
    latitude: { type: Number },
    longitude: { type: Number },
});

schema.add(auditable);

export default mongoose.model('Point', schema);
