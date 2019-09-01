import mongoose from 'mongoose';
import User from './user.model';

const schema = new mongoose.Schema({
    audit: {
        createdBy: { type: String, default: null },
        createdDate: { type: Date, default: Date.now },
        updatedBy: { type: String, default: null },
        updatedDate: { type: Date, default: Date.now },
    },
});

export default schema;
