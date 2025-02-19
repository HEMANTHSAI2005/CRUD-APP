const Product = require('../models/product.model.js');

const getProducts =  async (req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({message: err.message});   
    }
}

const getProduct =  async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({message: err.message});   
    }
}

const updateProduct =  async (req, res) => {
    try {
        const {id}  = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product)
        {
            return res.status(404).json({message: "product not found"});
        }

        const updatedproduct = await Product.findById(id);
        res.status(200).json(updatedproduct);

    } catch (err) {
        res.status(500).json({message: err.message});   
    }
}

const deleteProduct = async (req, res) => {
    try {
        const {id}  = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product)
        {
            return res.status(404).json({message: "product not found"});
        }

        res.status(200).json({message: "Product deleted successfully"});

    } catch (err) {
        res.status(500).json({message: err.message});   
    }
};

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({message: err.message});   
    }
};


module.exports = {
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    createProduct,
}


