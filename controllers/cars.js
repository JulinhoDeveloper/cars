const Car = require('../models/carModel');

exports.getallcars = async (req, res) => {
    try {
      const cars = await Car.find();
      res.send(cars);
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  exports.addcar = async (req, res) => {
    try {
      const newcar = new Car(req.body);
      await newcar.save();
      res.send("Carro adicionado com sucesso");
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  exports.editcar = async (req, res) => {
    try {
      const car = await Car.findByIdAndUpdate( req.params.id);
      car.name = req.body.name;
      car.image = req.body.image;
      car.capacity = req.body.capacity;
      car.fuelType = req.body.fuelType;
      car.rentPerHour = req.body.rentPerHour;
      await car.save();
  
      res.send("Carro atualizado com sucesso");
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  exports.deletecar = async (req, res) => {
    try {
      await Car.findOneAndDelete(req.params.id);
  
      res.send("Carro excluído com sucesso");
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  

