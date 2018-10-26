const express = require('express');
const router = express.Router();

const Task = require('../models/task');

// Request GET in root path
router.get('/', async (req, res) => {
    const task = await Task.find();
    console.log(task);
    res.render('index', {
        task // task: task
    });
});

router.post('/add', async (req, res) => {    
    console.log(new Task(req.body));
    const task = new Task(req.body);
    await task.save();
    res.redirect('/');
});




module.exports = router;