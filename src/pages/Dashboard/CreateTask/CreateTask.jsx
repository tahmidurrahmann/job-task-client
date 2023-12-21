import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const CreateTask = () => {

    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();

    const {
        register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        const title = data.title;
        const description = data.description;
        const deadline = data.deadline;
        const priority = data.priority;
        const email = user?.email;
        const taskData = { title, description, deadline, priority, email };
        const res = await axiosSecure.post("/createTask", taskData);
        if (res?.data?.insertedId) {
            Swal.fire({
                title: "Good job!",
                text: "You created a Task!",
                icon: "success"
            });
            reset();
        }
    }


    return (
        <div className="px-12">
            <Helmet>
                <title>Create Task | SCC Technovision Inc.</title>
            </Helmet>
            <h1 className="text-2xl md:text-3xl font-bold p-6 text-center md:text-left">Create Task</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-6">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-lg">Title</span>
                    </label>
                    <input {...register("title", { required: true })}
                        type="text" placeholder="Title" className="input input-bordered" />
                    {errors.title?.type === "required" && (
                        <p className="text-red-600">Title is required</p>
                    )}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-lg">Description</span>
                    </label>
                    <textarea {...register("description", { required: true })}
                        className="border rounded-lg p-6" placeholder="Write your description here!" cols="30" rows="10"></textarea>
                    {errors.description?.type === "required" && (
                        <p className="text-red-600">Description is required</p>
                    )}
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
                    <div className="form-control flex-1 w-full">
                        <label className="label">
                            <span className="label-text font-bold text-lg">Deadlines</span>
                        </label>
                        <input className="py-3 border rounded-lg" type="date" {...register("deadline", { required: true })} />
                        {errors.deadline?.type === "required" && (
                            <p className="text-red-600">Deadline is required</p>
                        )}
                    </div>
                    <div className="form-control flex-1 w-full">
                        <label className="label">
                            <span className="label-text font-bold text-lg">Priority</span>
                        </label>
                        <select {...register("priority", { required: true })} className="py-3 border rounded-lg">
                            <option value="Low">Low</option>
                            <option value="Moderate">Moderate</option>
                            <option value="High">High</option>
                        </select>
                        {errors.priority?.type === "required" && (
                            <p className="text-red-600">Priority is required</p>
                        )}
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="py-3 rounded-lg bg-[#b63327] text-white font-semibold hover:bg-white hover:text-[#b63327] hover:border hover:border-[#b63327]" type="submit" value="Create Task" />
                </div>
            </form>
        </div>
    );
};

export default CreateTask;