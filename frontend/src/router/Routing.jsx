import {createBrowserRouter} from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer.jsx";
import Layout from "../components/Layout/Layout.jsx";
import Login from "../components/Login.jsx";
import { Authorization, AuthorizationPublic } from "../helpers/Auth.jsx"; 

export const router= createBrowserRouter([

    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path: 'login',
                element:<Login/>,
                loader:AuthorizationPublic
            },
            {
                index:true,
                element:<ItemListContainer/>,
                loader: Authorization
            }
        ]
    }
]);