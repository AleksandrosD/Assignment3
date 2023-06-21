const cart=[];
function addToCart(item, quantity){
    if(typeof item != "object"){
        return "Error"
    }
    for(let i=0;i<quantity;i++){
        cart.push(item)
    }
    return cart;
}
function removeFromCart(item, quantity){
    if(typeof item !== 'object'){
        return "Error";
    }

    for(let i=0;i<cart.length;i++){
        if(cart[i].name==item.name){
            cart.splice(i,quantity);
            return "Done!";
        }
    }
    return "Could not find in cart!"
}
function calculateTotal(){
    let acc=0;
    for(let i=0;i<cart.length;i++){
        acc+=cart[i].price;
    }
    return acc;
}
module.exports={cart, addToCart,removeFromCart,calculateTotal}