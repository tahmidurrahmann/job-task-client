import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../error/Error";
import Home from "../pages/Home/Home/Home";
import Login from "../shared/Login/Login";
import Register from "../shared/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "../private/PrivateRoute";
import Update from "../pages/Dashboard/Update/Update";
import Contact from "../pages/Contact/Contact";
import TaskManagement from "../pages/Dashboard/TaskManagement/TaskManagement";
import Move from "../pages/Move/Move";
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
                path : "update/:id",
                element : <Update />
            },
            {
                path : "taskManagement",
                element : <TaskManagement></TaskManagement>
            },
            {
                path : "move/:id",
                element : <Move />
            }
        ]
    }
])

export default router;