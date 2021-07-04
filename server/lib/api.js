//api routes
const router = require('express').Router();
const db = require('./db');

router.get("/tables", async (req, res) => {
    //get list of all tables from database
    const tables = await db.getTables();
    res.json({ tables });
});

router.get("/tables/:tableName", async (req, res) => {
    //get data for tableName
    const tableData = await db.loadTable(req.params.tableName);
    res.json({ tableData });
});

module.exports = router;