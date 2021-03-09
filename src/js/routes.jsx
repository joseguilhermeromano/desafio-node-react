import React from 'react'
// import { Router, Route, Redirect, hashHistory } from 'react-router'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

import Login from './components/login.jsx'
import SignUp from './components/signup.jsx'
import error404 from './components/error404.jsx'

// export default props => (
//     <Router history={hashHistory}>
//         <Route path='/sign-in' component={Login} />
//         <Route path='/sign-up' component={SignUp} />
//         <Redirect from='*' to='/sign-in' />
//     </Router>
// )

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route
//       {...rest}
//       render={props =>
//         isAuthenticated() ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//         )
//       }
//     />
//   );

const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signin" component={Login} />
        <Route path="/signup" component={SignUp} />
        {/* <PrivateRoute path="/app" component={() => <h1>App</h1>} /> */}
        <Route path="*" component={error404} />
      </Switch>
    </BrowserRouter>
);

export default Routes;