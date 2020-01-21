import React, {Component} from 'react';
import '../CSS/Login.css'
import Logo from '../cannon.svg';

class LoginContainer extends Component {
    render() {
        return(
            <div className="container">
                <div className="loginBox">
                    <div className="loginBoxHeader">
                        <h2>Login / Register</h2>
                    </div>
                    <div className="loginBoxBody">
                        <img src={Logo} width={100} height={100} alt="cannon"/>
                        <input type="text" placeholder="Username"/>
                        <input type="text" placeholder="Password"/>
                    </div>
                    <div class="loginBoxFooter">
                            <button>Login</button>
                            <p>No account? <a href="#">Register</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginContainer;