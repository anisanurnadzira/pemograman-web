const express = require('express');
const mysql =require('mysql2');
const bodyParser = require('body-parser');

const server = express();
server.use(bodyParser.urlencoded({extended : false}));
server.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'pert5'
});

connection.connect((err) => {
    if(err) {
        console.error("terjadi kesalahan dalam kondeksi ke MySQL:", err.stack);
        return;
    }
    console.log("koneksi MySQL berhasil dengan id" + connection.threadId)
});

server.set('view engine', 'ejs');

// routing crud(create, read, update, deleta)

//read
server.get('/', (req, res) => {
    const query = 'select * from users';
    connection.query(query, (err, results) => {
        res.render('index',{users: results});
    });
});

//create/input/insert
server.post('/add', (req, res) => {
    const {name, email, phone } = req.body;
    const query = 'INSERT INTO userS (name, email, phone) VALUES (?,?,?)';
    connection.query(query, [name, email, phone], (err, results) => {
        if(err) throw err;
        res.redIrect('/');
    });
});

server.get('/edit/:id', (req, res) => {
    const query = 'SELECT * FROM users WHERE id = ?';
    connection.query(query, [req.params.id], (err, results) => {
        if (err) throw err;
        res.render('edit', { user: results[0] });
    });
});

// update
server.post('/update/:id', (req, res) => {
    const { name, email, phone } = req.body;
    const query = 'UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ?';
    connection.query(query, [name, email, phone, req.params.id], (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});

server.listen(3000, () => {
    console.log("Server berjalan di port 3000, buka web melalui http://localhost:3000");
});