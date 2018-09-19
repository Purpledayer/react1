import  React ,{ Component }from 'react';
import {BrowserRouter,Route,Switch } from 'react-router-dom'

import Index from '../components/index'
import SubPage from '../components/subpage'

// const Article = () =>(
//     <Switch>
//         <Route exact path="/article" component={SubPage}></Route>
//         <Route path="/article/:id" component={SubPage}></Route>
//     </Switch>
//   )
  
  export default class AppRouter extends Component {
      constructor(props) {
          super(props);
      }
      render() {
          return (
              <BrowserRouter>
                  <Switch>
                      <Route exact path="/" component={Index}></Route>
                      <Route path="/SubPage" component={SubPage}></Route>
                  </Switch>
              </BrowserRouter>
          )
      }
  }