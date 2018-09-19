import React from 'react'

export default class SubPage extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		console.log(this.props.match);
		return (
			<div>
				<h1>
					这是subpage.js。为article页面
					
				</h1>
			</div>
		);
	}
}
