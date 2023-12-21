import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="-mt-28">
            <div className="relative">
                <img className="w-full relative" src="https://i.ibb.co/J2dz3H9/task-management-concept-banner-header-vector-24529046.jpg" alt="" />
                <div className='absolute top-0 bg-gradient-to-r from-[#151515] to-[#15151500] w-full h-full text-white'>
                    <motion.div initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: "2", delay: "0" }} className='absolute right-28 left-16 md:left-24 2xl:left-60 space-y-1 md:space-y-3 top-16 lg:space-y-5 md:top-20 lg:top-32 xl:top-80'>
                        <h1 className="text-white text-sm md:text-2xl lg:text-3xl md:w-1/2 lg:w-full font-bold">Effortless Task Mastery, Anytime, Anywhere</h1>
                        <p className="text-xs hidden md:flex lg:text-base w-1/2 lg:w-1/4">Streamline your workflow with our intuitive Task Management Platform, designed for seamless collaboration and unmatched productivity.</p>
                        <div>
                            <Link to="/dashboard"><button className="md:py-2 md:px-3 py-1 px-2 rounded-lg bg-[#b63327] lg:px-5 text-xs text-white md:text-sm lg:text-base lg:py-3 font-semibold hover:bg-[#860a92] hover:text-white">Let's Explore</button></Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner;