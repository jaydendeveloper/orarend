import express, { json } from "express";
import { initDB } from "./db/db.js";
import { db } from "./db/db.js";
import cors from "cors";

const app = express();
app.use(cors());

app.use(json());

app.listen(5000, () => {
  console.log("Server started on port 5000");

  initDB()
    .then(() => {
      console.log("Database initialized");
    })
    .catch((error) => {
      console.error("Error initializing database:", error);
    });
});

app.get("/orarend/:day", (req, res) => {
  const day = req.params.day;

  db.get("SELECT * FROM orarend WHERE DAY = ?", [day], (err, row) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }

    if (!row) {
      return res.status(404).json({ error: "Day not found" });
    }

    return res.json(row);
  });

  return day;
});

app.post("/orarend/:day", (req, res) => {
  const day = req.params.day;
  const data = req.body;

  if (!day) {
    return res.status(400).json({ error: "Day is required" });
  }
  console.log(day, data);

  db.run(
    "UPDATE orarend SET ORA_1 = ?, ORA_2 = ?, ORA_3 = ?, ORA_4 = ?, ORA_5 = ?, ORA_6 = ?, ORA_7 = ?, ORA_8 = ?, ORA_9 = ?, ORA_10 = ?, ORA_11 = ?, ORA_12 = ? WHERE DAY = ?",
    [
      data.ORA_1,
      data.ORA_2,
      data.ORA_3,
      data.ORA_4,
      data.ORA_5,
      data.ORA_6,
      data.ORA_7,
      data.ORA_8,
      data.ORA_9,
      data.ORA_10,
      data.ORA_11,
      data.ORA_12,
      day,
    ],
    (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Database error" });
      }

      return res.status(200).json({
        message: "Timetable updated!",
      });
    }
  );
});
