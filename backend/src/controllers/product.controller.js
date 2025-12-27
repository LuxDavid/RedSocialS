import { ProductRepository } from "../services/index.js";

export const generateProductTest= async (req,res) => {

    try {
        const products= await ProductRepository.createProductsTest();
        return res.status(201).send({result:true, dataResult: products});

    } catch (error) {
        res.status(500).send({ status: 'error', message: 'Fail data in database' });
    }
}

export const getProducts= async (req,res) => {

    try {
        const products= await ProductRepository.getProducts();
        return res.status(201).send({result:true, dataResult: products});

    } catch (error) {
        res.status(500).send({ status: 'error', message: 'Fail data in database' });
    }
}