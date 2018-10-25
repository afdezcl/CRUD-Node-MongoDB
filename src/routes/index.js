const express = require('express');
const router = express.Router();

const Task = require('../models/task');

// Request GET in root path
router.get('/', (req, res) => {
    res.render('index');
});

router.post('/add', async (req, res) => {    
    console.log(new Task(req.body));
    const task = new Task(req.body);
    await task.save();
    res.send('Hello Post');        
});




module.exports = router;