const express = require('express');
const router = express.Router();

const posts = require('./posts');
const tags = require('./tags');



router.use('/posts', posts);
router.use('/tags', tags);

module.exports = router;




