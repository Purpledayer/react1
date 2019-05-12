import React, { Component } from 'react';
import { Layout, Menu, Icon ,Badge ,Popover, Avatar} from 'antd';

const SubMenu = Menu.SubMenu;
const { Header, Sider, Content } = Layout;
import {Link} from 'react-router-dom';
import './layout.less'

import shouye from './../assets/icon/shouye.svg'
import siyouyun from './../assets/icon/siyouyun.svg'
import gongyouyun from './../assets/icon/gongyouyun.svg'
import rongqi from './../assets/icon/rongqi.svg'
import xiangmu from './../assets/icon/xiangmu.svg'
import jifei from './../assets/icon/jifei.svg'
import quanxian from './../assets/icon/quanxian.svg'

const content = (
	<div>
	  <p>Content</p>
	  <p>Content</p>
	</div>
  );

 


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
				<Sider trigger={null} className='layout-sider-background' collapsed='true' breakpoint="lg">
					<div className="logo logo-layout" />
					<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
						<Menu.Item key="1" title="">
							<Link to="/app1"><img src={shouye} /><span>首页</span></Link> 	
						</Menu.Item>
						<SubMenu key="sub1" title={<span><img src={siyouyun} /> <span>私有云</span></span>} >
							<Menu.Item key="2">
								<Link to="/app4"> <Icon type="laptop" /> 		<span>nav 4</span> </Link>
							</Menu.Item>
							<Menu.Item key="3">
								<Link to="/app5"> <Icon type="notification" /> 	<span>nav 5</span> </Link>
							</Menu.Item>
						</SubMenu>
						<Menu.Item key="4">
							<Link to="/app3"> <img src={gongyouyun} /><span>公有云</span> </Link>	
						</Menu.Item>
						<Menu.Item key="5">
							<Link to="/app3"> <img src={rongqi} /><span>容器服务</span> </Link>	
						</Menu.Item>
						<Menu.Item key="6">
							<Link to="/app3"> <img src={xiangmu} /><span>项目管理</span> </Link>	
						</Menu.Item>
						<Menu.Item key="7">
							<Link to="/app3"> <img src={jifei} /><span>计费模式</span> </Link>	
						</Menu.Item>
						<Menu.Item key="8">
							<Link to="/app3"> <img src={quanxian} /><span>权限管理</span> </Link>	
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header style={{ background: '#fff', padding: 0 }}>
						{/* <Icon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle} /> */}
						{/* 			超过 overflowCount 的会显示为 ${overflowCount}+，默认的 overflowCount 为 99 */}
						<div style={{float:'right'}}>
							<Badge count={99} overflowCount={10} showZero className="ant-badge-header">

								<a href="#" className="head-example" ><Icon type="bell" /></a>
							</Badge>
							<Popover trigger="hover" placement="bottom"  content={content} >
								<Avatar icon="user" />用户名<Icon type="caret-down" />
							</Popover>
						</div>
						
					</Header>
					<Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
						{this.props.children}
					</Content>
				</Layout>
			</Layout>
		);
	}
}
