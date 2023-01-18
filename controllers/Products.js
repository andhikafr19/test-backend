import jwt from "jsonwebtoken";
import { where } from "sequelize";
import Products from "../models/ProductModel.js";
 
export const getProducts = async(req, res) => {
    try {
        const products = await Products.findAll({
            attributes:['id','name_product','price','description','image']
        });
        res.json(products);
    } catch (error) {
        console.log(error);
    }
}
 
export const postProduct = async(req, res) => {
    const { name_product,price,description,image } = req.body;
    try {
        await Products.create({
            name_product: name_product,
            price: price,
            description: description,
            image: image
        });
        res.json({msg: "Product Berhasil Di Tambah"});
    } catch (error) {
        console.log(error);
    }
}

export const updateProduct = async(req, res) => {
    const productId = await Products.findOne({
        where:{
            id : req.params.id
        }
    });

    const { name_product,price,description,image } = req.body;
    try {
        await Products.update({
            name_product: name_product,
            price: price,
            description: description,
            image: image
        },{
            where:{
                    id: req.params.id
            }
        });
        res.json({msg: "Product Berhasil Di Update"});
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = async(req, res) => {
    const productId = await Products.findOne({
        where:{
            id : req.params.id
        }
    });
    try {
        await Products.destroy({
            where:{
                    id: req.params.id
            }
        });
        res.json({msg: "Product Berhasil Di Hapus"});
    } catch (error) {
        console.log(error);
    }
}

