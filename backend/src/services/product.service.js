class ProductService{

    constructor(dao){
        this.dao=dao;
    }

    createProductsTest= async () => this.dao.createProductsTest();
    getProducts= async(page) =>this.dao.getProducts(page);
    getProduct= async(pid) => this.dao.getProduct(pid);
    deleteProduct=async(pid) => this.dao.deleteProduct(pid);
    updateProduct=async(pid,data) =>this.dao.updateProduct(pid,data);
    createProduct=async(data) =>this.dao.createProduct(data);
}

export default ProductService;