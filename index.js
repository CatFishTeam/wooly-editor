const express = require('express');
const bodyParser = require('body-parser');
const store = require('./store');
const app = express();
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.post('/createLevel', (req, res) => {
  store
    .createLevel({
      user_id: req.body.user_id,
      slug: req.body.slug,
      name: req.body.name,
      data: req.body.data,
      best: req.body.best,
      played: req.body.played,
      won: req.body.won,
      created_at: req.body.created_at,
      updated_at: req.body.updated_at,
      screenshot: req.body.screenshot
    })
    .then(() => res.sendStatus(200))
});
app.listen(7888, () => {
  console.log('Server running on http://localhost:7888')
});
