import {fa, faker} from "@faker-js/faker";
import { generateCode } from "../helpers/generateCode.js";

export const generateProduct= () => {

    const products=[];

    for(let i=0; i < 10; i++){
        products.push({
            title: faker.commerce.productName(),
            description:faker.commerce.productDescription(),
            price: faker.commerce.price(),
            code: generateCode(),
            stock: faker.number.int({max:100}),
            category: faker.commerce.department(),
        });
    }

    return products;
}
