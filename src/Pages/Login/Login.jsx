import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import swal from 'sweetalert';


const Login = () => {
    const [password, setPassword] = useState(null)
    const [email, setEmail] = useState(null)
    const [passwordError, setPasswordError] = useState(null)
    const [emailError, setEmailError] = useState(null)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const { logInUser, setLoading, googleSignIn, githubSignIn } = useContext(AuthContext)
    const handelSignIn = (e) => {
        e.preventDefault()
        setError('')
        if (emailError) {
            e.target.email.focus();
        }
        else if (passwordError) {
            e.target.password.focus();
        }
        logInUser(email, password)
            .then(result => {

                const loggedUser = result.user

                navigate(from, { replace: true })

                e.target.reset()
                swal("Good job!", "Login SuccessFull", "success")
                setError('')
                setLoading(false)

            })
            .catch(error => {

                setError(error.message)
            })
            .finally(() => {
                setLoading(false)

            })

    }
    const handelGoogleSign = () => {
        googleSignIn()
            .then(result => {
                navigate(from, { replace: true })


            })
            .catch(error => {

            })
    }
    const handelGithubSign = () => {
        githubSignIn()
            .then(result => {
                navigate(from, { replace: true })


            })
            .catch(error => {

            })
    }
    const handelEmailField = (e) => {
        const email = e.target.value
        setEmail(email)
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            setEmailError("Please provide a valid email")
        }
        else {
            setEmailError('')
        }

    }
    const handelPasswordField = (e) => {
        const password = e.target.value
        setPassword(password)
        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long");
        }
        else if (!/[A-Z]+.*/.test(password)) {
            setPasswordError("Password must contain at least one capital letter");
        }
        else if (!/.*\d+.*/.test(password)) {
            setPasswordError("Password must contain at least one Number");
        }
        else if (!/.*\W+.*/.test(password)) {
            setPasswordError("Password must contain at least one Special Character");
        }
        else {
            setPasswordError("");
        }
    }

    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content   w-full flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>

                    <div className="card flex-shrink-0 w-96 max-w-screen-md shadow-2xl bg-base-100">
                        <form onSubmit={handelSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onChange={handelEmailField} type="email" name='email' placeholder="email" className="input input-bordered" required />
                                {emailError && <><span className='text-red-500'> {emailError}</span></>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input onChange={handelPasswordField} type="password" name='password' placeholder="password" className="input input-bordered" required />
                                {passwordError && <><span className='text-red-500'> {passwordError}
                                </span></>}
                                <label className="label">

                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className='text-center mt-3 text-red-500  ' > {error} </p>
                        </form>
                        <p className='mb-4  text-center'>
                            <Link to="/register" className="label-text-alt link link-hover ">
                                Don't Have An Account ? <span className='text-green-600'>Please Register</span>
                            </Link>
                        </p>

                        <div>

                            <div className="flex w-full ">
                                <div className="grid h-20 flex-grow card rounded-box place-items-center ">
                                    <Link onClick={handelGoogleSign} > Google Sign In</Link>
                                </div>
                                <div className="divider divider-horizontal">OR</div>
                                <div className="grid h-20 flex-grow card  rounded-box place-items-center ">
                                    <Link onClick={handelGithubSign} > Github Sign In</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
