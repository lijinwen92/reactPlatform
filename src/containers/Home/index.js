import React from 'react'
import {Layout, Menu, Breadcrumb, Icon} from 'antd'
import {Link} from 'react-router-dom'
import menuObj from './menu'

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

class Home extends React.Component {

    render() {
        console.log(this,111)
        const menuLoop = menuObj => menuObj.map(menu => {
            if (menu.child) {
                return <SubMenu
                    key={menu.id}
                    title={
                        <span>{menu.title}</span>
                    }
                >{menuLoop(menu.child)}</SubMenu>
            }
            return <Menu.Item key={menu.id}>{menu.title}</Menu.Item>
        })

        return (
            <Layout>
                <Header className="header">
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{lineHeight: '64px', display: "inline-block"}}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                    <Link to="/login">登录</Link>
                </Header>
                <Layout>
                    <Sider width={200} style={{background: '#fff'}}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%', borderRight: 0}}
                        >
                            {menuLoop(menuObj)}
                        </Menu>
                    </Sider>
                    <Layout style={{padding: '24px 24px'}}>
                        <Content
                            style={{
                                background: '#fff',
                                padding: 20,
                                margin: 0,
                            }}
                        >
                            Content
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default Home