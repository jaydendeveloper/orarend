import sqlite from "sqlite3";

export const db = new sqlite.Database("./orarend.sqlite");

export async function initDB() {
    db.run(`
        CREATE TABLE IF NOT EXISTS orarend (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        DAY TEXT,
        ORA_1 TEXT ,
        ORA_2 TEXT,
        ORA_3 TEXT,
        ORA_4 TEXT,
        ORA_5 TEXT,
        ORA_6 TEXT,
        ORA_7 TEXT,
        ORA_8 TEXT,
        ORA_9 TEXT,
        ORA_10 TEXT,
        ORA_11 TEXT,
        ORA_12 TEXT
        );
    `);


    const defaultData = [
        {
            DAY: "hetfo",
        },
        {
            DAY: "kedd",
        },
        {
            DAY: "szerda",
        },
        {
            DAY: "csutortok",
        },
        {
            DAY: "pentek",
        },
        {
            DAY: "szombat",
        },
        {
            DAY: "vasarnap",
        },
    ]

    for (const data of defaultData) {
        const { DAY, ORA_1 } = data;
        db.run(`
            INSERT INTO orarend (DAY, ORA_1)
            VALUES (?, ?)
        `, [DAY, ORA_1]);
    }
    console.log("Database initialized");
};

