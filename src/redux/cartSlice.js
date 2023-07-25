import { createSlice } from '@reduxjs/toolkit'


const initialState = {
cartItem:[],
totalQuantity:0,
totalAmount:0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem:(state,action)=>{
const Newitem=action.payload
const existingItem=state.cartItem.find(item=>item.id===Newitem.id)
state.totalQuantity++;
if (existingItem) {
    existingItem.quantity++
    existingItem.totalPrice=existingItem.totalPrice+existingItem.price
} else {
    state.cartItem.push({
        id:Newitem.id,
        productName:Newitem.productName,
        imgUrl:Newitem.imgUrl,
        price:Newitem.price,
        quantity:1,
        totalPrice:Newitem.price
    })
}
state.totalAmount=state.cartItem.reduce((total,item)=>{ return total+Number(item.price)* Number(item.quantity)},0)
    },
    removeItem:(state,action)=>{
        console.log(state.cartItem.filter(item=>item.id!=action.payload.id))
        state.cartItem=state.cartItem.filter(item=>item.id!=action.payload.id)
        state.totalQuantity-=action.payload.quantity
        state.totalAmount-=action.payload.totalPrice
    },
    clearCart:(state)=>{
        state.cartItem=[];
        state.totalPrice=0;
        state.totalQuantity=0;
    }
  }
});

export const {addItem,clearCart,removeItem} = cartSlice.actions

export default cartSlice.reducer