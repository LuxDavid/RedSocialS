import {createBrowserRouter} from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer.jsx";
import Layout from "../components/Layout/Layout.jsx";

export const router= createBrowserRouter([

    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<ItemListContainer/>
            }
        ]
    }
]);