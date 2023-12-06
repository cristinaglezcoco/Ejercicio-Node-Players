const express = require('express');
const router = express.Router();
const Player = require('../models/players.model');
const Liga = require('../models/ligas.model');


router.get('/', async (req, res, next) => {
    try {
        const players = await Player.find().populate("ligaData").exec(); // dar todos los elementos a la costante creada //populate es para rellenar ese campo, se pueden poner varios populate //exec -> ejecuta lo anterior, en este caso el populate
        return res.status(200).json(players)
    }
    catch(err) {
        next(err)
    }
});

router.get('/id/:id', async(req, res, next) => { 
    const id = req.params.id
    try {
      const player = await Player.findById(id); //busca en la coleccion
      if(player) {
        return res.status(200).json(player) //si lo encuentra
      } else {
        let error = new Error('JUgador no encontrada');
        error.status = 404;
        throw error;      
      }
    }
    catch(err) {
      next(err)
      // si no puede hacer lo de dentro del try
    }
});

router.post('/create', async(req, res, next) => {
  try {
    const newPlayer = new Player(req.body);
    const createdPlayer = await newPlayer .save();
    return res.status(201).json(createdPlayer);
  } catch(error) {
      next(error);
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    const putPlayer = new Player(req.body);
    const updatedPlayer = await Player.findByIdAndUpdate(id, putPlayer, {new: true});
    if(!updatedPlayer) {
      return res.status(404).json(error);
    }

    return res.status(200).json(updatedPlayer);
  }
  catch(error) {
    next(error);
  }
})

router.put('/add-Liga/:id', async (req, res, next) => { //Funciona al poner el exec()
  try {
      const playerId = req.body.playerId; 
      const ligasId = req.body.ligasId;
      const updatedPlayer = await Player.findByIdAndUpdate(playerId, {
          $push: { ligaData: ligasId } 
      });
      if (!updatedPlayer) {
          return res.status(404).json({ error: 'Player no encontrado' });
      }
      return res.status(200).json(updatedPlayer);
  } 
  catch (err) {
      return next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    const deletePlayer = new Player(req.body);
    const deletedPlayer = await Player.findByIdAndDelete(id, deletePlayer, {new: true});
    if(!deletedPlayer) {
      return res.status(404).json(error);
    }

    return res.status(200).json(deletedPlayer);
  }
  catch(error) {
    next(error);
  }
})





module.exports = router