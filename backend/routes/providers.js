var express = require('express');
var router = express.Router();
const providersController= require('../controllers/providers');

/* GET list page. */
router.get('/', providersController.list);
/* GET Details Page */
router.get('/details/:id', providersController.details);
/* GET Edit Page */
router.get('/edit/:id', providersController.edit);
/* POST update Page */
router.post('/update/:id', providersController.update);
/* GET Add Page */
router.get('/add-provider/', providersController.addform);
/* POST Add Page */
router.post('/add', providersController.add);
/* GET Delete Page */
router.get('/delete/:id', providersController.delete);

module.exports = router;
