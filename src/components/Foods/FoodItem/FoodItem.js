
import React from 'react';
import { useContext } from 'react';

import classes from './FoodItem.module.css'
import FoodItemForm from './FoodItemForm';
import CartContext from '../../store/Cart-Context';

const FoodItem = (props) => {
    const cartContext = useContext(CartContext);
    const onAddItemToCartHandler = (numberOfItems) => {
        const item = {
            id: props.id,
            name: props.name,
            price: props.price,
            amount: numberOfItems
        }
        // console.log(item.price);
        cartContext.addToCart(item);
    }
    const price = props.price.toFixed(2);
    return <React.Fragment>
        <li className={`${classes.FoodItem} ${classes.item}`}>
            <div>
                <div className={classes.name}>
                    {props.name}
                </div>
                <div className={classes.description}>
                    {props.description}
                </div>
                <div className={classes.price}>
                    {price}
                </div>
            </div>
            <div>
                <FoodItemForm onAddItemHandler={onAddItemToCartHandler} id={props.id}></FoodItemForm>
                {/* form to get input */}
            </div>
        </li>       
        </React.Fragment>
}

export default FoodItem;