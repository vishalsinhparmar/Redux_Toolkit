import React from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { addItem } from '../slicefuncion/cart';
function Cart() {
    const dispatch = useDispatch();
    // console.log(stae\\)
    const items = useSelector(state => state.cart.items);

    const handleAddItem = () =>{
         const newItem = {id:Date.now(),name:'Iteam',}
         dispatch(addItem(newItem))
    }
  return (
    <>
      <div>
           <button onClick={handleAddItem}>Add Itmes</button>
      </div>
      <div>
           {items.map((item)=>(
            <>
                 <p>{item.id}</p>
            </>
           ))}
            
      </div>

      </>
  )
}

export default Cart