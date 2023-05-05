const { register } = require("../controller/authController");

const router = require("express").Router();

router.post("/register", register);
// router.post('/login',login);
// router.get('/allusers/:id', getAllUsers);
// router.post('setavatar/:id', setAvatar);
// router.get('/logout/:id',logOut);

module.exports = router;
