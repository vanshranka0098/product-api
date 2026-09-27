const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

// Static product data
const products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000
    },
    {
        id: 2,
        name: "Mobile Phone",
        price: 25000
    },
    {
        id: 3,
        name: "Headphones",
        price: 2000
    }
];

// Serve files from public folder
app.use(express.static("public"));

// API
app.get("/products", (req, res) => {
    res.json(products);
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});