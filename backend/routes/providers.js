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
/* POST Add  */
router.post('/add', providersController.add);
// router.get('/about', mainController.about);
// router.get('/contact', mainController.contact);
// router.get('/login', mainController.login);
// router.get('/register', mainController.register);
// router.get('/forgot-password', mainController.forgotpassword);

module.exports = router;
