import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../components/AboutUs/AboutUs";
import AllPost from "../components/AllPost/AllPost";
import Home from "../components/Home/Home";
import PostDetail from "../components/Posts/PostDetail";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/all-post',
                element: <AllPost/>
            },
            {
                path: '/post/:id',
                element: <PostDetail/>
            },
            {
                path: '/about-us',
                element: <AboutUs/>
            },
        ]
    }

])

export default router;