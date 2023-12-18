const { Pool } = require('pg');




const pool = new Pool({
    user: 'your_username',
    host: 'your_host',
    database: 'your_database',
    password: 'your_password',
    port: 5432,
  });


  async function getUsers(req, res) {
    try {
      const result = await pool.query('SELECT * FROM users');
      res.json(result.rows);
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).send('Internal Server Error');
    }
  }
  
  async function createUser(req, res) {
    const { username, email } = req.body;
    try {
      const result = await pool.query(
        'INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *',
        [username, email]
      );
      res.json(result.rows[0]);
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).send('Internal Server Error');
    }
  }
  
  async function updateUser(req, res) {
    const userId = req.params.id;
    const { username, email } = req.body;
    try {
      const result = await pool.query(
        'UPDATE users SET username = $1, email = $2 WHERE id = $3 RETURNING *',
        [username, email, userId]
      );
      res.json(result.rows[0]);
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).send('Internal Server Error');
    }
  }
  
  async function deleteUser(req, res) {
    const userId = req.params.id;
    try {
      const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [
        userId,
      ]);
      res.json(result.rows[0]);
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).send('Internal Server Error');
    }
  }


  module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
  };