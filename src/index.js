import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.css';


class Main extends React.Component {
  render() {
    return (
			<body>
			<Router>
      	<div>
        	<nav>
          	<ul>
            	<li>
              	<Link to="/">Home</Link>
            	</li>
            	<li>
              	<Link to="/login">Login</Link>
            	</li>
            	<li>
              	<Link to="/users">Users</Link>
            	</li>
          	</ul>
        	</nav>

        	{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        	<Switch>
          	<Route path="/login">
            	<Login />
          	</Route>
          	<Route path="/users">
            	<Users />
          	</Route>
          	<Route path="/">
            	<Home />
          	</Route>
        	</Switch>
      	</div>
    	</Router>
			</body>
		)
	}	
}

class Login extends React.Component {
  render() {
    return (
      <div class="login">
      <form action="action_page.php" method="post">
      <div class="imgcontainer">
      </div>

      <div class="container">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required/>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required/>

      <button type="submit">Login</button>
      <label>
      <input type="checkbox" name="remember"/> Remember me
      </label>
      </div>

      <div class="container" style={{backgroundColor:'#f1f1f1'}}>
      <button type="button" class="cancelbtn">Cancel</button>
      <span class="psw">Forgot <a href="#">password?</a></span>
      </div>
      </form>
      <div>
      <nav>
      <ul>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/login">Login</Link>
      </li>
      <li>
      <Link to="/users">Users</Link>
      </li>
      </ul>
      </nav>
      </div>
      </div>
    )
  }
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);

