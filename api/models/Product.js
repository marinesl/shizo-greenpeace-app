import mongoose, { MongooseDocument } from 'mongoose';

const ProductSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    product_name: {
        type: String,
        required: true
    },
    brands: {
        type: String,
        required: true
    },
    categories_fr: {
        type: String
    },
    origins: {
        type: String
    },
    manufacturing_places: {
        type: String
    },
    labels_fr: {
        type: String
    },
    ingredients_text: {
        type: String
    },
    traces: {
        type: String
    },
    nutrition_grade_fr: {
        type: String
    },
    image_url: {
        type: String
    },
    image_small_url: {
        type: String
    }
})


// url : url of the product page on Open Food Facts
// generic_name
// quantity : quantity and unit
// packaging : shape, material
// emb_codes
// emb_codes_tags
// cities
// purchase_places
// stores
// countries_fr : list of countries where the product is sold
// serving_size : serving size in g
// no_nutriments : indicates if the nutrition facts are indicated on the food label
// additives_n : number of food additives
// additives
// main_category_fr

const Product = mongoose.model('Product', ProductSchema);

export default { ProductSchema, Product }