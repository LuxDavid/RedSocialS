class ProductService{

    constructor(dao){
        this.dao=dao;
    }

    createProductsTest= async () => this.dao.createProductsTest();
    getProducts= async(page) =>this.dao.getProducts(page);
}

export default ProductService;