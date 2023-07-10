const BASE_URL = `http://localhost:3000/api/`

//========CART AJAX REQUEST=============

//Add To Cart
export const addToCart = async (cart) =>{
    try{
        const response = await fetch(`${BASE_URL}/carts/addtocart`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(cart)
        })
        const result = await response.json()
        console.log("result")
        return result
    }catch(err){
        console.error("Error adding item to cart", err)
    }
}
//Get User and Cart
export const fetchUsersCart = async (userId) =>{
    try {
        const response = await fetch(`${BASE_URL}/userandcart/${userId}`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(userId)
         })
         const result = await response.json()
         console.log(result)
         return result
    }catch(err){
        console.error("Error fetching users cart", err)
    }
}