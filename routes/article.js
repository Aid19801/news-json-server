var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


var article_controller = require('../controllers/articles');

router.get('/test', article_controller.test);

router.get('/', article_controller.all_articles);

router.post('/create', article_controller.article_create);

router.get('/:id', article_controller.article_details);

router.put('/:id/update', article_controller.article_update);

router.delete('/:id/delete', article_controller.article_delete);


module.exports = router;