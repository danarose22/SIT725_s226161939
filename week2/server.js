const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the index.html file from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// GET API to add two numbers
// Example: http://localhost:3000/add?a=10&b=20
app.get('/add', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send(
            "Please provide two valid numbers. Example: /add?a=10&b=20"
        );
    }

    const sum = a + b;

    res.json({
        number1: a,
        number2: b,
        result: sum
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});