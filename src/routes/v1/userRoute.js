const express = require('express');
const controller = require('controllers/v1/userController');

const router = express.Router();

router.get('/', controller.getUsers);
router.post('/', controller.createUser);
router.put('/', controller.updateUser);
router.delete('/:id', controller.deleteUser);
router.get('/:id', controller.getUserById);

module.exports = router;
