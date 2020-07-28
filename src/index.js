import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Main extends React.Component {
  render() {
    return (
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
		)
	}	
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);

