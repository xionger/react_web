import React from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';

const layout = (props) => (
    <Aux>
        <div className="Content">Toolbar, SideDrawer, BackDrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;