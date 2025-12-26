class ProductService{

    constructor(dao){
        this.dao=dao;
    }

    createProductsTest= async () => this.dao.createProductsTest();
}

export default ProductService;