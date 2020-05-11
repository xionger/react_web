import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Aux';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
    };

    purchaseHandler = () => {
        this.setState({purchasing: true}); 
    }

    cancelPurchaseHandler = () => {
        this.setState({purchasing: false});
    }

    updatePurchaseStatus (ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        
        this.setState({purchasable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const count = 1 + this.state.ingredients[type];
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = count;
        const price = this.state.totalPrice + INGREDIENT_PRICE[type];
        this.setState({ingredients: updatedIngredients, totalPrice: price});
        this.updatePurchaseStatus(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount >= 1) {
            const count = oldCount - 1;
            const updatedIngredients = {...this.state.ingredients};
            updatedIngredients[type] = count;
            const price = this.state.totalPrice - INGREDIENT_PRICE[type];
            this.setState({ingredients: updatedIngredients, totalPrice: price});
            this.updatePurchaseStatus(updatedIngredients);
        }
    }

    render() {
        const disableInfo = {...this.state.ingredients};
        for(let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.cancelPurchaseHandler}>
                    <OrderSummary ingredients={this.state.ingredients}></OrderSummary>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabled={disableInfo}
                    ordered={this.purchaseHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;