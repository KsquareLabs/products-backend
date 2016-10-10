var Product = require("./product.model.js");
var mongoose = require("mongoose");

var interface = {
    getList: function(req,res,next){
        Product.find({})
            .then(function(products){
                res.send(products)
            })
            .catch(function(err){
                console.log(err);
                res.status(400).send(err);
            });
    },
    getOne: function(req,res,next){
      var id = req.params.id;
        Product.findOne({_id:id})
            .then(function(product){
                res.send(product)
            })
            .catch(function(err){
                res.status(400).send(err);
            });
    },
    save: function(req,res,next){
        var id = req.params.id;
        if(!id) {
            id=new mongoose.mongo.ObjectID()
        }
        Product.findOneAndUpdate({_id:id},req.body,{upsert:true,new:true})
            .then(function(products){
                console.log(products)
                res.send(products)
            })
            .catch(function(err){
                console.log(err);
                res.status(400).send(err);
            });
    },
    delete: function(req,res,next){
        var id = req.params.id;
        Product.find({_id:id}).remove()
            .then(function(){
                res.send("product deleted")
            })
            .catch(function(err){
                console.log(err);
                res.status(400).send(err);
            });
    }
};


module.exports = interface;
