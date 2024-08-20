var express = require('express');
var router = express.Router();
const mainController = require('../controllers/main.controller');

// POST, GET, PUT, DELETE

// POST  /api/providers
router.post('/providers', mainController.create);

// Get All /api/providers
router.get('/providers', mainController.readAll);
// Get one /api/providers/{id}
router.get('/providers/:id', mainController.readOne);

// Put /api/providers
router.put('/providers/:id', mainController.update);

// Delete one /api/providers 
router.delete('/providers/:id', mainController.deleteOne);

// Delete /api/providers 
router.delete('/providers/', mainController.deleteAll);

module.exports = router;