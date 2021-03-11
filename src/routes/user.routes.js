const router = require('express').Router();
const UserController = require('../controllers/user.controller');


router.post(
    '/signup',
    [],
    UserController.signUp
);

router.get(
    '/confirm/:token',
    [],
    UserController.confirm
);

module.exports = router;