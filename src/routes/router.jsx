import  React ,{ Component }from 'react';
import { BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';

import Login from './../pages/Login/Login';
import Register from './../pages/Register/Register';
import MyLayout from './../Layout/Layout';

// test部分
import Index from './../pages/Test/index'
import App1 from './../pages/Test/index.1'
import App2 from './../pages/Test/index.2'
import App3 from './../pages/Test/index.3'
import App4 from './../pages/Test/index.4'
import App5 from './../pages/Test/index.5'

export default class AppRouter extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Login}></Route>
					<Route  path="/Register" component={Register}></Route> 
					<MyLayout>
						<Switch>
							<Route exact path="/Index" component={Index}></Route>
							<Route path="/app1" component={App1}></Route>
							<Route path="/app2" component={App2}></Route>
							<Route path="/app3" component={App3}></Route>
							<Route path="/app4" component={App4}></Route>
							<Route path="/app5" component={App5}></Route>
						</Switch>
					</MyLayout>
				</Switch>
			</Router>
		)
	}
}