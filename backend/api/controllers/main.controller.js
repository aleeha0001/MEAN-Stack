var providers = require('../models/providers.models');
var Provider = require('../db/db');
const { ObjectId } = require('mongodb');

// Util Functions
// Cehck if list is empty
function isEmptyList(obj) {
    return (!obj || obj.length == 0 || Object.keys(obj).length == 0);
}
// Handle Errors
function handleError(res, error) {
    res.status(200);
    res.send('Soemthing went wrong.\n' + error);
}

// CRUD - Create(Post), Read(Get), Update(Put), Delete

// POST
// uri: /api/providers
module.exports.create = function (req, res) {
    try {

        var provider = req.body; //get new provider
        Provider.create(provider)
            .then(result => {
                res.status(201);
                res.send(result);
            })
            .catch(error => handleError(res, error));
        //provider.id = id;

        // Add new provider to list
        //providers.push(provider);

    } catch (error) {
        handleError(res, error)
    }
};



// GET All
// uri: /api/providers
module.exports.readAll = function (req, res) {
    try {
        Provider.find()
            .then(result => {
                if (isEmptyList(result)) {
                    res.status(404);
                    res.send('List is empty.');
                }
                res.status(200);
                res.send(result);
            })
            .catch(error => handleError(res, error));
    }
    catch (error) {
        handleError(res, error)
    };

};
// GET One
// uri: /api/providers/:id
module.exports.readOne = function (req, res) {
    try {
        let id = new ObjectId(req.params.id);
        Provider.find({ '_id': id })
            .then(result => {
                if (isEmptyList(result)) {
                    res.status(404);
                    res.send('List is empty.');
                }
                res.status(200);
                res.send(result);
            })
            .catch(error => handleError(res, error));

    }
    catch (error) {
        handleError(res, error)
    };

};
// PUT
// uri: /api/providers/:id
module.exports.update = function (req, res) {
    try {
        let id = new ObjectId(req.params.id);
        let provider = req.body;
        Provider.findOneAndUpdate({ '_id': id }, provider, { new: true })
            .then(result => {
                if (isEmptyList(result)) {
                    res.status(404);
                    res.send('List is empty. Cannot update.');
                }
                res.status(200);
                res.send(result);

            })
            .catch(error => handleError(res, error));

    }
    catch (error) {
        handleError(res, error)
    };

};
// DELETE ONE
// uri: /api/providers/:id
module.exports.deleteOne = function (req, res) {
    if (isEmptyList(providers)) {
        res.status(404);
        res.send('List is empty. Cannot delete');
    }
    let id = req.params.id;
    let provider = providers.find(provider => provider.id == id);
    let idx = providers.indexOf(provider);
    // Remove the element at the index of 'idx'
    providers.splice(idx, 1);
    res.status(200);        //res.status(404); //not found as in not there
    res.send(provider);
};
// DELETE ALL
// uri: /api/providers
module.exports.deleteAll = function (req, res) {
    if (isEmptyList(providers)) {
        res.status(404);
        res.send('List is empty. Cannot delete.');
    }
    provider = [];
    res.status(200);
    res.send("All providers deleted!");

};