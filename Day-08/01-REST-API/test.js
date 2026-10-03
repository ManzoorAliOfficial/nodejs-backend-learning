const express = require("express");

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to REST API",
        day: "Day-08",
        topic: "REST API"
    });
});

// Products Data
const products = [
    {
        id: 1,
        name: "OnePlus 65W Charger",
        price: 2500
    },
    {
        id: 2,
        name: "Air Buds",
        price: 1800
    }
];

// GET - Get all products
app.get("/api/products", (req, res) => {
    res.json(products);
});



// GET - Get single product
app.get("/api/products/:id", (req, res) => {


    const id = parseInt(req.params.id);

    const product = products.find((product) => product.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
});






// POST - Add new product



app.post("/api/products", (req, res) => {





    const newProduct = 
    {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    };

    products.push(newProduct);


    res.status(201).json({
        
        message: "Product added successfully",
        product: newProduct
    });







});

// PUT - Update product
app.put("/api/products/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const product = products.find((product) => product.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    product.name = req.body.name;
    product.price = req.body.price;

    res.json({
        message: "Product updated successfully",
        product: product
    });
});

// PATCH - Update product partially
app.patch("/api/products/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const product = products.find((product) => product.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    if (req.body.name) {
        product.name = req.body.name;
    }

    if (req.body.price) {
        product.price = req.body.price;
    }

    res.json({
        message: "Product partially updated",
        product: product
    });
});

// DELETE - Delete product
app.delete("/api/products/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const productIndex = products.findIndex(
        (product) => product.id === id
    );

    if (productIndex === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const deletedProduct = products.splice(productIndex, 1);

    res.json({
        message: "Product deleted successfully",
        product: deletedProduct[0]
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});