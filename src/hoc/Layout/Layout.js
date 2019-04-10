import React, { Component } from 'react';
import Aux from '../Sig/Sig';
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }


    drawerToggledHandler = () => {
        this.setState({ showSideDrawer: !this.state.SideDrawer })
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.drawerToggledHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
};


export default Layout;