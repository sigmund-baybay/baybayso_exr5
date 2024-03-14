import express from 'express';
import { appendFileSync } from 'node:fs';

// instantiate the server
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/add-book', (req, res) => {
    res.send('Received a POST request.');

    const book = [req.body.name,req.body.isbn,req.body.author,req.body.year]
    var data = book[0]+","+book[1]+","+book[2]+","+book[3];

    try {
        appendFileSync('books.txt', data + "\n",'utf8');
        console.log('The "data to append" was appended to file!');
    } catch (err) {
        console.log(err)
    } 
});

app.get('/find-by-isbn-author', (req, res) => {
    res.send('ISBN: ' + req.query.isbn +', Author: '+req.query.author);

});

app.get('/find-by-author', (req, res) => {
    res.send('Author: '+req.query.author);
});

// this tells our server to listen to the port 3000
app.listen(3000, () => { console.log('Server started at port 3000')} );

