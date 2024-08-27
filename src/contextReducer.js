import React, { Children, createContext, useContext, useReducer } from "react";
const cartState = createContext();
const cartDispatch = createContext();

const reducer = (state, action) =>{
switch(action.type){
    case "ADD" : 
    return [...state, {id : action.id, name : action.name,description : action.description, price : action.price, quantity : action.quantity,variety : action.variety,option : action.option}]
    case "DROP" : 
    let emptyArr = []
    return emptyArr
    
    default :
    console.log("error in reducer")
}
}

export const CartProvider = ({children}) =>{
const [state, dispatch ]= useReducer(reducer,[])
return (
    <cartDispatch.Provider value={dispatch}>
        <cartState.Provider value={state}>
            {children}
        </cartState.Provider>
    </cartDispatch.Provider>
)

}

export const useCart = ()=> useContext(cartState);
export const useDispatchCart = ()=> useContext(cartDispatch);
