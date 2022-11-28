import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import CategoryList from '../Components/CategoryList/CategoryList';
import ManageOrders from '../Components/ManageOrders/ManageOrders';
import UnlimitedProducts from '../Components/UnlimitedProducts/UnlimitedProducts';
import Main from '../Layouts/Main';


export const projectRouter=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<CategoryList></CategoryList>
            },
            {
                path:'/manage-orders',
                element:<ManageOrders></ManageOrders>
            },
            {
                path:'/unlimited-products',
                element:<UnlimitedProducts></UnlimitedProducts>
            }
        ]
    }
])

const Route = () => {

    return (
        <div>
            
        </div>
    );
};

export default Route;