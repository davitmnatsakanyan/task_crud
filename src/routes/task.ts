import express from 'express';

const router = express.Router();
const taskController = require('../controllers/taskController');
const {createTaskValidationRules, updateTaskValidationRules} = require('../validators/createTaskValidationRules')


router.post('/', createTaskValidationRules(), taskController.createTask);
router.get('/', taskController.listTasks);
router.put('/:id', updateTaskValidationRules(), taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = {
    taskRouter: router
};