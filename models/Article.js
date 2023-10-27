const {Schema, mongoose, model} = require('mongoose')


const ArticlesShema = Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String, 
        require: true
    }, 
    date: {
        type: Date,
        default: Date.now
    },
    image: {
        type: String,
        default: "default.png"
    }
})

module.export = model("Article", ArticleSchema)
