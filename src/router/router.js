import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import PostDetail from "../components/Posts/PostDetail";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/all-post',
        element: <Home/>
    },
    {
        path: '/post/:id',
        element: <PostDetail/>
    },

])

export default router;