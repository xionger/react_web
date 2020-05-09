import React from 'react';
import BugerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const tsIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        });
    return (
        <div className="Burger">
            <BugerIngredient type="bread-top" />
            {tsIngredients}
            <BugerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;