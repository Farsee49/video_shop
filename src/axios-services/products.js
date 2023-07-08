const BASE_URL = `http://localhost:3000/api/`


//========GET ALL PRODUCTS=============
export const fetchAllProducts = async() =>{
    try{
        const response = await fetch(`${BASE_URL}/products`, {

            headers:{
                'Content-Type': 'application/json',
            },
        })
        const result = await response.json()
        console.log(result)
        return result
    }catch(err){
        console.error(err)
    }
}
//=========CREATE A PRODUCT============
export const createProduct = async(product)=>{
    const token = window.localStorage.getItem("token")
    try{
        const response = await fetch(`${BASE_URL}/products/createproduct`, {
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name:product.name,
                description: product.description,
                price:product.price,
                photourl:product.photourl,
                category:product.category
            })
        });
        const result = await response.json();
        console.log("Created product", result)
        return result

    }catch(err){
        console.error("There was an error when creating your product",err)
    }
}