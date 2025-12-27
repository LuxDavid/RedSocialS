export const getProducts = async () => {

    const request = await fetch("http://localhost:8080/api/products/testProducts", {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    });

    const dataInfo = await request.json();
    const dataProducts= dataInfo.dataResult.dataFinal
    
    return dataProducts

}