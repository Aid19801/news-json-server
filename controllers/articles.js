var Article = require('../models/article');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.all_articles = (req, res) => {
    Article.find({}, (err, articles) => {
        res.json(articles);
    })
}

exports.article_create = function (req, res) {
    var article = new Article(
        {
            headline: req.body.headline,
            blurb: req.body.blurb,
            link: req.body.link,
            img: req.body.img,
            src: req.body.src,
        }
    );

    article.save(function (err) {
        if (err) {
            return console.log(err);
        }
        res.send('Article Created successfully')
    })
};

exports.article_details = function (req, res) {
    Article.findById(req.params.id, function (err, article) {
        if (err) console.log(err);
        res.send(article);
    })
};

exports.article_update = function (req, res) {
    console.log('Article updating...', req.body);
    Article.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, article) {
        if (err) console.log(err);
        res.send('Article udpated.');
    });
};

exports.article_delete = function (req, res) {
    Article.findByIdAndRemove(req.params.id, function (err) {
        if (err) console.log(err);
        res.send('Article deleted successfully!');
    })
};