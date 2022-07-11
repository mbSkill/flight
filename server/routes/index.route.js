const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('in index router');
    res.send('in index response');
});


module.exports = router;