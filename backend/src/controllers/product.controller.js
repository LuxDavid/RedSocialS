import { ProductRepository } from "../services/index.js";

export const generateProductTest= async (req,res) => {

    try {
        const products= await ProductRepository.createProductsTest();
        return res.status(201).send({result:true, dataResult: products, message:"Productos de prueba creados correctamente"});

    } catch (error) {
        res.status(500).send({ status: 'error', message: 'Fail data in database' });
    }
}

export const getProducts= async (req,res) => {

    const page= req.query.page || 1;

    try {
        const products= await ProductRepository.getProducts(page);
        return res.status(201).send({result:true, dataResult: products, message:"List of products"});

    } catch (error) {
        res.status(500).send({ status: 'error', message: 'Fail data in database', error });
    }
}

export const getProduct= async (req,res) => {

    try {
        const pid= req.params.pid;
        const products= await ProductRepository.getProduct(pid);
        return res.status(200).send({result:true, dataResult: products, message:"Producto encontrado"});

    } catch (error) {
        res.status(500).send({ status: 'error', message: 'Fail data in database' });
    }
}

export const deleteProduct=async (req,res) => {
    try {
        const pid=req.params.pid;
        const product= await ProductRepository.deleteProduct(pid);
        return res.status(200).send({result:true, dataResult:product, message:"Producto eliminado correctamente"});
    } catch (error) {
        res.status(500).send({ status: 'error', message: 'Fail data in database' });
    }
}

export const updateProduct=async() => {
    
}