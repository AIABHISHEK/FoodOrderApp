
import Modal from '../UI/Modal/Modal'
import classes from './Cart.module.css'
import CartItem from './CartItem'
import CartContext from '../store/Cart-Context';
import { useContext } from 'react';


const Cart = (props) => {

    const cart = [
        { id: 'c1', name: 'Pizza', price: 77,amount:2 },
        { id: 'c2', name: 'Samosa', price: 100, amount: 2 },
        { id: 'c3', name: 'Jalebi', price: 100, amount: 2 },
    ]
    const cartContext = useContext(CartContext);
    const onAddToCartHandler = (item) => {
        cartContext.addToCart(item);
    }

    const removeFromCartHandler = (id) => {
        cartContext.removeFromCart(id);
    }

    const cartList = cartContext.items.map((item) => {
        return <CartItem onRemove={removeFromCartHandler} onAdd={onAddToCartHandler} id={item.id} price={item.price} amount={item.amount} key={item.id} name={item.name}></CartItem>
    })
    return <Modal hideCartHandler={props.hideCartHandler}>
        {/* list of cart items */}
        <div className={classes['cart-content']}>
            {/* total
            --amount
             */}
            <ul className={classes.cartList}>
                {cartList}
            </ul>
            <div className={classes.amount}>
                <span >Amount</span>
                <span>${cartContext.totalAmount}</span>
            </div>
        </div>
        <div className={classes.btns}>
            <button onClick={props.hideCartHandler} className={`${classes.btnClose} ${classes.btn}`} type="button">close</button>
            <button onClick={props.hideCartHandler} className={`${classes.btnOrder} ${classes.btn}`}type="">order</button>
        </div>
    </Modal>
}

export default Cart;