import mongoose from 'mongoose';
import auditable from './auditable.model';
import customTypes from '../configs/custom-types.mongoose';

const schema = new mongoose.Schema({
    driverId: { type: mongoose.Types.ObjectId, ref: 'Driver' },
    plateNumber: { type: String },
    type: { type: String },
    manufacturedYear: customTypes.integer.digit(4),
    startServiceDate: { type: Date },
    beginningMileage: { type: customTypes.integer.only },
    vihicleNumber: { type: String },
});

schema.add(auditable);

export default mongoose.model('Vehicle', schema);
