import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';


const Register = () => {
    const [password, setPassword] = useState(null)
    const [passwordError, setPasswordError] = useState(null)
    const [email, setEmail] = useState(null)
    const [emailError, setEmailError] = useState(null)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const nameRef = useRef()
    const urlRef = useRef()
    const { user, createUser, loggedOut, setUpdateProfile } = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault();
        setError('')
        if (emailError) {
            e.target.email.focus();
        }
        else if (passwordError) {
            e.target.password.focus();
        }

        createUser(email, password)
            .then(result => {
                const signUpUser = result.user

                setUpdateProfile(signUpUser, nameRef.current.value, urlRef.current.value)
                    .then(() => {

                    })
                    .catch(error => {
                        setError(error.message)
                    })

                loggedOut()
                    .then(() => {

                        navigate(`/login`)

                    })
                    .catch(error => {
                        setError(error.message)
                    })
                e.target.reset()
                setError('')


            })
            .catch(error => {

                setError(error.message)
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
        else if (!/[a-z]/.test(password)) {
            setPasswordError("Password must contain at least one LowerCase letter");
        }
        else if (!/[A-Z]+.*/.test(password)) {
            setPasswordError("Password must contain at least one UpperCase letter");
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
                <div className="hero-content w-full flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>

                    <div className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input ref={nameRef} type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input ref={urlRef} type="text" name='photoUrl' placeholder="photoUrl" className="input input-bordered" required />
                            </div>
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
                                {passwordError && <><span className='text-red-500'> {passwordError}</span></>}

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div>
                                <p className='text-center mt-3 text-red-500 mb-5' > {error} </p>
                            </div>
                            <p className='mb-4  text-center '>
                                <Link to="/login" className="label-text-alt link link-hover ">
                                    Have An Account ? <span className='text-green-600'>Please Login</span>
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;