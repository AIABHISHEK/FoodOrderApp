import React from 'react';
import classes from './Header.module.css'
import foodImage from '../../components/assets/food4.jpg';
import Button from './Button';
const Header = (props) => {
    return <React.Fragment>
        <header className={classes.header}>
            <h3>
                APP Name
            </h3>

            {/* some search or other button */}
            <Button onClick={props.showCartHandler}></Button>
        </header>

        {/* add some image as to give look and feel of the  */}
        <div className={classes["main-image"]}>
            <img src={foodImage} alt ="food" />
        </div>
    </React.Fragment>
}

export default Header;