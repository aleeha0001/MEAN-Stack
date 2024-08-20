var express = require('express');
var router = express.Router();
const mainController = require('../controllers/main.controller');

// POST, GET, PUT, DELETE

// POST  /api/providers
router.post('/providers', mainController.create);

// Get /api/providers
router.post('/providers', mainController.readAll);
// Get one /api/providers/{id}
router.post('/providers/:id', mainController.readOne);

// Put /api/providers
router.post('/providers', mainController.update);

// Delete one /api/providers 
router.post('/providers/:id', mainController.deleteOne);

// Delete /api/providers 
router.post('/providers/', mainController.deleteAll);

module.exports = router;