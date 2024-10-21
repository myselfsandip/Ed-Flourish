import { Link } from "react-router-dom";

function Register() {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-base-200">
            <div className="card w-full max-w-sm shadow-xl bg-base-100">
                <div className="card-body">
                    <h2 className="card-title justify-center">Register</h2>

                    <form>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Email or Username</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your email or username"
                                className="input input-bordered"
                            />
                        </div>

                        <div className="form-control mb-6">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="input input-bordered"
                            />
                            
                        </div>
                        <div className="form-control mb-6">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="input input-bordered"
                            />
                            
                        </div>

                        <div className="form-control">
                            <button type="submit" className="btn btn-primary">
                                Register
                            </button>
                        </div>
                        <div className="text-center mt-3">
                            <Link to="/login" className="hover:underline">Already a User ? Login here</Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
