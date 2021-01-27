import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/Friends'
import Login from './components/Login'

const App = () => {
    const logout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
      };
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link onClick={logout}>Logout</Link>
                    </li>
                    <li>{
                        (localStorage.getItem('token') && <Link to="/protected">Protected Page</Link>)
                        }
                    </li>
                </ul>

                <Switch>
                    <PrivateRoute exact path="/protected" component={Friends} />
                    <Route path="/login" component={Login} />
                    <Route component={Login} />
                </Switch>
                </div>
        </Router>
    )
}
export default App 
