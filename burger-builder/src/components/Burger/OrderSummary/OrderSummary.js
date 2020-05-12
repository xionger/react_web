import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            );
        });
    return (
        <Aux>
            <h3>Your order</h3>
            <p>The burger contains:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to checkout?</p>
            <Button
                btnType="Danger"
                clicked={props.clickCancel}>Cancel</Button>
            <Button 
                btnType="Success"
                clicked={props.clickContinue}>Continue</Button>
        </Aux>
    );
};

export default orderSummary;