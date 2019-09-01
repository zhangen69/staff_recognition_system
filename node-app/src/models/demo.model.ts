import mongoose from 'mongoose';
import auditable from './auditable.model';

const otherSchema = new mongoose.Schema({});

const schema = new mongoose.Schema({
    // string
    string: { type: String },
    stringWithRequired: { type: String, required: true },
    stringWithDefaultValue: { type: String, default: 'Default Value' },
    // number
    number: { type: Number },
    numberWithRequired: { type: Number, required: true },
    numberWithDefaultValue: { type: Number, default: 0.0 },
    // decimal
    decimal: { type: mongoose.Types.Decimal128 },
    decimalWithDefaultValue: { type: mongoose.Types.Decimal128, default: 0.0 },
    // boolean
    boolean: { type: Boolean },
    booleanWithDefaultValue: { type: Boolean, default: false },
    // date
    date: { type: Date },
    dateWithRequired: { type: Date, required: true },
    dateWithDefaultValue: { type: Date, default: Date.now }, // YYYY-MM-DDTHH:mm:ssZ
    // enum
    enum: { type: String, enum: ['Enum1', 'Enum2'] },
    enumWithDefaultValue: { type: String, enum: ['Enum1', 'Enum2'], default: 'Enum1' },
    // object
    object: { type: Object },
    // object with specific schema
    objectWithSchema: { type: otherSchema },
    // array
    array: { type: mongoose.Types.DocumentArray },
    // array of object
    arrayOfObject: { type: [Object] },
    // array of object with specific schema
    arrayOfObjectWithSchema: { type: [otherSchema] },
    // reference to other schema and store ObjectId
    reference: { type: mongoose.Types.ObjectId, ref: 'SchemaName' },
});

schema.add(auditable);

export default mongoose.model('Demo', schema);
