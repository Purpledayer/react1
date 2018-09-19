import React from 'react'
import IndexSection from './index_section'

export default class Index extends React.Component{
	constructor(props){
		super(props);
		this.state = {name:"IndexSection自身的state:name1111",age:"IndexSection自身的state:age"};
	  }
	render(){
		return (
			<div>
				<h1>这是index.js</h1>
				<IndexSection name={this.state.name} age={this.state.age}/>
			</div>
		);
	}
}