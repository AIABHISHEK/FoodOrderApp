import { useContext } from 'react';

import FoodItem from './FoodItem/FoodItem';

import classes from './AvailableFood.module.css'
import Card from '../UI/Card/Card';

import * as alias from '../store/Cart-Context';

const foods = [
    {
        id: "a1",
        name: "Burger",
        description: "Burger of best quality"
    },
    {
        id: "a2",
        name: "Pizza",
        description: "Pizza of best quality with extra cheese"
    },
    {
        id: "a3",
        name: "Pasta",
        description: "Pasta of best quality"
    },
    {
        id: "a4",
        name: "samosa",
        description: "Samosa of best quality"
    }
];

const AvailableFood = () => {
    

    const foodList = foods.map((food) => <FoodItem key={food.id} id={food.id} name={food.name} description={food.description} price={43} ></FoodItem>);
    
    return <section className={classes.foodSection} >
        <Card>
            <ul className={classes.foodList}>
                {foodList}
            </ul>
        </Card>
    </section>;
}

export default AvailableFood;