class ProductService{

    constructor(dao){
        this.dao=dao;
    }

    createProductsTest= async () => this.dao.createProductsTest();
    getProducts= async() =>this.dao.getProducts();
}

export default ProductService;