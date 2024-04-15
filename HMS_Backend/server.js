const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 5175;

//establishing  MySQL connection database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Hostel Management System'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json());

// Creating  MySQL table for visitors registration
const createUserTable = `
  CREATE TABLE IF NOT EXISTS visitors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(20) NOT NULL,
    address VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
  )
`;

//debuging the upcomming  error in creating the table and let us know the information if Table is created 
connection.query(createUserTable, (err) => {
  if (err) {
    console.error('Error creating visitors table:', err);
  } else {
    console.log('visitors table created');
  }
});

// Building a API endpoint for user registration
app.post('/api/register', (req, res) => {
  const userData = req.body;
  const insertQuery = 'INSERT INTO visitors SET ?';
  connection.query(insertQuery, userData, (err, result) => {
    if (err) {
      console.error('Error inserting visitors data:', err);
      res.status(500).json({ success: false, message: 'Registration failed' });
    } else {
      console.log('visitors registered successfully:', result.insertId);
      res.json({ success: true, message: 'visitors registered successfully' });
    }
  });
});



// building  a login endpoint for the verification
app.post('/api/login', (req, res) => {
  // Extracting the email and password from the request body
  const { email, password } = req.body;

  // Query the database to find a user with the provided email and password
  const query = 'SELECT * FROM visitors WHERE email = ? AND password = ?';
  connection.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Error executing login query:', err);
      res.status(500).json({ success: false, message: 'Internal server error' });
      return;
    }

    // Checking if any user matches the provided credentials
    if (results.length > 0) {
      // Authentication successful
      res.status(200).json({ success: true, message: 'Login successful' });
    } else {
      // Authentication failed
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  });
});





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
