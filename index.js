const { database } = require('./db/db');
const express = require('express');
const {
  login,
  createUser,
  updateUsers,
  getAllUsers,
} = require('./Controller/userController');
const app = express();
app.use(express.json());
const PORT = 4000;

app.get('/', () => {
  console.log('home');
});

app.post('/register', createUser);
app.post('/login', login);
app.put('/update_users', updateUsers);
app.get('/getallusers', getAllUsers);

function startserver() {
  app.listen(PORT, () => {
    console.log('server is running');
  });
}

database(startserver);
