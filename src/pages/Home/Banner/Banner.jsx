import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="-mt-28">
            <div className="relative">
                <img className="w-full relative object-cover xl:h-[915px]" src="https://i.ibb.co/FVmL1Bf/empty-card-coffee-top-view.jpg" alt="" />
                <div className='absolute top-0 bg-gradient-to-r from-[#151515] to-[#15151500] w-full h-full text-white'>
                    <motion.div initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: "2", delay: "0" }} className='absolute right-28 left-16 md:left-24 2xl:left-60 space-y-1 md:space-y-3 lg:space-y-5 top-32 md:top-44 lg:top-56 xl:top-96'>
                        <h1 className="text-white text-sm md:text-2xl lg:text-3xl md:w-1/2 lg:w-full font-bold">Effortless Task Mastery, Anytime, Anywhere</h1>
                        <p className="text-xs hidden md:flex lg:text-base w-1/2 lg:w-1/4">Streamline your workflow with our intuitive Task Management Platform, designed for seamless collaboration and unmatched productivity.</p>
                        <div>
                            <Link to="/dashboard"><button className="md:py-2 md:px-3 py-1 px-3 rounded hover:bg-white hover:text-black border lg:px-5 text-xs text-white md:text-sm lg:text-base lg:py-3 font-semibold">Let's Explore</button></Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner;