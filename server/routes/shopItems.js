var express = require('express');
var router = express.Router();

var db = require('../config/shopItemsConfig');


router.get('/', db.getAll);
router.get('/:id', db.getItem);
router.post('/', db.createItem);
router.put('/', db.updateItem);
router.delete('/', db.removeItem);

module.exports = router;