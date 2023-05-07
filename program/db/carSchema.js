const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const carSchema = new mongoose.Schema({
  brand: {
    type: String,
    /* támogatott típusok: String, Number, Date, Buffer, Boolean, Mixed, ObjectId,
        Array, Decimal128, Map, Schema - az utolsóval valósítható meg az egymásba ágyazás, tehát hogy az egyik dokumentum
        egy másikat tartalmazzon */
    required: true,
    unique : true
  },
  type: {
    type: String,
    required: true,
  },
  colour: {
    type: String,
    required: true,
    default: 1, //adhatunk alapértelmezett értéket is
  },
  fuel: {
    type: String,
    required: true,
  },
});

// Car modell
const Car = mongoose.model('car', carSchema);

module.exports = Car;