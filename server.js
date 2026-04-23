const express = require('express');
const app = express();
const port =3000;

app.get('/', (req, res) => {
  res.send('This is my first server');
});

app.get('/about', (req, res) => {
   const student ={
    id: 1;
    name= 
   }
});

app.get('/contact', (req, res) => {
  res.send('<h1>no:1234567891</h1>');
}); 

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
