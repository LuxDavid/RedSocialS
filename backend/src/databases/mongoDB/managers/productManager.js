import { productModel } from "../models/productModel.js";
import {generateProduct} from "../../../utils/faker.js";
import { responseMannager } from "../../../helpers/responses.js";

class ProductManager {

    async createProductsTest() {
        try {
            const productsTest= generateProduct();
            
            const productsCreated = await productModel.create(productsTest);

            const result = responseMannager(true, productsCreated, "Products test created");
            return result;
        } catch (error) {
            const result = responseMannager(false, null, 'Fail to create products', error.message);
            return result;
        }
    }

    async getProducts(page) {
        try {
            
            const products = await productModel.paginate({}, {
                limit:10,
                page});

            if (!products) throw new Error("Fail to seach products in database");

            const result = responseMannager(true, products, "List of products");
            return result;
        } catch (error) {
            const result = responseMannager(false, null, 'Fail to search products', error.message);
            return result;
        }
    }
}

export default ProductManager;