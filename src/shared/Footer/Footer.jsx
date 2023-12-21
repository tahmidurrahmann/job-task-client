import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-100">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="flex justify-center text-teal-600">
                        <div className='flex items-center justify-center'>
                            <img className="w-[60px]" src="https://i.ibb.co/dDmDt9z/360-F-479498833-ZB8t-Dfb-Ve5-VCuzq-PPJAUu0-PP391v-NCSq.png" alt="" />
                            <h1 className='text-black font-bold text-sm uppercase'>Technovision </h1>
                        </div>
                    </div>

                    <p className="mx-auto mt-4 max-w-md text-center leading-relaxed text-gray-500">
                        A task management system is a software application or platform designed to help individuals or teams organize, track, and complete tasks efficiently.
                    </p>

                    <ul className="mt-6 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                        <li>
                            <Link to="/" className="text-gray-700 transition hover:text-gray-700/75"> Home </Link>
                        </li>
                        <li>
                            <Link className="text-gray-700 transition hover:text-gray-700/75" to="/dashboard"> Dashboard </Link>
                        </li>
                        <li>
                            <Link className="text-gray-700 transition hover:text-gray-700/75" to="/login"> Login </Link>
                        </li>

                        <li>
                            <Link className="text-gray-700 transition hover:text-gray-700/75" to="/register"> Register </Link>
                        </li>
                    </ul>

                    <div className="flex justify-center items-center gap-6 pt-8">
                        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/tahmidur-rahmann/"><FaLinkedin size={23}></FaLinkedin></a>
                        <a rel="noreferrer" target="_blank" href="https://github.com/tahmidurrahmann"><FaGithub size={23}></FaGithub></a>
                        <a rel="noreferrer" target="_blank" href="https://www.facebook.com/tahmidurrahmann/"><FaFacebookF size={23}></FaFacebookF></a>
                        <a rel="noreferrer" target="_blank" href="https://www.instagram.com/tahmidurahmann/"><FaInstagram size={23}></FaInstagram></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;