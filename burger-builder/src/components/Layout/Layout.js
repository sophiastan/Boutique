import React from 'react';

import Contain from '../../hoc/Contain';
import classes from './Layout.css'

const layout = ( props ) => (
    <Contain>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Contain>
);

export default layout;