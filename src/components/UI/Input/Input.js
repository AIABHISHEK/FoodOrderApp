import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    return <React.Fragment>
        <div className={classes.inputBox}>
            <label htmlFor={props.input.id} className={classes.label}>{props.label} </label>
            <input ref={ref} className={classes.input} {...props.input} />
        </div>
    </React.Fragment>
})

export default Input;