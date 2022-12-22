import { useContext, useReducer } from 'react'

import CartContext from './Cart-Context';


const defaultCart = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        let isExist = false;
        const updatedItems = state.items.map((item) => {
            if(item.id === action.item.id) {
                isExist = true;
            item.amount += action.item.amount
            }
            return item;
        })
        const updatedTotalAmount = state.totalAmount + (+action.item.price * (+action.item.amount));
        if(isExist) {
            return {items: updatedItems, totalAmount:updatedTotalAmount}
            // const updatedItemsAmount = state.items.concat(action.item);
        }
        const itemsNew = state.items.concat(action.item);
        // console.log(action.item);
        // const updatedTotalAmount = action.item.number;
        return { items: itemsNew, totalAmount: updatedTotalAmount};
    }
    else if (action.type === "REMOVE_ITEM") {
        const updatedItem = state.items.findIndex(item => item.id === action.id);
        // console.log(updatedItem);
        const updatedTotalAmount = state.totalAmount - state.items[updatedItem].price;
        let updatedItems = state.items.filter(item => item.id !== action.id);
        if (state.items[updatedItem].amount !== 1) {
            // return {items: updatedItems, totalAmount:updatedTotalAmount}
            state.items[updatedItem].amount = state.items[updatedItem].amount - 1;
            updatedItems = [...updatedItems, state.items[updatedItem]]
        }
        
        console.log(updatedItems);
        return { items: updatedItems, totalAmount:updatedTotalAmount}
    }
    return defaultCart;
}

const CartContextProvider = (props) => {
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCart);


    const addToCartHandler = (Cartitem) => {
        console.log(Cartitem);
        dispatchCart({ type: "ADD_ITEM", item: Cartitem });
        // if (item) {
        //     dispatchCart({ type: "ADD_ITEM", item: item })
        // }
    }
    const removeFromCartHandler = (id) => {
        dispatchCart({ type: "REMOVE_ITEM", id:id });
    }
    return <CartContext.Provider
        value={
            {
                items: cartState.items,
                totalAmount: cartState.totalAmount  ,
                addToCart: addToCartHandler,
                removeFromCart: removeFromCartHandler
            }
    }
    >{props.children}
    </CartContext.Provider>
}

export default CartContextProvider;