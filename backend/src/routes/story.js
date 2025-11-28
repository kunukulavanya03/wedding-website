const express = require('express');
const router = express.Router();
const prisma = require('../prismaClient');

const createStory = async (req, res) => {
  const { weddingId } = req.params;
  const { title, content } = req.body;
  const story = await prisma.story.create({ data: { title, content, weddingId: Number(weddingId) } });
  res.json(story);
};

router.post('/:weddingId', createStory);

module.exports = router;