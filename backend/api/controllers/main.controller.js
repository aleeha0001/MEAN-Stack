var providers = require('../models/providers.models');

// CRUD - Create(Post), Read(Get), Update(Put), Delete

// POST
// uri: /api/providers
module.exports.create = function (req, res) {
    //  Create random id
    let min = 100000;
    let max = 999999;
    let id = Math.floor(Math.random() * (max - min) + min);

    // Create new provider object
    let provider = {
        id: id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        position: req.body.position,
        company: {
            company_name: req.body.company.company_name,
            address: req.body.company.address,
            address2: req.body.company.address2,
            city: req.body.company.city,
            state: req.body.company.state,
            postal_code: req.body.company.postal_code,
            phone: req.body.company.phone,
            email: req.body.company.email,
            description: req.body.company.description,
            tagline: req.body.company.tagline
        }
    }
    // Add new provider to list
    providers.push(provider);
    res.status(200);
    res.send(provider);
};
// GET All
// uri: /api/providers
module.exports.readAll = function (req, res) {
    res.status(200);
    res.send(providers);
};
// GET One
// uri: /api/providers/:id
module.exports.readOne = function (req, res) {
    let id = req.params.id;
    let provider = providers.find(provider => provider.id == id);
    res.status(200);
    res.send(provider);
};
// PUT
// uri: /api/providers/:id
module.exports.update = function (req, res) {
    let id = req.params.id;
    let provider = providers.find(provider => provider.id == id);
    provider.firstname = req.body.firstname;
    provider.lastname = req.body.lastname;
    provider.position = req.body.position;
    provider.company.company_name = req.body.company.company_name;
    provider.company.address = req.body.company.address;
    provider.company.address2 = req.body.company.address2;
    provider.company.city = req.body.company.city;
    provider.company.state = req.body.company.state;
    provider.company.postal_code = req.body.company.postal_code;
    provider.company.phone = req.body.company.phone;
    provider.company.email = req.body.company.email;
    provider.company.description = req.body.company.description;
    provider.company.tagline = req.body.company.tagline;

    res.status(200);
    res.send(provider);

};
// DELETE ONE
// uri: /api/providers/:id
module.exports.deleteOne = function (req, res) {
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
    provider = [];
    res.status(200);
    res.send("All providers deleted!");

};