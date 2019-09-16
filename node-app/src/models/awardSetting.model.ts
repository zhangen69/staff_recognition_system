import mongoose from 'mongoose';
import auditable from './auditable.model';

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    isBot: { type: Boolean, default: false },
    frequencyType: { type: String, enum: ['Dayly', 'Weekly', 'Monthly', 'Yearly'] },
    startFrom: { type: Date, default: Date.now },
    trigger: { type: String, enum: ['OnCreated', 'OnUpdated', 'OnFetched', 'Auto'], default: 'Auto' },
    triggerFor: { type: String, default: null }, // domain name
});

schema.add(auditable);

export default mongoose.model('AwardSetting', schema);
