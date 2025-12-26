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
}

export default ProductManager;