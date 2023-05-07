const express = require('express')
//létrehozunk egy példányt a Router objektumból, melyre felkonfigurálhatjuk a különböző HTTP műveletekkel elérhető route-okat
const router = express.Router();
const mongoose = require('mongoose');
const Car = mongoose.model('car');


// #2 a cars fájl tartalmát kicsit átírtam

// Middleware a felhasználók lekérdezése előtt az id alapján - nem minden route-ra kell meghívnunk
// NodeJS-ben async jelöli az aszinkron műveleteket, amelyeknek a lefutási ideje nem determinisztikus, és
// az await várakozási parancsot akarjuk bennük használni
async function getCar(req, res, next) {
  try {
    car = await Car.findOne({brand: req.params.id});
    if (car == null) {
      return res.status(404).json({ message: 'Az autó nem található' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.car = car; // ettől kezdve a response-ban benne van a db-ből lekért car objektum
  next();
}

// GET /cars - összes autó lekérdezése
router.get('/', async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /cars/:id - egy felhasználó lekérdezése az id alapján
router.get('/:id', getCar, (req, res) => { //ez is egy middleware használati módszer, 
  // a getCar middleware ilyenkor le fog futni a kérés feldolgozása előtt 
  res.json(res.car); //egyszerűsített válaszküldés, a megadott objektumot json-re konvertálva küldjük el
});

// POST /cars - új felhasználó létrehozása
router.post('/', async (req, res) => {
  const car = new Car({
    brand: req.body.brand,
    type: req.body.type,
    colour: req.body.colour,
    fuel: req.body.fuel,
  });

  try {
    const newCar = await car.save();
    res.status(201).json(newCar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PATCH /cars/:id - egy felhasználó frissítése az id alapján
router.patch('/:id', getCar, async (req, res) => {
  if (req.body.brand != null) {
    res.car.brand = req.body.brand;
  }
  if (req.body.carType != null) {
    res.car.type = req.body.type;
  }
  if (req.body.colour != null) {
    res.car.colour = req.body.colour;
  }
  if (req.body.fuel != null) {
    res.car.fuel = req.body.fuel;
  }

  try {
    const updateCar = await res.car.save();
    res.json(updateCar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE /cars/:id - egy felhasználó törlése az id alapján
router.delete('/:id', getCar, async (req, res) => {
  try {
    await res.car.remove();
    res.json({ message: 'Az autó sikeresen törölve!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* Ha egy fájl require-el behivatkozza ezt a fájlt, akkor a hivatkozás helyére a module.exports-ban megadott objektum, funkció 
vagy változó fog bekerülni */
module.exports = router