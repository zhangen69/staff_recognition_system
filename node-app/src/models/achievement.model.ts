import mongoose from 'mongoose';
import auditable from './auditable.model';

const schema = new mongoose.Schema({});

schema.add(auditable);

export default mongoose.model('Achievement', schema);
