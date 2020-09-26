const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to iamss application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});



const db = require("./app/model");
const Role = db.role;
const dbConfig = require ("./app/config/database.config");


db.mongoose
    .connect(dbConfig.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
        initial();
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });


function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "private1"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'private1' to roles collection");
            });

            new Role({
                name: "private2"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'private2' to roles collection");
            });

            new Role({
                name: "private3"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'private3' to roles collection");
            });
        }
    });
}