import React from "react";
import { withRouter, Link } from "react-router-dom";
import './session.css';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errors !== prevState.errors) {
      return { errors: nextProps.errors };
    } else {
      return null;
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors });
    }
  }


  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.signup(user).then(() =>
      this.state.errors.length === 0
        ? this.props
            .login({
              email: this.state.email,
              password: this.state.password,
            })
        : null
    );
  }

  demoLogin() {
    let user = {
      email: "demo@demo.demo",
      password: "password",
    };
    this.props.login(user);
  }

  renderErrors() {
    return (
      <ul className="errors">
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-signup-main">
        <div className="signup-form-container">
          <h2>Signup</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="signup-form">
              <br />
              <label>
                Email
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  placeholder="Email"
                />
              </label>
              <br />
              <label>
                Password
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="Password"
                />
              </label>
              <br />
              <input
                className="btn-style-1 login-btn"
                type="submit"
                value="Submit"
              />
              <div id="demo-user-btn" onClick={() => this.demoLogin()}>
                {" "}
                Demo User{" "}
              </div>

              <br />
              <p className="or-submit">
                or{" "}
                <Link to="/login">
                  <span>Login</span>
                </Link>
              </p>
              <div className="error-container">{this.renderErrors()}</div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
