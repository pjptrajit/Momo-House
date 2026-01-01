import { createContext, useEffect, useReducer } from 'react'
import { Bounce, Slide, toast } from 'react-toastify';

export const cartContext = createContext();
const getCartItem = ()=>{
  let data = localStorage.getItem("cartItem");
  return data?JSON.parse(data):[]

}
let initialState = getCartItem();
const cartReducer = (state, action) => {
  switch (action.type) {
    // case "AddToCart":

    //   //check the product is exist or not
    //   const isExist = state.find((item)=>{
    //     return item.id = action.payload.id;
    //   });

    //   if(isExist){
    //     alert("Product added already...")
    //     return state;
    //   }else{
    //     alert("Product added...")
    //     let addNewCart = [...state,action.payload];
    //     return addNewCart;
    //   }
    //   console.log(action.type)
    //   return state;
    case "AddToCart":
      //  check existence of product
      const isExist = state.find((item) => {
        return item.id == action.payload.id;
      });
      if (isExist) {
        // alert("Product Already Added.")
        toast('Product Already Added.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });

        return state;
      } else {
        // alert("Successfully Product Added.")
        toast('Successfully Product Added.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide  ,
        });
        let newItem = { ...action.payload, qty: 1 };

        let newCartItem = [...state, newItem];
        return newCartItem;
      }

    case "Increment": {
      let newCart = state.map((items) => {
        return items.id == action.payLoad.id ? { ...items, qty: items.qty + 1 } : items;
      })
      return newCart;
    }


      console.log(action);

    case "Decrement": {
      let newCart = state.map((items) => {
        return items.id == action.payLoad.id && items.qty > 1 ? { ...items, qty: items.qty - 1 } : items;
      })
      return newCart;
    }


    case "Delete":
      let newCart = state.filter((items) => {
        return items.id != action.payLoad.id;
      })
      return newCart;

    case "ClearCart":
      return [];

    default:
      return state;

  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  useEffect(()=>{
    localStorage.setItem("cartItem",JSON.stringify(state));
  })
  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider