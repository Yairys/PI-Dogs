const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsRoute = require('./dogs')
const temperamentsRoute = require('./temperaments')
const createRoute = require('./create')



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs', dogsRoute);
router.use('/create', createRoute);
router.use('/temperaments', temperamentsRoute)




module.exports = router;
