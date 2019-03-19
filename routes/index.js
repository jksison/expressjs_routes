const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

// __dirname is absolute path to this file
router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'index.html'));
});

module.exports = router;