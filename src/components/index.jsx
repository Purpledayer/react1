import  React ,{ Component }from 'react';
import { Link } from 'react-router-dom'
import IndexSection from './index_section';
// 引入axios
import {axiosGet} from '../util/axios';
import { Button } from 'antd';
import './../assets/style/less'

export default class Index extends Component{
	constructor(props){
		super(props);
		this.state = {name:"IndexSection自身的state:name1111",age:"IndexSection自身的state:age"};
	};
	componentDidMount(){
		axiosGet("/data/cityinfo/101010100.html",function(result){
		  console.log(result);
		});
	};
	render(){
		console.log(111111,this.props.children);
		return (
			<div>
				<h1>这是index.js</h1>
				<IndexSection name={this.state.name} age={this.state.age}/>
				<Link to="/SubPage">asdassd</Link> 
				<Link to="/admin">admin</Link> 
				<Button type="primary">Primary</Button>
			</div>
		);
	}
}