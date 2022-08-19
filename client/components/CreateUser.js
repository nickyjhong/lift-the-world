import React, { useState } from 'react';
import { createUser } from '../store/allUsers';
import { useDispatch } from "react-redux";

const CreateUser = (props) => {
  const dispatch = useDispatch();

  let [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
  })

  const handleChange = (event) => {
    event.preventDefault();
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createUser(user))
    setUser({
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
    })
  }

  return (
    <div className="create-form form div-container">
      <form onSubmit={handleSubmit}>
        <div className="form-container signup">
          <div className="signup-card">
            <p className="title">Sign Up</p>
            <div className="input-container">
              <label className="labelName">
                <input
                  className="input"
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="input-container">
              <label className="labelName">
                <input
                  className="input"
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="input-container">
              <label className="labelName">
                <input
                  className="input"
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="input-container">
              <label className="labelName">
                <input
                  className="input"
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="input-container">
              <label className="labelName">
                <input
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <button className="button submit-btn" type="submit">
                Create Account
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )}

export default CreateUser;