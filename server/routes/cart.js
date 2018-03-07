var express = require('express');
var router = express.Router();

var db = require('../config/cartConfig');

router.get('/', db.getAll);
router.get('/:id', db.getItem);
router.post('/', db.createItem);
router.put('/', db.updateItem);
router.delete('/:id', db.removeItem);

module.exports = router;