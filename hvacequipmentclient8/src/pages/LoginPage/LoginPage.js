import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPage.css';

export class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    mySubmitHandler = (event) => {
        this.userLogin();
        event.preventDefault();
    }

    userLogin() {
        //fetch('https://santaapi20191123012550.azurewebsites.net/auth/login', {
        fetch('https://localhost:44349/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Username: this.state.username,
                Password: this.state.password
            })
        })
            .then(res => res.json()).then(res => {
                localStorage.setItem('token', res.token);
                localStorage.setItem('credential', res.credential);
                localStorage.setItem('id', res.id);

                if (res.token) {
                    alert("Welcome to the HVAC List " + this.state.username);
                    if (localStorage.getItem('credential') === "Admin") {
                        window.location.href = '/list';
                    }
                    else if (localStorage.getItem('credential') === "Technician") {
                        window.location.href = '/displayAllEmployees';
                    }
                    else {
                        alert("Nothing Found");
                    }
                }
                else {
                    alert("Not a valid user or password");
                }
            }, function (error) {
                console.log(error.message); //=> String
            })
    }

    render() {
        return (

            <form onSubmit={this.mySubmitHandler}>

                <div className="form-group">
                    <h1>Log In</h1>
                    <label htmlFor="usr">User Name:</label>
                    <input
                        type='text'
                        className="form-control"
                        name='username'
                        onChange={this.myChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input
                        type="password"
                        name='password'
                        className="form-control"
                        autoComplete="password"
                        onChange={this.myChangeHandler}
                    />
                </div>

                <input className="btn btn-primary"
                    type='submit'
                    text='Login'
                />
            </form>
        );
    }
}

export default LoginPage;