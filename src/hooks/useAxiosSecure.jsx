import axios from "axios";

const axiosSecure = axios.create({
    baseURL : "https://job-task-server-wine.vercel.app"
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;