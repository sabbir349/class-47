import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../Context/UsersContexts';


const SignUp = () => {

    const { createUser, continueWithGoogle, continueWithGithub,updateUser ,verifyUser} = useContext(AuthContext)

    // password error

    const [passwordError,setPasswordError] = useState('')


    const handleCreateUser = (e) => {
        e.preventDefault()
        const form = e.target
        const firstName = form.firstName.value
        const lastName = form.lastName.value
        const fullName = firstName + " " + lastName
        const email = form.email.value
        const password = form.password.value

        // password regex

        if(!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
            setPasswordError('password should have Minimum eight characters, at least one uppercase letter,one number and one special character')
            return
        }
        setPasswordError('')

        createUser(email, password)
            .then(result => {
                const registeredUser = result.user
                form.reset()
                // update user 
                updateUser(fullName)
                // if (registeredUser.uid) {
                //     alert('user created successfully done')
                // }
                verifyUser()
                .then(()=>{
                    alert('check your email and verify the given link')
                })
            })
            .catch(error => {
                console.log(error)
            })

    }

   
    const signUpWithGoogle = () => {
        continueWithGoogle()
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>

            <div className="min-h-screen flex justify-center items-center">
                <div className="shadow-xl px-5 py-8 rounded-md max-w-4xl">
                    <form onSubmit={handleCreateUser}>

                        <input type="text" name="firstName" id="" placeholder="Enter your first name" className="input border-2 border-gray-300 w-96 mb-3" /> <br /><br />


                        <input type="text" name="lastName" id="" placeholder="Enter your last name" className="input border-2 border-gray-300 w-96 mb-3" /> <br /><br />


                        <input type="email" name="email" id="" placeholder="Enter your email" className="input border-2 border-gray-300 w-96 mb-3" /> <br /><br />


                        <input type="password" name="password" id="" placeholder="Enter your password" className="input border-2 border-gray-300 w-96 mb-1" /> <br /><br />

                        {
                            passwordError && <p className='text-red-500'>{passwordError}</p>
                        }

                        <div className="flex justify-between">
                            <Link title='please register' to='/signin' className="link link-hover">Already have an account?</Link>
                        </div>
                        <input type="submit" className="w-full btn btn-neutral mt-4" value="Register" />
                        <div className='flex justify-between'>
                            <button onClick={signUpWithGoogle} className=" btn btn-neutral mt-4">Continue with Google</button>
                            <button onClick={() => continueWithGithub()} className="btn btn-neutral mt-4">Continue with Github</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;