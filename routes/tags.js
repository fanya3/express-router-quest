const express = require('express');
const router = express.Router();
const fakeTags = require('../data/tags')
const fakePosts = require('../data/posts');


// const posts = require('./posts');
// router.use('/:tagId/posts', posts);
// Get a list of posts
router.get('/', (req, res) => {
    res.json(fakeTags);
  });


  // Get a single post
router.get('/:tagId/posts', (req, res) => {
  
  const tagId = req.params.tagId;
  const foundPost = fakePosts.filter(post => post.tags_id == tagId );
  

  if (!foundPost) {
    return res.status(404).json({
      error: 'Post not found',
    });
  }
  return res.json(foundPost);
});



module.exports = router;