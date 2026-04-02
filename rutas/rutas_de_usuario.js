const express = require('express');
const router = express.Router();
const userController = require('../controladores/controlador_usuarios.js');

router.get('/', userController.getUsers);
router.post('/', userController.createUser);

module.exports = router;