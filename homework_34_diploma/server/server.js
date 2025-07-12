const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const DB_PATH = "./db.json";
const BOOKINGS_PATH = "./bookingDB.json";

// app.post("/hotels", (req, res) => {
//     const bookingData = req.body;

//     if (
//         !bookingData.destination ||
//         !bookingData.checkIn ||
//         !bookingData.checkOut ||
//         typeof bookingData.adults !== "number"
//     ) {
//         return res.status(400).json({ error: "Invalid booking data" });
//     }

//     fs.readFile(DB_PATH, "utf-8", (err, rawDb) => {
//         if (err) return res.status(500).json({ error: "DB read error" });

//         try {
//             const db = JSON.parse(rawDb);
//             const hotels = db.hotels || [];
//             const result = hotels.filter(
//                 (hotel) => hotel.city === bookingData.destination
//             );

//             return res.json(result);
//         } catch (e) {
//             return res.status(500).json({ error: "DB parse error" });
//         }
//     });
// });

app.post("/hotels", (req, res) => {
    const bookingData = req.body;

    if (
        !bookingData.destination ||
        !bookingData.checkIn ||
        !bookingData.checkOut ||
        typeof bookingData.adults !== "number"
    ) {
        return res.status(400).json({ error: "Invalid booking data" });
    }

    fs.readFile(DB_PATH, "utf-8", (err, rawDb) => {
        if (err) return res.status(500).json({ error: "DB read error" });

        try {
            const db = JSON.parse(rawDb);
            const hotels = db.hotels || [];
            const result = hotels.filter(
                (hotel) => hotel.city === bookingData.destination
            );

            if (result.length === 0) {
                return res.status(404).json({ error: "Hotels not found" });
            }

            return res.json(result);
        } catch (e) {
            return res.status(500).json({ error: "DB parse error" });
        }
    });
});

app.get("/destination", (req, res) => {
    fs.readFile(DB_PATH, "utf-8", (err, data) => {
        if (err)
            return res
                .status(500)
                .json({ error: "Failed to read destination list" });

        try {
            const db = JSON.parse(data);
            res.json(db.destination || []);
        } catch {
            res.status(500).json({ error: "Invalid DB format" });
        }
    });
});

app.post("/book", async (req, res) => {
    const bookingData = req.body;

    fs.readFile(BOOKINGS_PATH, "utf-8", (err, data) => {
        let currentBookings = [];
        if (!err && data) {
            try {
                currentBookings = JSON.parse(data);
            } catch {
                currentBookings = [];
            }
        }

        const newBooking = {
            ...bookingData,
            id: Math.random().toString(36).substring(2, 10), // простой id
            timestamp: new Date().toISOString(),
        };

        currentBookings.push(newBooking);

        fs.writeFile(
            BOOKINGS_PATH,
            JSON.stringify(currentBookings, null, 2),
            (err) => {
                if (err) {
                    console.error("Failed to save booking:", err);
                    return res
                        .status(500)
                        .json({ error: "Failed to save booking" });
                }

                return res.status(200).json({
                    message: "Booking saved successfully",
                    booking: newBooking,
                });
            }
        );
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
