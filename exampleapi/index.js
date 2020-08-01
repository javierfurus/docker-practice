const express = require('express');
const app = express();
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});
app.get('/user', (req, res) => {
  console.log(req.method, req.path);
  res.json([
    {
      email: 'jackson@jackson.jack',
      name: 'Javier',
      age: 25
    },
    {
      email: 'jackson@jackson.jack',
      name: 'Javier',
      age: 25
    }]);
});
app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
})
;
