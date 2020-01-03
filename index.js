const express = require('express');

const app = express();
const port = 8000;

// const comments = require('./routes/comments');
// const posts = require('./routes/posts');


// app.use('/api/comments', comments);
// app.use('/api/posts', posts);
const api = require('./routes');
app.use('/api', api);

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});

