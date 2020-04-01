const express = require('express');
const routes = express.Router();

//Importação dos Controllers
const OngController = require('../src/controller/OngController');
const IncidentsController = require('../src/controller/IncidentsController');
const ProfileController = require('../src/controller/ProfileController');
const SessionController =  require('../src/controller/SessionController');

//Requisição das Rotas

routes.post('/sessions' ,SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;