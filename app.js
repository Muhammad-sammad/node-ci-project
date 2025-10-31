const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Server running fine!');
});

app.get('/sum', (req, res) => {
  const { a, b } = req.query;
  if (!a || !b) return res.status(400).send('Missing params');
  res.json({ result: Number(a) + Number(b) });
});

module.exports = app;

if (require.main === module) {
  const PORT = 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
