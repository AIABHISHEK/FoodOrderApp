

import classes from './Button.module.css';
import React, {useState, useContext, useEffect } from 'react'
import CartContext from '../store/Cart-Context';



const Button = (props) => {

    const [isButtonAnimated, setIsButtonAnimated] = useState(false);
    const cartContext = useContext(CartContext);

    const cartItems = cartContext.items;

    const buttonClass = `${classes.button} ${isButtonAnimated ? classes.animationButton : ''
}`
    useEffect(() => {
        if (cartItems.length === 0) { 
            return;
        }
        setIsButtonAnimated(true);
        const timer = setTimeout(() => {
            setIsButtonAnimated(false);
        }, 400)
        return () => {
            clearTimeout(timer);
        }
    }, [cartItems]);


    const numberOfItemsInCart = cartContext.items
        .reduce((currentValue, item) => { return currentValue + item.amount }, 0);
    
    return <button onClick={props.onClick} className={buttonClass} type="button">
        <span className={`${classes.span} ${classes.icon}`} >CI</span>
        <span className={classes.span}  >Cart</span>
        <span className={`${classes.span} ${classes.number}`} >{numberOfItemsInCart}</span>
    </button>
}

export default Button;
