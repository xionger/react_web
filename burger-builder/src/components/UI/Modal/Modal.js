import React from 'react';
import './Modal.css';

const modal = (props) => (
    <div className="Modal"
        style={{
            transform: props.show ? 'transformY(0)' : 'transformY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
        {props.children}
    </div>
);

export default modal;