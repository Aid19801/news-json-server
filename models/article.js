var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    headline: {type: String, required: true, max: 100},
    blurb: {type: String, required: true, max: 100},
    link: {type: String, required: true, max: 100},
    img: {type: String, required: true, max: 100},
    src: {type: String, required: true, max: 300}
});


// Export the model
module.exports = mongoose.model('Article', ArticleSchema);
