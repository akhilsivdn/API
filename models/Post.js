const mongoose = require('mongoose');

// const PostSchema = mongoose.Schema({
//     title: String,
//     description: String,
//     date: Date.now
// })

//can specify defaults and required flags
const PostSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now },
    postImage: { type: String, required: true }
});

//Usage
module.exports = mongoose.model('Posts', PostSchema);


