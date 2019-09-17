import mongoose from 'mongoose';
import auditable from './auditable.model';

const PostLikeSchema = new mongoose.Schema({
    likedBy: { type: mongoose.Types.ObjectId, ref: 'User' },
    createdDate: { type: Date, default: Date.now },
});

const PostCommentSchema = new mongoose.Schema({
    commentedBy: { type: mongoose.Types.ObjectId, ref: 'User' },
    message: { type: String },
    createdDate: { type: Date, default: Date.now },
});

const PostSchema = new mongoose.Schema({
    // postedBy: { type: mongoose.Types.ObjectId, ref: 'User' },
    message: { type: String, required: true },
    hashtag: { type: String, required: true },
    hashtags: { type: [String], required: true },
    bonus: { type: Number, default: 0 },
    // givePointsTo: { type: mongoose.Types.ObjectId, ref: 'User' },
    receiver: { type: mongoose.Types.ObjectId, ref: 'User' },
    likes: { type: [PostLikeSchema], default: [] },
    comments: { type: [PostCommentSchema], default: [] },
});

PostSchema.add(auditable);

export default mongoose.model('Post', PostSchema);
