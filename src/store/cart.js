import {createSlice} from "@reduxjs/toolkit";
import { products } from "../components/products";
const initialState = {
    items: []
}
// initialState tells us the default state of the cart or of an Object


// here the name of the state is cart
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addTOCart(state, action){
            const {productId, quantity} = action.payload;
            // state.items.push({productId, quantity});
            const existingProduct = state.items.find(item => item.productId === productId);
            if(existingProduct){
                existingProduct.quantity += quantity;
            }
            else{
                state.items.push({productId, quantity});
            }
        },
        changeQuantity(state,action){
            const {productId, quantity} = action.payload;
            const existingProductId = state.items.find(item => item.productId === productId);   //checking the state of the existing id 
            if( quantity > 0 ){
                existingProductId.quantity = quantity;
            }
            else{
                state.items = state.items.filter(item => item.productId !== productId);
            }
        }
    }
})

export const {addTOCart , changeQuantity} = cartSlice.actions;
export default cartSlice.reducer

//Here now we have created a place to store the cart value
//action is the current value of the cart and the action is the data that user
// passes in