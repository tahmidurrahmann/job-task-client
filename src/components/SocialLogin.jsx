import { FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const SocialLogin = () => {

    let navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const { googleLogin, githubLogin } = useAuth();

    const handleGoogleLogin = () => {
        googleLogin()
        .then(() => {
            toast.success("Google Sign in successful")
            navigate(from, { replace: true })
        })
        .catch(error => {
            toast.error(error?.message)
        })
    }

    const handleGithubLogin = () => {
        githubLogin()
        .then(()=>{
            toast.success("Github SignIn successful")
            navigate(from, { replace: true })
        })
        .catch(error => {
            toast.error(error?.message);
        })
    }

    return (
        <div className="text-white w-1/2 mx-auto">
            <p onClick={handleGoogleLogin} className="flex gap-4 justify-center items-center uppercase py-3 hover:bg-white hover:text-[#0d243e] active:bg-white active:text-[#0d243e] border-2 border-white rounded-xl text-white font-bold">sign in with<FaGoogle size={24} /></p>
            <p onClick={handleGithubLogin} className="mt-4 flex gap-4 justify-center items-center uppercase py-3 hover:bg-white hover:text-[#0d243e] active:bg-white active:text-[#0d243e] border-2 border-white rounded-xl text-white font-bold">sign in with<FaGithub size={24} /></p>
        </div>
    );
};

export default SocialLogin;