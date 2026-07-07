import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UsersModel from './Models/UsersModel.js';
import Location from './Models/Location.js';

// Create an express app
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
const conStr = "mongodb+srv://Admin:1234@ahmed12.vzquk.mongodb.net/parkingdb?retryWrites=true&w=majority&appName=ahmed12";

mongoose.connect(conStr)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });

// For Registration:
app.post("/forRegister", async (req, res) => {
    try {
        const { USERNAME, PASSWORD, EMAIL, TYPE, DATE } = req.body;

        const checkUsername = await UsersModel.findOne({ USERNAME: USERNAME });
        if (checkUsername) {
            res.send("User already exists");
        } else {
            const newUser = new UsersModel({
                USERNAME,
                PASSWORD,
                EMAIL,
                TYPE,
                DATE,
            });

            await newUser.save();
            res.send("Account has been created!.. ");
        }
    } catch (error) {
        res.send(error);
    }
});

// For Login
app.post("/forLogin", async (req, res) => {
    const { USERNAME, PASSWORD } = req.body;
    try {
        const user = await UsersModel.findOne({ USERNAME });
        if (user) {
            if (user.PASSWORD == PASSWORD) {
                res.send("Success");
            } else {
                res.send("Not Success");
            }
        } else {
            res.send("User not found! ");
        }
    } catch (error) {
        console.log(error);
    }
});

// For showing all locations (GET)
app.get("/locations", async (req, res) => {
    try {
        const locations = await Location.find({});
        res.send(locations);
    } catch (error) {
        res.send(error);
    }
});


// Add a new location (POST)
app.post("/addLocation", async (req, res) => {
    const { LOCATION_NAME, LOCATION_DESCRIPTION, LOCATION_PRICE, LOCATION_PICTURE } = req.body;

    try {
        const newLocation = new Location({
            LOCATION_NAME,
            LOCATION_DESCRIPTION,
            LOCATION_PRICE,
            LOCATION_PICTURE,
        });

        await newLocation.save();
        res.send("Location added successfully!");
    } catch (error) {
        res.status(400).send("Error adding location");
        console.log(error);
    }
});

// Search location by name
app.get('/location', async (req, res) => {
    const { name } = req.query;
    try {
        const location = await Location.findOne({ LOCATION_NAME: name });
        if (location) {
            res.status(200).json(location);
        } else {
            res.status(404).send('Location not found');
        }
    } catch (error) {
        res.status(500).send('Error fetching location');
        console.error(error);
    }
});

// Update location by name
app.put('/location', async (req, res) => {
    const { LOCATION_NAME, LOCATION_DESCRIPTION, LOCATION_PRICE, LOCATION_PICTURE } = req.body;
    try {
        const updatedLocation = await Location.findOneAndUpdate(
            { LOCATION_NAME },
            { LOCATION_DESCRIPTION, LOCATION_PRICE, LOCATION_PICTURE },
            { new: true }
        );
        if (updatedLocation) {
            res.status(200).json(updatedLocation);
        } else {
            res.status(404).send('Location not found');
        }
    } catch (error) {
        res.status(500).send('Error updating location');
        console.error(error);
    }
});

// Delete location by name
app.delete('/location', async (req, res) => {
    const { LOCATION_NAME } = req.body;
    try {
        const deletedLocation = await Location.findOneAndDelete({ LOCATION_NAME });
        if (deletedLocation) {
            res.status(200).send('Location deleted successfully');
        } else {
            res.status(404).send('Location not found');
        }
    } catch (error) {
        res.status(500).send('Error deleting location');
        console.error(error);
    }
});


// Start the server
app.listen(8080, () => {
    console.log("Server running on http://localhost:8080");
});
