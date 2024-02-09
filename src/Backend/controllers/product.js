const Product = require('../models/Product');
const fs = require('fs');

exports.createProduct = (req, res, next) => {
  const producObject = JSON.parse(req.body.product);
  delete producObject._id;
  const product = new Product({
    ...producObject,
    imageUrl: req.protocol,
  });
  product.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.modifyProduct = (req, res, next) => {
  const producObject = req.file ?
    {
      ...JSON.parse(req.body.product),
      imageUrl: req.protocol
    } : { ...req.body };
  Product.updateOne({ _id: req.params.id }, { ...producObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteProduct = (req, res, next) => {
  Product.findOne({ _id: req.params.id })
    .then(product => {
      const filename = product.imageUrl.split('/images/')[1];
      fs.unlink(images/filename, () => {
        Product.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
  };
  
  exports.getOneProduct = (req, res, next) => {
    Product.findOne({ _id: req.params.id })
      .then(product => res.status(200).json(product))
      .catch(error => res.status(404).json({ error }));
  };
  
  exports.getAllProducts = (req, res, next) => {
    Product.find()
      .then(products => res.status(200).json(products))
      .catch(error => res.status(400).json({ error }));
  };