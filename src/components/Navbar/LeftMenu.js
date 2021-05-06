import { Menu, Grid } from 'antd'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

const { useBreakpoint } = Grid;

const LeftMenu = () => {
    const { md } = useBreakpoint()

    return (
        <Menu mode={md ? "horizontal" : "inline"}>
            <Menu.Item key="home">
                <a href="/">Home</a>
            </Menu.Item>

            <SubMenu key="sub1" title={<span>Tour Packages</span>}>
                <MenuItemGroup>
                    <Menu.Item key="setting:1">Singapore</Menu.Item>
                    <Menu.Item key="setting:2">Trending Destinations</Menu.Item>
                </MenuItemGroup>
            </SubMenu>

            <Menu.Item>
                <a href="/air_tickets">Air Tickets</a>
            </Menu.Item>
            <Menu.Item>
                <a href="/bus_tickets">Bus Tickets</a>
            </Menu.Item>
            <Menu.Item>
                <a href="/hotels">Hotels</a>
            </Menu.Item>
            <Menu.Item>
                <a href="/contact">Contact Us</a>
            </Menu.Item>

            
        </Menu>
    );
}

export default LeftMenu;