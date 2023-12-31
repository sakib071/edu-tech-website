import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('user logged out successfully'))
            .catch(error => console.error(error))
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/courses">Courses</NavLink></li>
        {!user && <li><NavLink to="/register">Register</NavLink></li>}
    </>
    return (
        <div>
            <div className="navbar p-6 bg-base-100 justify-evenly">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Edu Tech</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu space-x-5 menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>

                <div className="navbar-end space-x-5">
                    {
                        user ? <>
                            <span>{user.displayName}</span>
                            <button className="btn btn-neutral btn-sm px-4"><NavLink to="/profile">Profile</NavLink></button>
                            <a onClick={handleLogOut} className="btn btn-sm">Sign out</a>
                        </>
                            : <Link to="/login">
                                <button className="btn btn-sm">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;