const express = require('express');
const router = express.Router();
const prisma = require('../prismaClient');
const auth = require('../auth');

const register = async (req, res) => {
  await auth.register(req, res);
};

const login = async (req, res) => {
  await auth.login(req, res);
};

router.post('/register', register);
router.post('/login', login);

module.exports = router;