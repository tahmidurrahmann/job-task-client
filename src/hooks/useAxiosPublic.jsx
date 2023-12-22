import axios from "axios";

const axiosPublic = axios.create({
    baseURL : "https://job-task-server-wine.vercel.app"
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;