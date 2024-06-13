import { producto } from "../models/productos.model.js";
import { Op } from "sequelize";



//Obtener todos los productos
export const getProducts = async(req, res) =>{
    try {
        const listProducts = await producto.findAll();
        res.status(200).json({
            message: 'Lista de productos:',
            data: listProducts
        })
    } catch (error) {
        return res.json({
            message: 'Error al obtener los productos',
            data: []
        })
    }
}

//Crear producto

export const createProduct = async (req, res) =>{
    const {nombre, precio, cantidad, categoria} = req.body;

    try {
        const newProduct = await producto.create({
            nombre,
            precio,
            cantidad,
            categoria
        })
        res.status(201).json({
            message: 'Producto creado exitosamente',
            data: newProduct
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear el producto',
            data: []
        })
    };
    
}

//Actualizar producto

export const updateProduct = async (req, res) =>{
    try {
        const {id} = req.params;
        const {nombre, precio, cantidad, categoria} = req.body;

        const product = await producto.findByPk(id);

        product.nombre = nombre;
        product.precio = precio;
        product.cantidad = cantidad;
        product.categoria = categoria;

        await product.save();

        res.json(product);

    } catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar el producto',
            data: []
        })
    }
};

// Delete product

export const deleteProduct = async (req, res) =>{
    try {
        const {id} = req.params;
        await producto.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Producto eliminado exitosamente'
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar el producto',
            data: []
        })
    }
}

//Encontrar producto por ID

export const getProductById = async (req, res) =>{
    try {
        const {id} = req.params;
        const product = await producto.findByPk(id);
        res.status(200).json({
            message: 'Producto encontrado:',
            data: product
    });
    } catch (error) {
        
    }
}


export const getProductsOrdered = async (req, res) =>{
    try {
        const productos = await producto.findAll({ order: [['nombre', 'ASC']] });
        res.status(200).json(productos);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

export const getProductsFiltered = async (req, res) =>{
    try {
        const listProduct = await producto.findAll(
           {
            where: {
                precio: {
                        [Op.gt]: 4000,
                    }

                }
            }
        );
        res.status(200).json({
            message: 'Lista de productos:',
            listProduct
        })
    } catch (error) {
        return res.json({
            message: 'Error al obtener los productos',
            data: []
        })
    }
}