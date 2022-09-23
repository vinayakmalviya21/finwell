// import React, { useState } from "react";
// import "./login.module.css";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";

// const Login = () => {
//   const handleClick = () => {
//     var element = document.getElementById("container");
//     element.classList.add("right-panel-active");
//   };
//   const handleClick2 = () => {
//     var element = document.getElementById("container");
//     element.classList.remove("right-panel-active");
//   };
//   const [values, setValues] = useState({
//     name: "",
//     email: "",
//     pass: "",
//   });
//   const [errorMsg, setErrorMsg] = useState("");
//   const handleSignUp = () => {
//     console.log(values);
//     if (!values.name || !values.email || !values.pass) {
//       setErrorMsg("Fill all fields");
//       return;
//     }
//     setErrorMsg("");

//     createUserWithEmailAndPassword(auth, values.email, values.pass)
//       .then((res) => {
        
//       })
      
//       .catch((err) => {
//         setErrorMsg(err.message);
//       });
//   };
//   const handleSubmission = () => {
//     if (!values.email || !values.pass) {
//       setErrorMsg("Fill all fields");
//       return;
//     }
//     setErrorMsg("");

//     signInWithEmailAndPassword(auth, values.email, values.pass)
//       .then((res) => {
        

//       })
//       .catch((err) => {
//         setErrorMsg(err.message);
//       });
//   };
//   return (
//     <div>
//       <div className="container" id="container">
//         <div className="form-container sign-up-container">
//           <form action="#">
//             <h1>Create Account</h1>
//             <input
//               type="text"
//               onChange={(event) =>
//                 setValues((prev) => ({ ...prev, name: event.target.value }))
//               }
//               placeholder="Name"
//             />
//             <input
//               type="email"
//               onChange={(event) =>
//                 setValues((prev) => ({ ...prev, email: event.target.value }))
//               }
//               placeholder="Email"
//             />
//             <input
//               type="password"
//               onChange={(event) =>
//                 setValues((prev) => ({ ...prev, pass: event.target.value }))
//               }
//               placeholder="Password"
//             />
//             <b> {errorMsg} </b>
//             <button onClick={handleSignUp}>Sign Up</button>
//           </form>
//         </div>
//         <div className="form-container sign-in-container">
//           <form action="#">
//             <h1>Sign in</h1>
//             <input type="email" placeholder="Email" />
//             <input type="password" placeholder="Password" />
//             <a href="#">Forgot your password?</a>
//             <b> {errorMsg} </b>
//             <button onClick={handleSubmission}>Sign In</button>
//           </form>
//         </div>
//         <div className="overlay-container">
//           <div className="overlay">
//             <div className="overlay-panel overlay-left">
//               <h1>Welcome Back!</h1>
//               <p>
//                 To keep connected with us please login with your personal info
//               </p>
//               <button className="ghost" onClick={handleClick2} id="signIn">
//                 Sign In
//               </button>
//             </div>
//             <div className="overlay-panel overlay-right">
//               <h1>Hello, Friend!</h1>
//               <p>Enter your personal details and start journey with us</p>
//               <button className="ghost" onClick={handleClick} id="signUp">
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
