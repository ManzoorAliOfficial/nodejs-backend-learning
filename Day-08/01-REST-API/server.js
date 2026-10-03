const express = require("express");

const app = express();

const port = 8000;

// Middleware
app.use(express.json())

//HomePage Route
app.get( "/",(req,res)=>{
res.json({
    message: "Welcome to REST API",
        day: "Day-08",
        topic: "REST API"

})

})

// Products Data

const products= [
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

]
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
