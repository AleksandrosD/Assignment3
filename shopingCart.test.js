
const CART=require('./shopingCart');

describe('Function test about the cart!',()=>{
    
   
    test("Add 2 apples to the cart price 5$",()=>{
        let obj={name:"apple", price:5};
        const fake=[];
        CART.addToCart(obj,2);
        //console.log
        expect(CART.cart.length).toBe(2);
    })
   
    
    test("Test for the total price of the cart",()=>{
        expect(CART.calculateTotal()).toEqual(10);
    })
    
    test("Delete an item that we know its on the cart",()=>{
        expect(CART.removeFromCart({name:"apple", price:5},1)).toBe("Done!");
    })

    

});