import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../error/Error";
import Home from "../pages/Home/Home/Home";
import Login from "../shared/Login/Login";
import Register from "../shared/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import CreateTask from "../pages/Dashboard/CreateTask/CreateTask";
import PrivateRoute from "../private/PrivateRoute";
import PreviousTask from "../pages/Dashboard/PreviousTask/PreviousTask";
import Update from "../pages/Dashboard/Update/Update";
import TaskDetails from "../pages/Dashboard/TaskDetails/TaskDetails";
import Contact from "../pages/Contact/Contact";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path : "/contact",
                element : <PrivateRoute><Contact /></PrivateRoute>
            }
        ]
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path : "dashboard",
        element : <PrivateRoute><Dashboard /></PrivateRoute>,
        children : [
            {
                path : "createTask",
                element : <CreateTask />
            },
            {
                path : "previousTask",
                element : <PreviousTask />
            },
            {
                path : "update/:id",
                element : <Update />
            },
            {
                path : "taskDetails",
                element : <TaskDetails />
            },
        ]
    }
])

export default router;