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
            {controls.map(ct => (
                <BuildControl 
                    key={ct.label} 
                    label={ct.label}
                    added={() => props.addIngredient(ct.type)} />
            ))}
        </div>
    );
}

export default buildControls;