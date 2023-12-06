const express = require('express');
const router = express.Router();
const Liga = require('../models/ligas.model');


router.get('/', async (req, res, next) => {
    try {
        const ligas = await Liga.find(); // dar todos los elementos a la costante creada
        return res.status(200).json(ligas)
    }
    catch(err) {
        next(err)
    }
});



module.exports = router