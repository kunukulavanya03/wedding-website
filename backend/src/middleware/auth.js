const jwt = require('jsonwebtoken');
const prisma = require('../prismaClient');

const authenticate = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Unauthorized' });
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = await prisma.user.findUnique({ where: { id: decoded.userId } });
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authenticate;