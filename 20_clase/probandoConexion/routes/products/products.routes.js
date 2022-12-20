const { Router } = require("express");
const productsController = require("../../controllers/products.controller");

const router = Router();

router.get('/', productsController.getUsers);
router.get('/:id', productsController.getUserById);
router.post('/', productsController.saveUser);
router.put('/:id', productsController.updateUser);
router.delete('/:id', productsController.deleteUser);
router.post('/populate', productsController.populate);

module.exports = router;