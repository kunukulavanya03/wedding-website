const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const prisma = require('./prismaClient');
const auth = require('./auth');
const weddingRouter = require('./routes/wedding');
const userRouter = require('./routes/user');
const photoRouter = require('./routes/photo');
const storyRouter = require('./routes/story');

app.use(express.json());
app.use('/api/weddings', weddingRouter);
app.use('/api/users', userRouter);
app.use('/api/photos', photoRouter);
app.use('/api/stories', storyRouter);

app.listen(port, () => console.log(`Server started on port ${port}`));