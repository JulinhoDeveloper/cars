const express = require("express");
const router = express.Router();
const {getallcars, addcar, editcar, deletecar} = 
require('../controllers/cars');

//get car
router.get('/getcar', getallcars);

//ADD car 
router.post('/addcar',addcar);
  

//atualizando específico user pelo id
router.put('/update/:id', editcar);

//excluindo específico user pelo id
router.delete('/delete/:id',deletecar);

module.exports = router;