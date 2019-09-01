import mongoose from 'mongoose';
import auditable from './auditable.model';

const schema = new mongoose.Schema({
    vehicleId: { type: String },
    type: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    scannedDocument: { type: Boolean, default: false },
});

schema.add(auditable);

export default mongoose.model('Insurance', schema);
