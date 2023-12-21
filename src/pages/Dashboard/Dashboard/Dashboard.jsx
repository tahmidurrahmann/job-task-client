import { NavLink, Outlet } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { MdOutlineDescription } from "react-icons/md";

const Dashboard = () => {

    const { user } = useAuth();

    return (
        <div>
            <Helmet>
                <title>Dashboard | SCC Technovision Inc.</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="col-span-1 md:col-span-4 xl:col-span-2">
                    <div className="bg-gray-50 md:min-h-screen">
                        <div className='flex items-center justify-center'>
                            <img className="w-[60px]" src="https://i.ibb.co/dDmDt9z/360-F-479498833-ZB8t-Dfb-Ve5-VCuzq-PPJAUu0-PP391v-NCSq.png" alt="" />
                            <h1 className='text-black font-bold text-sm uppercase'>Technovision Inc.</h1>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 p-6">
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img referrerPolicy="no-referrer" src={user?.photoURL} />
                                </div>
                            </div>
                            <h1 className="text-xl font-semibold">{user?.displayName}</h1>
                        </div>
                        <div>
                            <div className="flex flex-col  space-y-4 pt-4 justify-center items-center">
                                <NavLink
                                    to="/dashboard/createTask"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-blue-500 bg-white w-full text-xl font-semibold py-3 text-center" : "text-black text-xl font-semibold text-center"
                                    }
                                >
                                    <span className="flex justify-center items-center gap-2 md:gap-0.5 lg:gap-2"><FaPlus />Create Task</span>
                                </NavLink>
                                <NavLink
                                    to="/dashboard/taskDetails"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-blue-500 bg-white w-full text-xl font-semibold py-3 text-center" : "text-black text-xl font-semibold text-center"
                                    }
                                >
                                    <span className="flex justify-center items-center gap-2 md:gap-0.5 lg:gap-2"><MdOutlineDescription />Task Details</span>
                                </NavLink>
                                <NavLink
                                    to="/dashboard/previousTask"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-blue-500 bg-white w-full text-xl font-semibold py-3 text-center" : "text-black text-xl font-semibold text-center"
                                    }
                                >
                                    <span className="flex justify-center items-center gap-2 md:gap-0.5 lg:gap-2"><AiOutlineAppstore />All Tasks</span>
                                </NavLink>
                            </div>
                        </div>
                        <div className="divider w-3/4 mx-auto"></div>
                        <div className="flex justify-center items-center pb-3 md:pb-0">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-500 bg-white w-full text-xl font-semibold md:py-3" : "text-black text-xl font-semibold"
                                }
                            >
                                <span className="flex justify-center items-center gap-2 md:gap-0.5 lg:gap-2"><IoHomeOutline /> Home</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-8 xl:col-span-10">
                    <Outlet></Outlet>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;