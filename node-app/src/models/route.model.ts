import mongoose from 'mongoose';
import auditable from './auditable.model';
import customTypes from '../configs/custom-types.mongoose';

const schema = new mongoose.Schema({
    vehicleId: { type: mongoose.Types.ObjectId, ref: 'Vehicle' },
    routeNumber: { type: customTypes.integer.only },
    description: { type: String },
});

schema.add(auditable);

export default mongoose.model('Route', schema);
