const { Router } = require('express');
const noticiasRoutes = require('./noticias/noticias.routes');

const router = Router();

// Routes
router.use('/noticias', noticiasRoutes);

module.exports = router;
