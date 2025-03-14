import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Context/UsersContexts';


const SignUp = () => {

    const { createUser, continueWithGoogle, continueWithGithub } = useContext(AuthContext)


    const handleCreateUser = (e) => {
        e.preventDefault()
        const form = e.target
        const firstName = form.firstName.value
        const lastName = form.lastName.value
        const email = form.email.value
        const password = form.password.value
        createUser(email, password)
            .then(result => {
                const registeredUser = result.user
                form.reset()
                if (registeredUser.uid) {
                    alert('user created successfully done')
                }
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
                <div className="shadow-xl px-5 py-8 rounded-md">
                    <form onSubmit={handleCreateUser}>

                        <input type="text" name="firstName" id="" placeholder="Enter your first name" className="input border-2 border-gray-300 w-96 mb-3" /> <br /><br />


                        <input type="text" name="lastName" id="" placeholder="Enter your last name" className="input border-2 border-gray-300 w-96 mb-3" /> <br /><br />


                        <input type="email" name="email" id="" placeholder="Enter your email" className="input border-2 border-gray-300 w-96 mb-3" /> <br /><br />


                        <input type="password" name="password" id="" placeholder="Enter your password" className="input border-2 border-gray-300 w-96 mb-3" /> <br /><br />


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