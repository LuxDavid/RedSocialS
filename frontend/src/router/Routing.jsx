import {createBrowserRouter} from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer.jsx";
import Layout from "../components/Layout/Layout.jsx";
import Login from "../components/Login.jsx";
import { Authorization, AuthorizationPublic } from "../helpers/Auth.jsx"; 
import {redirect, Link} from "react-router-dom";

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
            },
            {
                path:'*',
                element:<>
        |          <h1>Eror 404 pagina no encontrada</h1>
                    <Link to="/">Vover al inicio</Link>
                </>
            }
        ]
    }
]);