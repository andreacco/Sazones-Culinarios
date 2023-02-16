import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import ProductCard from '../components/ProductCard/ProductCard';
import VerifyEmail from '../components/VerifyEmail/VerifyEmail';
import NotFound from "../components/NotFound";
import ProductDetail from "../components/ProductDetail";
import Layout from "../Layout";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: "/productos",
                element: <ProductCard/>,
            },
            {
                path: "/productos/search/:input",
                element: <ProductCard/>,
            },
            {
                path: "/confirmarEmail/:id",
                element: <VerifyEmail/>,
            },
        ],
    },
    {
        path: "/:id/:name",
        element: <ProductDetail/>,
    },
])