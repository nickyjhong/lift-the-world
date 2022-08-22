// import React, { useState } from 'react';
// import { createUser } from '../store/allUsers';
// import { useDispatch } from "react-redux";
// import { useHistory } from 'react-router-dom';

// const CreateUser = (props) => {
//   const dispatch = useDispatch();
//   const history = useHistory();

//   let [user, setUser] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     username: '',
//     password: '',
//   })

//   const handleChange = (event) => {
//     event.preventDefault();
//     setUser({
//       ...user,
//       [event.target.name]: event.target.value
//     })
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     dispatch(createUser(user))
//     setUser({
//       firstName: '',
//       lastName: '',
//       email: '',
//       username: '',
//       password: '',
//     })
//     history.push({
//       pathname: '/'
//     })
//   }

//   return (
//     <div className="create-form form">
//       <form onSubmit={handleSubmit}>
//         <div className="signup-container">
//             <p className="signup-title">Sign up for Lift the World</p>
//             <div className="form-container">
//               <label className="form-label">first name</label>
//               <div className="form-input-container">
//                 <input
//                   className="form-input"
//                   type="text"
//                   name="firstName"
//                   placeholder="First name"
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="form-container">
//               <label className="form-label">last name</label>
//               <div className="form-input-container">
//                 <input
//                   className="form-input"
//                   type="text"
//                   name="lastName"
//                   placeholder="Last name"
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="form-container">
//               <label className="form-label">email</label>
//               <div className="form-input-container">
//                 <input
//                   className="form-input"
//                   type="text"
//                   name="email"
//                   placeholder="Email"
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="form-container">
//               <label className="form-label">username</label>
//               <div className="form-input-container">
//                 <input
//                   className="form-input"
//                   type="text"
//                   name="username"
//                   placeholder="Username"
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="form-container">
//               <label className="form-label">password</label>
//               <div className="form-input-container">
//                 <input
//                   className="form-input"
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div className="signup-btn-container">
//               <button className="button signup-btn" type="submit">
//                 Sign Up
//               </button>
//               <p className="form-disclaimer">Disclaimer</p>
//             </div>
//         </div>
//       </form>
//     </div>
//   )}

// export default CreateUser;