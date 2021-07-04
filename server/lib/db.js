//database object and queries
const pgp = require('pg-promise')();
require("dotenv").config();
const queries = require("./db_queries");

const cn = {
    host: process.env.HOST,
    port: process.env.DBPORT,
    database: process.env.DB,
    user: process.env.USER,
    password: process.env.PASSWORD,
    max: 30 // use up to 30 connections

    // "types" - in case you want to set custom type parsers on the pool level
};

const db = pgp(cn);

const getTables = async () => {

    try {
        const sql = formatQuery("tables");
        const tables = await db.any(sql);
        return tables.map(obj => obj.table_name);
        // success
    } 
    catch(e) {
        // error
        console.log("Error getting tables: ", e);
    }
};

const loadTable = async (tableName) => {
    try {
        const sql = formatQuery(tableName);
        const tableData = await db.any(sql);
        return tableData;
        // success
    } 
    catch(e) {
        // error
        console.log("Error loading table: ", e);
    }
};

//NOTES
//  add more queries for specific tables with unique sql statements for joining
const formatQuery = (queryType) => {
    switch(queryType) {
        case "tables":
            return (
                `SELECT table_name FROM
                information_schema.tables
                WHERE table_schema='public'
                `
            );
        case "albums":
            return queries.ALBUMS;
        case "employees":
            return queries.EMPLOYEES;
        case "customers":
            return queries.CUSTOMERS;
        default:
            return `SELECT * FROM ${queryType}`;
    }
};

module.exports = {
    getTables,
    loadTable
}