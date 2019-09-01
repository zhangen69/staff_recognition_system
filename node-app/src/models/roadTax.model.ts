import mongoose from 'mongoose';
import auditable from './auditable.model';

const schema = new mongoose.Schema({
    vehicleId: { type: mongoose.Types.ObjectId, ref: 'Vihicle' },
    startDate: { type: Date },
    endDate: { type: Date },
});

schema.add(auditable);

export default mongoose.model('RoadTax', schema);
