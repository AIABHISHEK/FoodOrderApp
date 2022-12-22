import React from 'react'

const Cart_Context = React.createContext({
    items: [],
    totalAmount: 0,
    addToCart: () => { },
    removeFromCart: () => { }
});

export default Cart_Context;