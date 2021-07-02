exports.post = (req, res, next) => {
    res.status(201).send('Rota POST!');
 };
  
 exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Rota PUT com ID! --> ${id}`);
 };
  
 exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota DELETE com ID! --> ${id}`);
 };
  
 exports.get = (req, res, next) => {
    res.status(200).send('Rota GET!');
 };
  
 exports.getById = (req, res, next) => {
    let id = req.query.id;
    let dateVaccine = new Date(req.query.dateVaccine);

    const collection = new Map();

    collection.set("4120Z001", new Date(2020, 03, 29));
    collection.set("4120Z004", new Date(2020, 04, 13));
    collection.set("4120Z005", new Date(2020, 04, 14));
    collection.set("CTMAV501", new Date(2020, 04, 30));
    collection.set("CTMAV505", new Date(2020, 05, 31));
    collection.set("CTMAV506", new Date(2020, 05, 31));
    collection.set("CTMAV520", new Date(2020, 05, 31));
    collection.set("4120Z025", new Date(2020, 06, 04));
    
    
    let dataVencimentoLote = collection.get(id);
    if(typeof dataVencimentoLote === "undefined") {
      res.json({"errorMessage":"Lote não pertence a lista divulgada"}).status(417);   
    } else {
      let isVencida = +dataVencimentoLote <= +dateVaccine;
      res.json({"resultado":!isVencida}).status(200);  
    }
 };