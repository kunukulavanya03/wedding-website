const express = require('express');
const router = express.Router();
const prisma = require('../prismaClient');

const getWeddings = async (req, res) => {
  const weddings = await prisma.wedding.findMany();
  res.json(weddings);
};

const getWedding = async (req, res) => {
  const { id } = req.params;
  const wedding = await prisma.wedding.findUnique({ where: { id: Number(id) } });
  if (!wedding) return res.status(404).json({ message: 'Wedding not found' });
  res.json(wedding);
};

const createWedding = async (req, res) => {
  const { name, date, location, rsvpDeadline } = req.body;
  const wedding = await prisma.wedding.create({ data: { name, date, location, rsvpDeadline } });
  res.json(wedding);
};

const updateWedding = async (req, res) => {
  const { id } = req.params;
  const { name, date, location, rsvpDeadline } = req.body;
  const wedding = await prisma.wedding.update({ where: { id: Number(id) }, data: { name, date, location, rsvpDeadline } });
  res.json(wedding);
};

const deleteWedding = async (req, res) => {
  const { id } = req.params;
  await prisma.wedding.delete({ where: { id: Number(id) } });
  res.json({ message: 'Wedding deleted' });
};

router.get('/', getWeddings);
router.get('/:id', getWedding);
router.post('/', createWedding);
router.put('/:id', updateWedding);
router.delete('/:id', deleteWedding);

module.exports = router;