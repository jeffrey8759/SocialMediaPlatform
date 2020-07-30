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
        	{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        	<Switch>
          	<Route path="/login">
            	<Login />
          	</Route>
          	<Route path="/register">
            	<Register />
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
        <h1> Sign in </h1>
        <form action="action_page.php" method="post">
          <div class="imgcontainer">
          </div>

          <div class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required/>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>

            <button type="submit">Login</button>
            <label id='rem'>
              <input type="checkbox" name="remember"/> Remember me
            </label>
          </div>
        </form>
        <div class="container" style={{backgroundColor:'#f1f1f1'}}>
          <a href='/'><button>Cancel</button></a>
          <span class="psw">Forgot <a href="#">password?</a></span>
        </div>
      </div>
    )
  }
}

function Home() {
  return(
    <div class='intro-page'>
      <h1>EveryBoard</h1>
      <h2>Welcome</h2>
      <nav>
        <ul>
          <a href='/login'><button>Login</button></a>
          <a href='/register'><button>Register</button></a>
        </ul>
      </nav>
    </div>
  )
}

function About() {
  return <h2>About</h2>;
}

function Register() {
  return <h2>Register</h2>;
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);

