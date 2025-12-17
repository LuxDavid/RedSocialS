export const generateCode= async() =>{
    const characters= '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result='';

    for(let i=0; i <10; i++){
        const randomI=Math.floor(Math.random() * characters.length);
        result+=characters.charAt(randomI);
    }

    return result;
}