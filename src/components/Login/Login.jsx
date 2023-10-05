import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>
            <Header></Header>
            <div className="hero h-[80vh] bg-base-100">
                <div className="hero-content flex-col lg:flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>

                    <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">
                        <div className="card flex-shrink-0 w-[70vw] max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text" >Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text" >Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;