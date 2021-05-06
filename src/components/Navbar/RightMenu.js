import { Menu, Icon, Grid } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup


const { useBreakpoint } = Grid;

const RightMenu = () => {
    const { md } = useBreakpoint();
    return ( 
        <Menu mode={md ? "horizontal" : "inline"}>
            <Menu.Item key="login">
                <a href="/login">Log in</a>
            </Menu.Item>
            <Menu.Item key="cart">
                <a href="/cart"><ShoppingCartOutlined /></a>
            </Menu.Item>
        </Menu>
     );
}
 
export default RightMenu;