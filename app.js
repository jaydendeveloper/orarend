import express, { json } from "express";
import { initDB } from "./db/db.js";
import { db } from "./db/db.js";

const app = express();

app.use(json());

app.listen(5000, ()=>{
    console.log("Server started on port 5000");

    initDB().then(() => {
        console.log("Database initialized");
    }).catch((error) => {
        console.error("Error initializing database:", error);
    });
});


app.get("/orarend/:day", (req,res)=>{
    const day = req.params.day;

    db.get("SELECT * FROM orarend WHERE DAY = ?", [day], (err, row) => {
        console.log(err, row);
        
        if(err){
            return res.status(500).json({error: "Database error"});
        }

        if(!row){
            return res.status(404).json({error: "Day not found"});
        }

        return res.json(row);
    })

    return day;
});