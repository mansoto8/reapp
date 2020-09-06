import React from "react";
import "./LoginComponent.css";

export default class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: "", password: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    render() {
        return (
        <div className="LoginComponent center">
            <h3>ReApp</h3>
            <form onSubmit={this.handleSubmit}>
                <div className="margin">
                    <label htmlFor="user" className="loginLabel">
                        User
                    </label>
                    <input
                        id="user"
                        onChange={this.handleUserChange}
                        value={this.state.user}
                    />
                </div>
                <div className="margin">
                    <label htmlFor="password" className="loginLabel">
                        Password
                    </label>
                    <input
                        id="password"
                        onChange={this.handlePasswordChange}
                        value={this.state.password}
                        type="password"
                    />
                </div>
                <button id="loginButton">
                    Login
                </button>
            </form>
        </div>
        );
    }

    handleUserChange(e) {
        this.setState({ user: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.user.length === 0 || this.state.password.length === 0) {
            return;
        }
        console.info("Submiting user ", this.state.user, this.state.password);
    }
}