var express = require('express');
const VisitorController = require('../controllers/UserController');
var router = express.Router();

/* GET users listing. */
router.get('/', VisitorController.getVisitor);
router.post('/', VisitorController.insertVisitor)

router.get('/last', VisitorController.getLastVisitor)

module.exports = router;
