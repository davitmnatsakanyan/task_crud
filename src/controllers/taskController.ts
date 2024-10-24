import {Request, Response} from 'express';
import {v4 as uuidv4} from 'uuid';

const {validationResult} = require('express-validator');

interface Task {
    id: string;
    title: string;
}

let tasks: Task[] = [];

const listTasks = (req: Request, res: Response): void => {
    res.send(tasks);
}

const createTask = (req: Request, res: Response): Response | void => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const task: Task = {
        id: uuidv4(),
        title: req.body.title
    };
    tasks.push(task);
    res.status(201).send(task);
};

const updateTask = (req: Request, res: Response): Response | void => {

    const taskId = req.params.id;
    const task = tasks.find(task => task.id === taskId);
    if (!task) {
        return res.status(404).send('Task not found');
    }
    task.title = req.body.title;

    res.send(task);
}

const deleteTask = (req: Request, res: Response): Response | void => {

    const taskId = req.params.id;
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex === -1) {
        return res.status(404).send('Task not found');
    }
    tasks.splice(taskIndex, 1);
    res.send('Task deleted');
}


module.exports = {
    createTask,
    updateTask,
    deleteTask,
    listTasks
}