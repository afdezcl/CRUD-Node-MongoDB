const express = require('express');
const router = express.Router();

// Request GET in root path
router.get('/', (req, res) => {
    res.render('index');
});

router.post('/add', (req, res) => {
    res.send('Hello Post');
    console.log("Hello!");
});


module.exports = router;