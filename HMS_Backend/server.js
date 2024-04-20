const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 5175;

// Establishing MySQL database connection
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

// Creating MySQL table for visitors registration
const createTables = () => {
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

  // Creating  MySQL table for Admin registration
  const createAdminTable = `
    CREATE TABLE IF NOT EXISTS Admin (
      id INT AUTO_INCREMENT PRIMARY KEY,
      firstName VARCHAR(255) NOT NULL,
      lastName VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phoneNumber VARCHAR(20) NOT NULL,
      address VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL
    )
  `;

  // Creating  MySQL table for Residents registration
  const createResidentsTable = `
    CREATE TABLE IF NOT EXISTS Residents (
      id INT AUTO_INCREMENT PRIMARY KEY,
      firstName VARCHAR(255) NOT NULL,
      lastName VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phoneNumber VARCHAR(20) NOT NULL,
      address VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL
    )
  `;

  // Creating  MySQL table for BookRoom
  const createBookedRoomTable = `
    CREATE TABLE IF NOT EXISTS BookedRoom (
      id INT AUTO_INCREMENT PRIMARY KEY,
      firstName VARCHAR(255) NOT NULL,
      lastName VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phoneNumber VARCHAR(20) NOT NULL,
      address VARCHAR(255) NOT NULL,
      RoomNumber VARCHAR(20) NOT NULL,
      RoomType VARCHAR(255) NOT NULL
    )
  `;

  //debuging the upcomming  error in creating the table and let us know the information if Table is created  (for visitors)
  connection.query(createUserTable, (err) => {
    if (err) {
      console.error('Error creating visitors table:', err);
    } else {
      console.log('Visitors table created');
    }
  });

  //debuging the upcomming  error in creating the table and let us know the information if Table is created  (for admin)
  connection.query(createAdminTable, (err) => {
    if (err) {
      console.error('Error creating Admin table:', err);
    } else {
      console.log('Admin table created');
    }
  });

  //debuging the upcomming  error in creating the table and let us know the information if Table is created  (for Residents)
  connection.query(createResidentsTable, (err) => {
    if (err) {
      console.error('Error creating Residents table:', err);
    } else {
      console.log('Residents table created');
    }
  });

  //debuging the upcomming  error in creating the table and let us know the information if Table is created  (for Booked Room)
  connection.query(createBookedRoomTable, (err) => {
    if (err) {
      console.error('Error creating BookedRoom table:', err);
    } else {
      console.log('BookedRoom table created');
    }
  });
};

// Call the function to create tables
createTables();

// Building a API endpoint for visitors registration
app.post('/api/register', (req, res) => {
  const userData = req.body;
  const insertQuery = 'INSERT INTO visitors SET ?';
  connection.query(insertQuery, userData, (err, result) => {
    if (err) {
      console.error('Error inserting visitors data:', err);
      res.status(500).json({ success: false, message: 'Registration failed' });
    } else {
      console.log('Visitors registered successfully with id:', result.insertId);
      res.json({ success: true, message: 'Visitors registered successfully' });
    }
  });
});

// building the endpoint for the visitors, Resisents, and Admin for the verfication
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const userQuery = 'SELECT * FROM visitors WHERE email = ? AND password = ?';
  const adminQuery = 'SELECT * FROM Admin WHERE email = ? AND password = ?';
  const residentsQuery = 'SELECT * FROM Residents WHERE email = ? AND password = ?';

  // Check if user is an admin
  connection.query(adminQuery, [email, password], (err, adminResults) => {
    if (err) {
      console.error('Error executing admin login query:', err);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }

    if (adminResults.length > 0) {
      // Admin login successful
      return res.json({ success: true, isAdmin: true, isResidents: false, message: 'Admin login successful' });
    }

    // Check if user is a resident
    connection.query(residentsQuery, [email, password], (err, residentsResults) => {
      if (err) {
        console.error('Error executing residents login query:', err);
        return res.status(500).json({ success: false, message: 'Internal server error' });
      }

      if (residentsResults.length > 0) {
        // Residents login successful
        return res.json({ success: true, isAdmin: false, isResidents: true, message: 'Residents login successful' });
      }

      // Check if user is a visitor
      connection.query(userQuery, [email, password], (err, userResults) => {
        if (err) {
          console.error('Error executing visitor login query:', err);
          return res.status(500).json({ success: false, message: 'Internal server error' });
        }

        if (userResults.length > 0) {
          // Visitor login successful
          return res.json({ success: true, isAdmin: false, isResidents: false, message: 'Visitor login successful' });
        } else {
          // Authentication failed
          return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }
      });
    });
  });
});

// building the endpoint for fetching the user's first name based on email and password
app.post('/api/visitors/firstname', (req, res) => {
  const { email, password } = req.body;
  const firstnameQuery = 'SELECT firstName FROM visitors WHERE email = ? AND password = ?';

  connection.query(firstnameQuery, [email, password], (err, results) => {
    if (err) {
      console.error('Error executing login query:', err);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }

    if (results.length > 0) {
      // Login successful, retrieve the user's first name
      const firstName = results[0].firstName;
      console.log(firstName);
      return res.json({ success: true, firstName, message: 'Login successful' });
    } else {
      // Authentication failed
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  });
});

// Building the endpoint for fetching the resident's first name based on email and password
app.post('/api/residents/firstname', (req, res) => {
  const { email, password } = req.body;
  const firstnameQuery = 'SELECT firstName FROM Residents WHERE email = ? AND password = ?';

  connection.query(firstnameQuery, [email, password], (err, results) => {
    if (err) {
      console.error('Error executing resident login query:', err);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }

    if (results.length > 0) {
      // Login successful, retrieve the resident's first name
      const firstName = results[0].firstName;
      console.log(firstName);
      return res.json({ success: true, firstName, message: 'Login successful' });
    } else {
      // Authentication failed
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  });
});



// Endpoint to fetch count of visitors for admin dashboard
app.get('/api/admin/visitors/count', (req, res) => {
  // Query the database to get count of visitors
  const visitorsQuery = 'SELECT COUNT(*) AS visitorCount FROM visitors';

  connection.query(visitorsQuery, (err, visitorsResults) => {
    if (err) {
      console.error('Error fetching visitor count:', err);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }

    const visitorCount = visitorsResults[0].visitorCount;

    res.json({ success: true, count: visitorCount });
  });
});

// Endpoint to fetch count of residents for admin dashboard
app.get('/api/admin/residents/count', (req, res) => {
  // Query the database to get count of residents
  const residentsQuery = 'SELECT COUNT(*) AS residentCount FROM Residents';

  connection.query(residentsQuery, (err, residentsResults) => {
    if (err) {
      console.error('Error fetching resident count:', err);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }

    const residentCount = residentsResults[0].residentCount;

    res.json({ success: true, count: residentCount });
  });
});



// Endpoint to fetch count of booked rooms for admin dashboard
app.get('/api/admin/booked/count', (req, res) => {
  // Query the database to get count of booked rooms
  const bookedQuery = 'SELECT COUNT(*) AS BookedCount FROM BookedRoom';
  
  connection.query(bookedQuery, (err, bookedResults) => {
      if (err) {
          console.error('Error fetching BookedRoom count:', err);
          return res.status(500).json({ success: false, message: 'Internal server error' });
      }

      // Retrieve the count from the query results
      const bookedCount = bookedResults[0].BookedCount; // Use the correct alias

      // Return the count as JSON response
      res.json({ success: true, count: bookedCount });
  });
});




// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

