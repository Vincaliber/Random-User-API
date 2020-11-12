import React, { Component } from 'react'
import './Form.css';
import * as data from './users.json';
import Home from './Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    validate = (e) => {
        e.preventDefault();

        let userDetails = data.values;
        let username, password;

        userDetails.forEach((person) => {
            username = person.username;
            password = person.password
        }
        )

        let user = document.getElementById('username').value;
        let pass = document.getElementById('password').value;

        if (user === username && pass === password) {
            this.setState({
                isLoggedIn: true
            })
        }
    }

    render() {

        return (
            <div>

                <div className="container" id="formContainer">
                    <div className="col-md-12">
                        <h2>Random User</h2><br />
                        <div id="form">
                            {
                                this.state.isLoggedIn ? <Home /> : <form action="/Home" method="post" className="offset-md-3 col-md-6" onSubmit={this.validate}>
                                    <div className="container">

                                        <label htmlFor="uname"><b><FontAwesomeIcon icon={faUser} /> Username</b></label>
                                        <input type="text" placeholder="Enter Username" name="uname" required id="username" />

                                        <label htmlFor="psw"><b><FontAwesomeIcon icon={faKey} /> Password</b></label>
                                        <input type="password" placeholder="Enter Password" name="psw" required id="password" />

                                        <button type="submit">Login</button>

                                    </div>
                                </form>
                            }
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}





