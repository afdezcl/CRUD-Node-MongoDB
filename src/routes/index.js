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


router.get('/delete/:id_task', async (req, res) => { // (req, res) to do the manage with a function
    const { id_task } = req.params;
    await Task.deleteOne({_id: id_task});
    res.redirect('/');
});

router.get('/edit/:id_task', async (req, res) => {
    const { id_task } = req.params;
    const task = await Task.findById(id_task);
    res.render('edit', {
        task
    });
});

router.post('/update/:id_task', async (req, res) => {
    const { id_task } = req.params;
    await Task.updateOne({_id: id_task}, req.body);    
    res.redirect('/');
});



router.get('/change_status/:id_task', async (req, res) => {
    const { id_task } = req.params;
    const task = await Task.findById(id_task);
    task.status = !task.status;
    await task.save();
    res.redirect('/');
});

module.exports = router;