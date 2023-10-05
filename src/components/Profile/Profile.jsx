import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {

    const { user } = useContext(AuthContext);
    return (
        <div className="hero h-screen">
            <div className="hero-content flex-col lg:flex-row text-center">
                {
                    user && <div className="card w-[30vw] bg-base-100 shadow-xl p-5 text-left">
                        <img src={user.photoURL} className="w-32 rounded-lg shadow-sm mb-5" />
                        <h1 className="text-xl font-bold">{user.displayName}</h1>
                        <p className="text-md font-semibold">Email: {user.email}</p>
                        <p className="text-md font-semibold">Registered Courses: {user.email}</p>
                        <button className="btn btn-neutral mt-6">Update Profile</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default Profile;