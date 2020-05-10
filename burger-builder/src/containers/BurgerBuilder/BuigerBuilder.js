import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Aux';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICE = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.2
}
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon: 0
        },
        totalPrice: 4
    };

    addIngredientHandler = (type) => {
        const count = 1 + this.state.ingredients[type];
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = count;
        const price = this.state.totalPrice + INGREDIENT_PRICE[type];
        this.setState({ingredients: updatedIngredients, totalPrice: price});
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount >= 1) {
            const count = oldCount - 1;
            const updatedIngredients = {...this.state.ingredients};
            updatedIngredients[type] = count;
            const price = this.state.totalPrice - INGREDIENT_PRICE[type];
            this.setState({ingredients: updatedIngredients, totalPrice: price});
        }
    }

    render() {
        const disableInfo = {...this.state.ingredients};
        for(let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabled={disableInfo} />
            </Aux>
        );
    }
}

export default BurgerBuilder;