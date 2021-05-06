import React, { Component } from 'react'
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button } from 'antd'

class Navbar extends Component {
    state = {
        current: 'home',
        visible: false
    }
    showDrawer = () => {
        this.setState({
            visible: true
        })
    }
    onClose = () => {
        this.setState({
            visible: false
        })
    }
  
    render() {
    return ( 
        <nav className="menuBar">
            <div className="header">
            <div className="logo" style={{float: 'left'}}>
                <a href="/">
                <img src="http://uftravel.com.sg/images/enlogo.png" />
                </a>
            </div>
            <div className="menuCon">
                <div className="leftMenu" style={{float: 'left'}}>
                    <LeftMenu/>
                </div>
                <div className="rightMenu" style={{float: 'right'}}>
                    <RightMenu/>
                </div>
                <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
                    <span className="barsBtn"></span>
                </Button>
                <Drawer
                title=""
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
                >
                 <LeftMenu/>
                 <RightMenu/>   
                </Drawer>
            </div>
            </div>
        </nav>
     );
    }
}
 
export default Navbar;