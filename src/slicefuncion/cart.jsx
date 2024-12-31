import { createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:"cart",
    initialState: {items:[]},
    reducers:{
        addItem:(state,action)=>{
            console.log('the state',action)
           state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
           state.items = state.items.filter(items => items.id !== action.payload)
        }
    }
});
console.log('the cartSlice',cartSlice)

export const {addItem,removeItem} = cartSlice.actions;
export default cartSlice.reducer