const { body } = require('express-validator');

const createTaskValidationRules = () => {
    return [
        body('title')
            .isString()
            .notEmpty()
    ];
};

const updateTaskValidationRules = () => {
    return [
        body('title')
            .isString()
            .notEmpty()
    ];
};

module.exports = {
    createTaskValidationRules,
    updateTaskValidationRules
};