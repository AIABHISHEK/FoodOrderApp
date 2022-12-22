
import React from 'react'
import ReactDOM from 'react-dom'
import Backdrop from './Backdrop'
import classes from './Modal.module.css'

const ModalOverLay = (props) => {
    return <div className={classes.modal}>
        <div className={classes['modal-container']}>
            {props.children}
        </div>
    </div>
}

const Modal = (props) => {
    return <React.Fragment>
        {ReactDOM.createPortal(<Backdrop hideCartHandler={props.hideCartHandler}></Backdrop>, document.getElementById('overlay'))}
        {ReactDOM.createPortal(<ModalOverLay >{props.children}</ModalOverLay>, document.getElementById('overlay'))}
    </React.Fragment>
    
}

export default Modal;