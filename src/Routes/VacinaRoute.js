const VacinaController = require('../Controller/VacinaController');

module.exports = (app) => {
   app.get('/vacina', VacinaController.getById);

   app.get('/',function(req,res) {
      res.sendFile('../index.html');
    });
}