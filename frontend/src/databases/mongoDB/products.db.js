export const getProducts = async (page) => {

    const request = await fetch(`http://localhost:8080/api/products/testProducts?page=${page}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    });

    const dataInfo = await request.json();
    const dataProducts= dataInfo.dataResult.dataFinal
    
    return dataProducts

}

export const getProduct = async (productID) => {

    const request = await fetch(`http://localhost:8080/api/products/${productID}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    });

    const dataInfo = await request.json();
    const dataProducts= dataInfo.dataResult.dataFinal
    
    return dataProducts

}