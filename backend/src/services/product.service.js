class ProductService{

    constructor(dao){
        this.dao=dao;
    }

    createProductsTest= async () => this.dao.createProductsTest();
    getProducts= async(page) =>this.dao.getProducts(page);
    getProduct= async(pid) => this.dao.getProduct(pid);
    deleteProduct=async(pid) => this.dao.deleteProduct(pid);
}

export default ProductService;