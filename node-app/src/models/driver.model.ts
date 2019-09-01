import mongoose, { mongo } from 'mongoose';
import auditable from './auditable.model';

const addressSchema = new mongoose.Schema({
    line1: { type: String },
    line2: { type: String },
    line3: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
});

const licenseSchema = new mongoose.Schema({
    validatityStartDate: { type: Date },
    validatityEndDate: { type: Date },
});

const scannedSchema = new mongoose.Schema({
    icPassportNumber: { type: Boolean, default: false },
    license: { type: Boolean, default: false },
});

const schema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    gender: { type: String },
    icPassportNumber: { type: String },
    nationality: { type: String },
    dob: { type: Date },
    address: { type: addressSchema },
    joiningDate: { type: Date },
    license: { type: licenseSchema },
    scanned: { type: scannedSchema },
    userId: { type: mongoose.Types.ObjectId, ref: 'User' },
});

schema.add(auditable);

export default mongoose.model('Driver', schema);
