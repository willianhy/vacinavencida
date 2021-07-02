const VacinaController = require('../Controller/VacinaController');

module.exports = (app) => {
   app.get('/vacina/:id&:dateVaccine', VacinaController.getById);
}