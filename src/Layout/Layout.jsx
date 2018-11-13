import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const { Header, Sider, Content } = Layout;
import {Link,BrowserRouter as Router} from 'react-router-dom';
export default class MyLayout extends Component {
	constructor(props){
		super(props);
		this.state = { collapsed: false, };
    }

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	}

	render() {
		return (
			<Layout>
				<Sider trigger={null} collapsible collapsed={this.state.collapsed} breakpoint="lg">
					<div className="logo" />
					<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
						<Menu.Item key="1"><Link to="/app1"> <Icon type="user" /> 		 	<span>nav 1</span></Link> 	</Menu.Item>
						<Menu.Item key="2"><Link to="/app2"> <Icon type="video-camera" />  	<span>nav 2</span> </Link>	</Menu.Item>
						<Menu.Item key="3"><Link to="/app3"> <Icon type="upload" /> 	 	<span>nav 3</span> </Link>	</Menu.Item>
						<SubMenu key="sub1" title={<span><Icon type="user" />				<span>User</span></span>} >
							<Menu.Item key="4"><Link to="/app4"> <Icon type="laptop" /> 		<span>nav 4</span> </Link></Menu.Item>
							<Menu.Item key="5"><Link to="/app5"> <Icon type="notification" /> 	<span>nav 5</span> </Link></Menu.Item>
						</SubMenu>
					</Menu>
				</Sider>
				<Layout>
					<Header style={{ background: '#fff', padding: 0 }}>
						<Icon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle} />
					</Header>
					<Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
						{this.props.children}
					</Content>
				</Layout>
			</Layout>
		);
	}
}
