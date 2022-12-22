import React from 'react';
import Card from '../UI/Card/Card';
import AvailableFood from './AvailableFood';
import FoodSummary from './FoodSummary';
import classes from './FoodSummary.module.css'

const Food = () =>{
    return <React.Fragment>
        <Card className={classes.summary}>
            <FoodSummary />
        </Card>
            <AvailableFood />
    </React.Fragment>
}

export default Food;