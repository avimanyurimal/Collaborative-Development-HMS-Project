const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const jwt = require("jsonwebtoken");

const app = express();
const port = 5175;

// Establishing MySQL database connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Hostel Management System",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json());

// Secret key for JWT token generation
const secretKey = "your_secret_key";

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

  // Creating MySQL table for Breakfast
  const createBreakfastTable = `
    CREATE TABLE IF NOT EXISTS Breakfast (
      id INT AUTO_INCREMENT PRIMARY KEY,
      Date VARCHAR(255) NOT NULL,
      Meal VARCHAR(255) NOT NULL,
      Items VARCHAR(255) NOT NULL
    )
  `;

  // Creating MySQL table for Lunch
  const createLunchTable = `
    CREATE TABLE IF NOT EXISTS Lunch (
      id INT AUTO_INCREMENT PRIMARY KEY,
      Date VARCHAR(255) NOT NULL,
      Meal VARCHAR(255) NOT NULL,
      Items VARCHAR(255) NOT NULL
    )
  `;

  // Creating MySQL table for Dinner
  const createDinnerTable = `
    CREATE TABLE IF NOT EXISTS Dinner (
      id INT AUTO_INCREMENT PRIMARY KEY,
      Date VARCHAR(255) NOT NULL,
      Meal VARCHAR(255) NOT NULL,
      Items VARCHAR(255) NOT NULL
    )
  `;

  //debuging the upcomming  error in creating the table and let us know the information if Table is created  (for visitors)
  connection.query(createUserTable, (err) => {
    if (err) {
      console.error("Error creating visitors table:", err);
    } else {
      console.log("Visitors table created");
    }
  });

  //debuging the upcomming  error in creating the table and let us know the information if Table is created  (for admin)
  connection.query(createAdminTable, (err) => {
    if (err) {
      console.error("Error creating Admin table:", err);
    } else {
      console.log("Admin table created");
    }
  });

  //debuging the upcomming  error in creating the table and let us know the information if Table is created  (for Residents)
  connection.query(createResidentsTable, (err) => {
    if (err) {
      console.error("Error creating Residents table:", err);
    } else {
      console.log("Residents table created");
    }
  });

  //debuging the upcomming  error in creating the table and let us know the information if Table is created  (for Booked Room)
  connection.query(createBookedRoomTable, (err) => {
    if (err) {
      console.error("Error creating BookedRoom table:", err);
    } else {
      console.log("BookedRoom table created");
    }
  });

  //debuging the upcomming  error in creating the table and let us know the information if Table is created  (for Breakfast
  connection.query(createBreakfastTable, (err) => {
    if (err) {
      console.error("Error creating Breakfast table:", err);
    } else {
      console.log("Breakfast table created");
    }
  });

  //debuging the upcomming  error in creating the table and let us know the information if Table is created  (for Lunch
  connection.query(createLunchTable, (err) => {
    if (err) {
      console.error("Error creating Lunch table:", err);
    } else {
      console.log("Lunch table created");
    }
  });

  //debuging the upcomming  error in creating the table and let us know the information if Table is created  (for Dinner
  connection.query(createDinnerTable, (err) => {
    if (err) {
      console.error("Error creating Dinner table:", err);
    } else {
      console.log("Dinner table created");
    }
  });
};

// Call the function to create tables
createTables();

// Building a API endpoint for visitors registration
app.post("/api/register", (req, res) => {
  const userData = req.body;
  const insertQuery = "INSERT INTO visitors SET ?";
  connection.query(insertQuery, userData, (err, result) => {
    if (err) {
      console.error("Error inserting visitors data:", err);
      res.status(500).json({ success: false, message: "Registration failed" });
    } else {
      console.log("Visitors registered successfully with id:", result.insertId);
      res.json({ success: true, message: "Visitors registered successfully" });
    }
  });
});

// building the endpoint for the visitors, Resisents, and Admin for the verfication

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const userQuery = "SELECT * FROM visitors WHERE email = ? AND password = ?";
  const adminQuery = "SELECT * FROM Admin WHERE email = ? AND password = ?";
  const residentsQuery =
    "SELECT * FROM Residents WHERE email = ? AND password = ?";

  // Check if user is an admin
  connection.query(adminQuery, [email, password], (err, adminResults) => {
    if (err) {
      console.error("Error executing admin login query:", err);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }

    if (adminResults.length > 0) {
      // Admin login successful
      const admin = adminResults[0];
      const token = jwt.sign({ email: admin.email, role: "admin" }, secretKey);
      return res.json({
        success: true,
        isAdmin: true,
        isResidents: false,
        token,
      });
    }

    // Check if user is a resident
    connection.query(
      residentsQuery,
      [email, password],
      (err, residentsResults) => {
        if (err) {
          console.error("Error executing residents login query:", err);
          return res
            .status(500)
            .json({ success: false, message: "Internal server error" });
        }

        if (residentsResults.length > 0) {
          // Residents login successful
          const resident = residentsResults[0];
          const token = jwt.sign(
            { email: resident.email, role: "resident" },
            secretKey
          );
          return res.json({
            success: true,
            isAdmin: false,
            isResidents: true,
            token,
          });
        }

        // Check if user is a visitor
        connection.query(userQuery, [email, password], (err, userResults) => {
          if (err) {
            console.error("Error executing visitor login query:", err);
            return res
              .status(500)
              .json({ success: false, message: "Internal server error" });
          }

          if (userResults.length > 0) {
            // Visitor login successful
            const visitor = userResults[0];
            const token = jwt.sign(
              { email: visitor.email, role: "visitor" },
              secretKey
            );
            return res.json({
              success: true,
              isAdmin: false,
              isResidents: false,
              token,
            });
          } else {
            // Authentication failed
            return res
              .status(401)
              .json({ success: false, message: "Invalid email or password" });
          }
        });
      }
    );
  });
});

//saving the token in the local storage
app.get("/check", (req, res) => {
  res.send("myfriend");
  console.log("Hello");
});

app.get("/user-info", async (req, res) => {
  try {
    // Extract the token from the Authorization header
    const token = req.headers.authorization;
    if (!token) {
      return res
        .status(401)
        .json({ message: "Authorization header is missing" });
    }

    // Extract the token from the header
    const checkToken = token.split(" ")[1];

    // Verify the token and decode it
    const decodedToken = jwt.verify(checkToken, secretKey);

    const userEmail = decodedToken.email;
    console.log("User Email:", userEmail);

    // Construct SQL query with parameterized query
    const query = "SELECT * FROM visitors WHERE email = ?";

    // Execute SQL query
    connection.query(query, [userEmail], (error, results, fields) => {
      if (error) {
        console.error("Error retrieving user data:", error);
        return res.status(500).json({ message: "Error retrieving user data" });
      }

      // Log user data
      console.log("User Data:", results);

      // Return user data as JSON response
      res.status(200).json({ success: true, results });
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
});

// Middleware to authenticate token
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// building the endpoint for fetching the user's first name based on email and password
app.post("/api/visitors/firstname", (req, res) => {
  const { email, password } = req.body;
  const firstnameQuery =
    "SELECT firstName FROM visitors WHERE email = ? AND password = ?";

  connection.query(firstnameQuery, [email, password], (err, results) => {
    if (err) {
      console.error("Error executing login query:", err);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }

    if (results.length > 0) {
      // Login successful, retrieve the user's first name
      const firstName = results[0].firstName;
      console.log(firstName);
      return res.json({
        success: true,
        firstName,
        message: "Login successful",
      });
    } else {
      // Authentication failed
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }
  });
});

// Building the endpoint for fetching the resident's first name based on email and password
app.post("/api/residents/firstname", (req, res) => {
  const { email, password } = req.body;
  const firstnameQuery =
    "SELECT firstName FROM Residents WHERE email = ? AND password = ?";

  connection.query(firstnameQuery, [email, password], (err, results) => {
    if (err) {
      console.error("Error executing resident login query:", err);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }

    if (results.length > 0) {
      // Login successful, retrieve the resident's first name
      const firstName = results[0].firstName;
      console.log(firstName);
      return res.json({
        success: true,
        firstName,
        message: "Login successful",
      });
    } else {
      // Authentication failed
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }
  });
});

// Endpoint to fetch count of visitors for admin dashboard
app.get("/api/admin/visitors/count", (req, res) => {
  // Query the database to get count of visitors
  const visitorsQuery = "SELECT COUNT(*) AS visitorCount FROM visitors";

  connection.query(visitorsQuery, (err, visitorsResults) => {
    if (err) {
      console.error("Error fetching visitor count:", err);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }

    const visitorCount = visitorsResults[0].visitorCount;

    res.json({ success: true, count: visitorCount });
  });
});

// Endpoint to fetch count of residents for admin dashboard
app.get("/api/admin/residents/count", (req, res) => {
  // Query the database to get count of residents
  const residentsQuery = "SELECT COUNT(*) AS residentCount FROM Residents";

  connection.query(residentsQuery, (err, residentsResults) => {
    if (err) {
      console.error("Error fetching resident count:", err);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }

    const residentCount = residentsResults[0].residentCount;

    res.json({ success: true, count: residentCount });
  });
});

// Endpoint to fetch count of booked rooms for admin dashboard
app.get("/api/admin/booked/count", (req, res) => {
  // Query the database to get count of booked rooms
  const bookedQuery = "SELECT COUNT(*) AS BookedCount FROM BookedRoom";

  connection.query(bookedQuery, (err, bookedResults) => {
    if (err) {
      console.error("Error fetching BookedRoom count:", err);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }

    // Retrieve the count from the query results
    const bookedCount = bookedResults[0].BookedCount; // Use the correct alias

    // Return the count as JSON response
    res.json({ success: true, count: bookedCount });
  });
});

// Endpoint to fetch all visitors
app.get("/api/admin/visitors", (req, res) => {
  const getAllVisitorsQuery =
    "SELECT id, firstName, lastName, email FROM visitors";

  connection.query(getAllVisitorsQuery, (err, allvisitorResults) => {
    if (err) {
      console.error("Error fetching visitors:", err);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
    // console.log('Fetched visitors:', allvisitorResults);
    res.json({ success: true, visitors: allvisitorResults });
  });
});

// Endpoint to fetch all visitors data for the admin setting pannel
app.get("/api/admin/visitorsDetails", (req, res) => {
  const getVisitorsQuery =
    "SELECT id, firstName, lastName, email, phoneNumber, address FROM visitors";

  connection.query(getVisitorsQuery, (err, visitorResults) => {
    if (err) {
      console.error("Error fetching visitors:", err);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
    console.log("Fetched visitors_Details:", visitorResults);
    res.json({ success: true, visitorsDetails: visitorResults });
  });
});

// Endpoint to fetch all resident data for the admin setting pannel
app.get("/api/admin/residentDetails", (req, res) => {
  const getresidentQuery =
    "SELECT id, firstName, lastName, email, phoneNumber, address FROM Residents";

  connection.query(getresidentQuery, (err, residentResults) => {
    if (err) {
      console.error("Error fetching visitors:", err);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
    // console.log('Fetched visitors:', allvisitorResults);
    res.json({ success: true, ResidentsDetails: residentResults });
  });
});

// Endpoint to fetch all Booked data for the admin setting pannel
app.get("/api/admin/bookedDetails", (req, res) => {
  const getbookedDetailsQuery =
    "SELECT id, firstName, lastName, email, phoneNumber, address FROM BookedRoom";

  connection.query(getbookedDetailsQuery, (err, bookedDetailsResults) => {
    if (err) {
      console.error("Error fetching visitors:", err);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
    // console.log('Fetched visitors:', allvisitorResults);
    res.json({ success: true, BookingDetails: bookedDetailsResults });
  });
});

// Endpoint to delete an item by ID
app.delete("/api/admin/delete/:tableName/:id", (req, res) => {
  const { tableName, id } = req.params;
  const deleteQuery = `DELETE FROM ${tableName} WHERE id = ?`;

  connection.query(deleteQuery, [id], (err, result) => {
    if (err) {
      console.error(`Error deleting item from ${tableName}:`, err);
      return res
        .status(500)
        .json({ success: false, message: "Failed to delete item" });
    }
    console.log(`Item with ID ${id} deleted from ${tableName}`);
    res.json({
      success: true,
      message: `Item with ID ${id} deleted from ${tableName}`,
    });
  });
});

// Endpoint to edit an item by ID
// app.put('/api/admin/edit/:tableName/:id', (req, res) => {
//   const { tableName, id } = req.params;
//   const updatedData = req.body;
//   const updateQuery = `UPDATE ${tableName} SET ? WHERE id = ?`;

//   connection.query(updateQuery, [updatedData, id], (err, result) => {
//     if (err) {
//       console.error(`Error updating item in ${tableName}:`, err);
//       return res.status(500).json({ success: false, message: 'Failed to update item' });
//     }
//     console.log(`Item with ID ${id} updated in ${tableName}`);
//     res.json({ success: true, message: `Item with ID ${id} updated in ${tableName}` });
//   });
// });

// POST endpoint for accepting booking
app.post("/api/acceptBooking", (req, res) => {
  try {
    const residentData = req.body;
    const insertQuery = "INSERT INTO Residents SET ?"; // Change the table name to Residents
    connection.query(insertQuery, residentData, (err, result) => {
      if (err) {
        console.error("Error accepting booking:", err);
        return res
          .status(500)
          .json({ success: false, message: "Failed to accept booking" });
      }
      console.log("Booking accepted successfully with id:", result.insertId);
      res.json({ success: true, message: "Booking accepted successfully" });
    });
  } catch (error) {
    console.error("Error accepting booking:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to accept booking" });
  }
});

// Endpoint to fetch all Residents
app.get("/api/admin/residents", (req, res) => {
  const getAllResidentsQuery =
    "SELECT id, firstName, lastName, email FROM Residents";

  connection.query(getAllResidentsQuery, (err, allResidentresults) => {
    if (err) {
      console.error("Error fetching visitors:", err);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
    // console.log("Resident data: ", allResidentresults);
    res.json({ success: true, visitors: allResidentresults });
  });
});

// Endpoint to fetch all Residents
app.get("/api/admin/Booked", (req, res) => {
  const getAllBookedQuery =
    "SELECT id, firstName, lastName, email, RoomNumber, RoomType FROM BookedRoom";

  connection.query(getAllBookedQuery, (err, allBookedresults) => {
    if (err) {
      console.error("Error fetching visitors:", err);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
    console.log("Booked data: ", allBookedresults);
    res.json({ success: true, visitors: allBookedresults });
  });
});

// Building the endpoint for the Book now
app.post("/api/booknow", (req, res) => {
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    address,
    roomNumber,
    roomType,
  } = req.body;

  // Insert booking data into MySQL database
  const sql =
    "INSERT INTO BookedRoom (firstName, lastName, phoneNumber, email, address, roomNumber, roomType) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const values = [
    firstName,
    lastName,
    phoneNumber,
    email,
    address,
    roomNumber,
    roomType,
  ];

  connection.query(sql, values, (err, BookedNowresult) => {
    if (err) {
      console.error("Error booking room:", err);
      res.status(500).json({ message: "Server error" });
    } else {
      console.log("Booking successful: ", BookedNowresult);
      res.status(201).json({ message: "Booking successful" });
    }
  });
});

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to store meal data
app.post("/api/meal", (req, res) => {
  const { date, meal, items } = req.body;

  // Check if all required fields are present
  if (!date || !meal || !items) {
    return res
      .status(400)
      .json({ message: "Please provide date, meal, and items" });
  }

  // Choose the appropriate table based on the meal type
  let tableName;
  switch (meal.toLowerCase()) {
    case "breakfast":
      tableName = "Breakfast";
      break;
    case "lunch":
      tableName = "Lunch";
      break;
    case "dinner":
      tableName = "Dinner";
      break;
    default:
      return res.status(400).json({ message: "Invalid meal type" });
  }

  // Insert meal data into the appropriate table
  const sql = `INSERT INTO ${tableName} (Date, Items) VALUES (?, ?)`;
  const values = [date, items];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error storing meal data:", err);
      res.status(500).json({ message: "Server error" });
    } else {
      console.log("Meal data stored successfully:", result);
      res.status(201).json({ message: "Meal data stored successfully" });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
