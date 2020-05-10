import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' }
];
const buildControls = (props) => {
    return (
        <div className="BuildControls">
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ct => (
                <BuildControl 
                    key={ct.label} 
                    label={ct.label}
                    added={() => props.addIngredient(ct.type)}
                    removed={() => props.removeIngredient(ct.type)}
                    disabled={props.disabled[ct.type]} />
            ))}
        </div>
    );
}

export default buildControls;