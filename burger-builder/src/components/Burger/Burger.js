import React from 'react';
import BugerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css';

const burger = (props) => {
    return (
        <div className="Burger">
            <BugerIngredient type="bread-top" />
            <BugerIngredient type="bacon" />
            <BugerIngredient type="cheese" />
            <BugerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;