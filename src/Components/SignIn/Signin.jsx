
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UsersContexts";






const Signin = () => {

  const { loginUser, continueWithGoogle } = useContext(AuthContext)

  const handleSignInUser = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    loginUser(email, password)
      .then(result => {
        const loggedInUser = result.user
        form.reset()
        if (loggedInUser.uid) {
          alert('user login successfully done')
        }
      })
      .catch(error => {
        console.log(error)
      })

  }
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="shadow-xl px-5 py-8 rounded-md">
          <form onSubmit={handleSignInUser}>

            <input type="email" name="email" id="" placeholder="Enter your email" className="input border-2 border-gray-300 w-96 mb-3" /> <br /><br />


            <input type="password" name="password" id="" placeholder="Enter your password" className="input border-2 border-gray-300 w-96 mb-3" /> <br /><br />


            <div className="flex justify-between">
              <Link title='create account' to='/register' className="link link-hover">New to website?</Link>
            </div>
            <input type="submit" className="w-full btn btn-neutral mt-4" value="Login" />
            <div className='flex justify-between'>
              <button onClick={() => continueWithGoogle()} className=" btn btn-neutral mt-4">Continue with Google</button>
              <button className="btn btn-neutral mt-4">Continue with Github</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
