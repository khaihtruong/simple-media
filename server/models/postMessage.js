import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        ddefault: 0
    },
    createdAt: {
        type: Date, 
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostMessage')

export default PostMessage;