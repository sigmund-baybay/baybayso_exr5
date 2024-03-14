import needle from 'needle';

needle.post(
    'http://localhost:3000/add-book',
    {   name: "Harry Potter and the Philosopher's Stone",
        isbn: '978-0-7475-3269-9',
        author: 'J.K Rowling',
        year: '1997'
    },  
    (err, res) => {
    console.log(res.body) // prints the server’s response “Received a
    // POST request.”
    }
);

needle.get('http://localhost:3000/find-by-isbn-author?isbn=978-0-7475-3269-9&author=J.K+Rowling', (err, res) => {
    console.log(res.body); // prints the body of the response message. 
    
    });

needle.get('http://localhost:3000/find-by-author?author=J.K+Rowling', (err, res) => {
    console.log(res.body); // prints the body of the response message. 
    
    });
        