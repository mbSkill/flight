const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    console.log('in flight router');
});

module.exports = router;





