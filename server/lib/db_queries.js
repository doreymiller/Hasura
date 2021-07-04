const ALBUMS = `
    SELECT albums.id, albums.title, name FROM albums
    JOIN artists ON albums.artist_id = artists.id;
`;

//fix query so that reports_to references id with a self join
const EMPLOYEES = `
    SELECT * FROM employees;
`;

const CUSTOMERS = `
    SELECT c.id, c.first_name, c.last_name, c.company, c.address,
    c.city,  c.state, c.country, c.postal_code, c.phone, c.fax, c.email,
    c.support_rep_id, e.first_name, e.last_name, e.title
    FROM customers AS c
    JOIN employees AS e
    ON e.id = c.support_rep_id;
`;

module.exports = {
    ALBUMS,
    EMPLOYEES,
    CUSTOMERS,
}
