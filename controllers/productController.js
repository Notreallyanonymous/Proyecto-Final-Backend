require('dotenv').config();
const Product = require("../models/Product");
// const jwt = require('jsonwebtoken');

//registro de nuevos productos
exports.register = async (req, res) => {
    const { name, category, price, stock } = req.body;

    try {
        const existedProduct = await Product.findOne({ name })
        if (existedProduct) {
            return res.status(400).json({ message: 'Ya existe un producto con ese nombre' });
        }

        const newProduct = new Product({ name, category, price, stock });
        await newProduct.save();
        return res.status(201).json({ message: 'Nuevo producto registrado', status: 201 });
    } catch (err) {
        return res.status(400).json({ message: `Error registrando productos, ${err.message}` });
    }
}

//cargar todos los productos
exports.getAll = async (req, res) => {
    try {
        const products = await Product.find()
        return res.status(201).json({ data: products, status: 201 });
    } catch (error) {
        return res.status(400).json({ message: `Error al cargar todos los productos, ${err.message}` });
    }
}