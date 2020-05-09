import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Aux';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            cheese: 2,
            meat: 2,
            bacon: 1
        }
    };

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Builder Control</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;