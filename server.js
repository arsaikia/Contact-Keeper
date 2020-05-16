const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({ msg: 'welcome to the contact keeper API.' }));

// Define routes
app.use('/api/users', require('./Routes/users'));
app.use('/api/auth', require('./Routes/auth'));
app.use('/api/contacts', require('./Routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
