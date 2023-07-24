
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import swal from "sweetalert";
const NavBar = () => {
    
    const { user, loggedOut, loading } = useContext(AuthContext) || {}
    const navigate = useNavigate()

    const handelLogOut = () => {
        loggedOut()
            .then(() => {
                swal('Good job!', 'LogOut Successful', 'success');
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div className="sticky top-0 z-10 bg-gray-200 ">
            <div className="navbar mx-auto  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact  dropdown-content mt-3 p-2 shadow  rounded-box w-52">

                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/colleges">Colleges</Link></li>
                            <li><Link to="/admission">Admission</Link></li>
                            <li><Link to="/myCollege">My College</Link></li>

                        </ul>
                    </div>
                    <Link to='/'> <p className=" normal-case text-xl font-semibold">EasyCollegeBookings</p></Link>
                </div>
                <div className="navbar-center hidden lg:flex  ">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/" className="text-lg">Home</Link></li>
                        <li><Link to="/colleges" className="text-lg">Colleges</Link></li>
                        <li><Link to="/admission" className="text-lg">Admission</Link></li>
                        <li><Link to="/myCollege" className="text-lg">My College</Link></li>

                    </ul>
                </div>

                <div className="navbar-end">
                    <div className="flex items-center space-x-4">
                        {!user && !loading && <>
                            <Link to='/login'><p className="btn  btn-accent text-sm md:text-md lg:text-md">Login</p></Link>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className=" w-12 h-12 rounded-full">
                                    <img src="https://i.ibb.co/3YZNVgN/pro.png" className="w-full h-full rounded-full" alt="User Avatar" />

                                </div>
                            </label>
                        </>
                        }
                        {
                            !user || loading && <>

                                <button className="btn loading">loading</button>

                            </>
                        }
                        {
                            user && !loading && <>
                                <Link to='/login'><p onClick={handelLogOut} className="btn btn-accent text-sm md:text-md lg:text-lg font">LogOut</p></Link>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className=" w-12 h-12 rounded-full">
                                        {
                                            user.photoURL == null && <img src="https://i.ibb.co/3YZNVgN/pro.png" className="w-full h-full rounded-full" alt="User Avatar" />
                                        }
                                        {user.photoURL && <img src={user.photoURL} className="w-full h-full rounded-full" alt="User Avatar" title={user.displayName} />}


                                    </div>
                                </label>
                            </>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;











