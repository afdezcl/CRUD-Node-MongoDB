const express = require('express');
const router = express.Router();

// Request GET in root path
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;