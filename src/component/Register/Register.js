import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
 return (
  <div className="login-form">
   <div>
    <h2>Register: Create account</h2>
    <form onSubmit="">
     <input type="email" name="" id="" placeholder="your email" />
     <br /> <br />
     <input type="password" name="" id="" placeholder="your password" />
     <br /> <br />
     <input type="password" name="" id="" placeholder="re enter password" />
     <br /> <br />
     <input className="btn-regular" type="submit" value="Submit" />
    </form>
    <p>
     Already have an account? <Link to="/login">Login</Link>
    </p>
    <div>-----------------or----------------</div>
    <button className="btn-regular">Google Sign In</button>
   </div>
  </div>
 );
};

export default Register;
