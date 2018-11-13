import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './login.less';
const FormItem = Form.Item;

export class HorizontalLoginForm extends Component {
	// handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	this.props.form.validateFields((err, values) => {
	// 		if (!err) {
	// 			console.log('Received values of form: ', values);
	// 		}
	// 	});
	// }

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div id="components-form-demo-normal-login">
				<Form  className="login-form">
					<FormItem>
						{
							getFieldDecorator('userName', {rules: [{ required: true, message: '请输入用户名' }],})
							(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />)
						}
					</FormItem>
					<FormItem>
						{
							getFieldDecorator('password', {rules: [{ required: true, message: '请输入密码' }],})
							(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />)
						}
					</FormItem>
					<FormItem>
						{
							getFieldDecorator('remember', {valuePropName: 'checked',initialValue: true,})
							(<Checkbox>记住密码</Checkbox>)}
							<a className="login-form-forgot" href="">Forgot password</a>
							<Link  to="/Index">登录</Link>  
							<Link to="/Register">注册</Link>
					</FormItem>
				</Form>
			</div>
		);
	}
}
const Login = Form.create()(HorizontalLoginForm);
export default Login