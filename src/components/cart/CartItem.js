import classes from './CartItem.module.css'

const CartItem = (props) => {

    const onAddToCartHandler = () => {
        console.log(props.id);
        const item = {
            id: props.id,
            name: props.name,
            price: props.price,
            amount:1
        }
        props.onAdd(item);
    }

    const onRemoveFromCartHandler = () => {
        props.onRemove(props.id)
    }
    return <li className={classes.cartItem}>
        <div className={classes.item}>
            <span>{props.name}</span>
            <span>Price {`$${props.price}`}</span>
            {/* <span>Amount {props.amount}</span> */}
        </div>
        <div className={`${classes['btn-container']}`}>
            
            <button onClick={onRemoveFromCartHandler} className={classes.btn}>-</button>
            <span> {props.amount}</span>
            <button onClick={onAddToCartHandler} className={classes.btn}>+</button>
        </div>
    </li>
}

export default CartItem;