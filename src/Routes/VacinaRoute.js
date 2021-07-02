const VacinaController = require('../Controller/VacinaController');

module.exports = (app) => {
   app.get('/vacina', VacinaController.getById);
}