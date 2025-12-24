import {createBrowserRouter} from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer.jsx";
import Layout from "../components/Layout/Layout.jsx";
import Login from "../components/Login.jsx";

export const router= createBrowserRouter([

    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path: 'login',
                element:<Login/>
            }
        ]
    }
]);