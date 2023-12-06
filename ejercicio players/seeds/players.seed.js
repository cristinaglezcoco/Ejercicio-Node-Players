const mongoose = require('mongoose')
const Player = require('../models/players.model')
require('dotenv').config()


const players = [
  {
    nombre: "Lionel Messi",
    edad: 34,
    nacionalidad: "Argentina",
    posicion: "Delantero",
    retirado: false,
    liga: "LaLiga",
    posicion: "Delantero",
  },
  {
    nombre: "Cristiano Ronaldo",
    edad: 36,
    nacionalidad: "Portugal",
    posicion: "Delantero",
    retirado: false,
    liga: "LaLiga",
    posicion: "Delantero",
  },
  {
    nombre: "Zinedine Zidane",
    edad: 48,
    nacionalidad: "Francia",
    posicion: "Mediocampista",
    retirado: true,
    liga: "Serie A",
    posicion: "Centrocampista",
  },
  {
    nombre: "Ronaldinho",
    edad: 40,
    nacionalidad: "Brasil",
    posicion: "Mediocampista",
    retirado: true,
    liga: "LaLiga",
    posicion: "Centrocampista",
  },
  {
    nombre: "David Beckham",
    edad: 45,
    nacionalidad: "Inglaterra",
    posicion: "Mediocampista",
    retirado: true,
    liga: "Premier League",
    posicion: "Centrocampista",
  },
  {
    nombre: "Paolo Maldini",
    edad: 52,
    nacionalidad: "Italia",
    posicion: "Defensor",
    retirado: true,
    liga: "Serie A",
    posicion: "Defensa",
  },
  {
    nombre: "Andrés Iniesta",
    edad: 36,
    nacionalidad: "España",
    posicion: "Mediocampista",
    retirado: false,
    liga: "LaLiga",
    posicion: "Centrocampista",
  },
  {
    nombre: "Thierry Henry",
    edad: 43,
    nacionalidad: "Francia",
    posicion: "Delantero",
    retirado: true,
    liga: "Premier League",
    posicion: "Delantero",
  },
  {
    nombre: "Steven Gerrard",
    edad: 40,
    nacionalidad: "Inglaterra",
    posicion: "Mediocampista",
    retirado: true,
    liga: "Premier League",
    posicion: "Centrocampista",
  },
  {
    nombre: "Francesco Totti",
    edad: 44,
    nacionalidad: "Italia",
    posicion: "Delantero",
    retirado: true,
    liga: "Serie A",
    posicion: "Delantero",
  },
  {
    nombre: "Xavi Hernández",
    edad: 41,
    nacionalidad: "España",
    posicion: "Mediocampista",
    retirado: false,
    liga: "LaLiga",
    posicion: "Centrocampista",
  },
];

const playersDocuments = players.map(player => new Player(player))

mongoose.connect(process.env.MONGODB_URL,{
  // useNewUrlParser: true,
  // useUnifiedTopology: true
  })
  .then(async () => {
  console.log('Conectado a MongoDB Atlas');
  const allPlayers = await Player.find()
  if(allPlayers.length) {
      await Player.collection.drop();
  }
  })
  .catch(err => console.log('Error al borrar los personajes', err))
  .then(async () => {
      await Player.insertMany(playersDocuments);
  })
  .catch((err) => console.log(`Error creating data ${err}`))
  .finally(() => 
      mongoose
          .disconnect()
          .then(() => console.log('Desconectado con éxtito'))
  );

