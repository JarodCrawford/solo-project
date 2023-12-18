// const express = require('express');
// const app = express();
// const path = require('path');
// const usersController = require('./controllers/userController')

// const PORT = process.env.PORT || 3000;


// app.use(express.json());


// // convert static files
// app.use(express.static(path.resolve(__dirname, '../public')));

// app.get('/', (req, res) => {
//     console.log('Accessing root URL');
//     res.sendFile(path.resolve(__dirname, '../public/index.html'));
//   });


// // routes
// app.get('/api/users', async (req, res, next) => {
//     try {
//       const users = await usersController.getUsers();
//       res.json(users);
//     } catch (error) {
//       next(error); 
//     }
//   });
  
//   app.post('/api/users', async (req, res, next) => {
//     try {
//       const newUser = await usersController.createUser(req.body);
//       res.status(201).json(newUser);
//     } catch (error) {
//       next(error);
//     }
//   });
  
//   app.put('/api/users/:id', async (req, res, next) => {
//     try {
//       const updatedUser = await usersController.updateUser(req.params.id, req.body);
//       res.json(updatedUser);
//     } catch (error) {
//       next(error);
//     }
//   });
  
//   app.delete('/api/users/:id', async (req, res, next) => {
//     try {
//       await usersController.deleteUser(req.params.id);
//       res.sendStatus(204); 
//     } catch (error) {
//       next(error);
//     }
//   });
  



// catch 404 errors
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));


  // catch global errors
  app.use((err, req, res, next) => {
    console.error(err.stack); // Log the stack trace for debugging
    res.status(500).json({ error: 'Internal Server Error' });
  });
  


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});