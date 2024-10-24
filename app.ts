import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

const { taskRouter } = require('./src/routes/task.ts');

app.use('/tasks', taskRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});