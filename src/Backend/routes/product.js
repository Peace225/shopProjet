const express = require('express');
const router = express.Router();

const productCrtl = require('../controllers/product');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, productCrtl.createProduct);
router.put('/:id', auth, multer, productCrtl.modifyProduct);
router.delete('/:id', auth, productCrtl.deleteProduct);
router.get('/:id', auth, productCrtl.getOneProduct);
router.get('/', auth, productCrtl.getAllProducts);

module.exports = router;