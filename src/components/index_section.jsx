
import React from 'react'

export default class IndexSection extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
		console.log(this.props);
		return (
			<section>
				<h1>这是index.js里面的index_section组件</h1>
          		<h1>{this.props.name}</h1>
          		<h1>{this.props.age}</h1>
			</section>
		);
    }
}
  
