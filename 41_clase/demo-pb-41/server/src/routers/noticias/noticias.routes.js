const { Router } = require('express');
const NoticiasControllers = require('../../controllers/noticias.controller');

const router = Router();

const noticiasController = new NoticiasControllers();

router.get('/', noticiasController.getNoticias);
router.get('/:id', noticiasController.getNoticiaById);
router.post('/', noticiasController.createNoticia);
router.put('/:id', noticiasController.updateNoticia);
router.delete('/:id', noticiasController.deleteNoticia);

module.exports = router;
