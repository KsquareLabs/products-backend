'use strict';

var Product = require('./product.model');

Product.find({}).remove()
    .then(function() {
        Product.create({
                "category": "Fruit",
                "name": "Apples",
                "price": 1.2
            }, {
                "category": "Fruit",
                "name": "Bananas",
                "price": 2.42
            }, {
                "category": "Fruit",
                "name": "Pears",
                "price": 2.02
            }, {
                "category": "Fish",
                "name": "Tuna",
                "price": 20.45
            }, {
                "category": "Fish",
                "name": "Salmon",
                "price": 17.93
            }, {
                "category": "Fish",
                "name": "Trout",
                "price": 12.93
            })
            .then(function() {
                console.log('finished populating products');
            });
    });
