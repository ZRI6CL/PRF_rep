const mongoose = require('mongoose');
// #2 mivel már regisztráltuk, a sémánkat le tudjuk kérni a mongoose-on keresztül is a megfelelő kollekcióra történő hivatkozással
const User = mongoose.model('user');

async function ensureAdminExists() {
  try {
    // Ellenőrizzük, van-e már admin felhasználó az adatbázisban
    const admin = await User.findOne({ accessLevel: 3 }); //a findOne-nal jelezzük, hogy pontosan egy darab usert keresünk
    if (admin) { //ha kaptunk vissza objektumot, akkor ez a feltétel igazra teljesül, ha üres/undefine, akkor hamisra
      console.log('Az admin felhasználó már megtalálható az adatbázisban!');
    } else {
      // Ha nincs, akkor létrehozunk egy újat
      const newAdmin = new User({
        username: 'admin',
        password: 'admin123',
        accessLevel: 3,
        birthdate: new Date(),
      });
      await newAdmin.save();
      console.log('Az admin felhasználó sikeresen létrehozva!');
    }
    const user = await User.findOne({ accessLevel: 1 }); //a findOne-nal jelezzük, hogy pontosan egy darab usert keresünk
    if (user) { //ha kaptunk vissza objektumot, akkor ez a feltétel igazra teljesül, ha üres/undefine, akkor hamisra
      console.log('Az user felhasználó már megtalálható az adatbázisban!');
    } else {
      // Ha nincs, akkor létrehozunk egy újat
      const newUser = new User({
        username: 'user',
        password: 'user123',
        accessLevel: 1,
        birthdate: new Date(),
      });
      await newUser.save();
      const newUser1 = new User({
        username: 'user2',
        password: 'user2',
        accessLevel: 1,
        birthdate: new Date(),
      });
      await newUser1.save();
      console.log('Az user felhasználó sikeresen létrehozva!');
    }
  } catch (error) {
    console.error('Hiba történt az user ellenőrzése vagy létrehozása során: ', error);
  }
}

module.exports = ensureAdminExists;