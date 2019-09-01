import mongoose from 'mongoose';
import auditable from './auditable.model';

const suspendSchema = new mongoose.Schema({
    startDate: { type: Date },
    endDate: { type: Date },
    remark: { type: String },
});

const terminateSchema = new mongoose.Schema({
    date: { type: Date },
    remark: { type: String },
});

const schema = new mongoose.Schema({
    routeId: { type: mongoose.Types.ObjectId, ref: 'Route' },
    startDate: { type: Date },
    endDate: { type: Date },
    suspend: { type: suspendSchema },
    terminate: { type: terminateSchema },
});

schema.add(auditable);

export default mongoose.model('Trip', schema);
