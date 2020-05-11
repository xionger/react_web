import React from 'react';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
        <div className="Modal"
            style={{
                transform: props.show ? 'transformY(0)' : 'transformY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
);

export default modal;