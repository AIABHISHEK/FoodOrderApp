import React, { useRef } from 'react';
import Input from '../../UI/Input/Input';
import classes from './FoodItemForm.module.css';


const FoodItemForm = (props) => {
    const amountRef = useRef();
    const OnAddClickHandler = (event) => {
        event.preventDefault();
        const numberOfItems = +(amountRef.current.value);
        if (numberOfItems > 0 & numberOfItems < 10) {
            props.onAddItemHandler(numberOfItems)
        }
        
    }
    const input = {
        type:'number'
    ,
        id: "item" + props.id,
        min: 0,
        max: 10,
        defaultValue: 0,
    }
    return <React.Fragment>
        <form className={classes.form}>
            <Input ref ={amountRef} label="Amount" input={input}></Input>
            <button onClick={OnAddClickHandler} className={classes.btn} type="button">+Add</button>
        </form>
    </React.Fragment>
}


export default FoodItemForm;