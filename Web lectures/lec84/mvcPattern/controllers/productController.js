const Product = require('../models/productModel');
const {all} = require('../routes/productRoutes')

//business Logic

const getProducts = async(req, res) => {
    try{
        const allProducts = await Product.find();
        if(!allProducts || allProducts.length === 0) {
            return res.json({
                message:"There is no Product"
            })
        }
        //if we have products >= 1
        res.status(200).json({
            succes:true,
            products:allProducts,
        })
    }
    catch(err){
        res.status(500).json({
            succes:false,
            message:"Internal Server Error"
        })
    }
}

const createProducts = async(req, res) => {
    try{
        const {name, price, description, category} = req.body;
        const newProduct = new Product({name, price, description, category});
        await newProduct.save();
        res.status(200).json({
            product: newProduct
        })
    }
    catch(err){
        res.status(500).json({
            succes:false,
            message:"Internal Server Error"
        })
    }
}

const updateProduct = async(req, res) => {
    try{
        const {id} = req.params;
        const {name, price, description, category} = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(id, {name, price, description, category}, {new:true});

         if(!updatedProduct) {
            return res.json({
                message:"Can not find product"
            })
        }

        res.status(200).json({
            product: updatedProduct
        })
    }
    catch(err){
        res.status(500).json({
            succes:false,
            message:"Internal Server Error"
        })
    }
}

const deleteProduct = async(req, res) => {
    try{
        const {id} = req.params;

        const deletedProduct = await Product.findByIdAndDelete(id);

        if(!deletedProduct) {
            return res.json({
                message:"Product not found, Can not delete "
            })
        }

        res.status(200).json({
            message:"Product Deleted Successfully",
            product: deletedProductProduct
        })
    }
    catch(err){
        res.status(500).json({
            succes:false,
            message:"Internal Server Error"
        })
    }
}

module.exports = {getProducts, updateProduct, createProducts, deleteProduct}