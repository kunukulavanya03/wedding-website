const express = require('express');
const router = express.Router();
const prisma = require('../prismaClient');
const multer = require('multer');
const upload = multer({ dest: './uploads/' });

const createPhoto = async (req, res) => {
  const { weddingId } = req.params;
  const { file } = req;
  const photo = await prisma.photo.create({ data: { url: file.path, weddingId: Number(weddingId) } });
  res.json(photo);
};

router.post('/:weddingId', upload.single('photo'), createPhoto);

module.exports = router;