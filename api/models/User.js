import mongoose, { MongooseDocument } from 'mongoose';
import * as moment from 'moment';

const UserSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    creation_date: {
        type: Date,
        default: moment()
    },
    meat_consumption: {
        type: Number,
        default: 0
    },
    saved_recipes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe'
    }],
    // impact: {}
})

const User = mongoose.model('User', UserSchema);

export default { UserSchema, User }