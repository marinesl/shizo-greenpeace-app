import mongoose, { MongooseDocument } from 'mongoose';

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    // steps: {}
})

const Recipe = mongoose.model('Recipe', RecipeSchema);

export default { RecipeSchema, Recipe }