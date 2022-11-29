import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
    const [data,setData]=useState([])
    return (
        <div className='gap-5'>
            <Link className='btn btn-primary' to='/'>Category List</Link>
            <Link className='btn btn-primary' setData={setData} to='/manage-orders'>Manage Orders</Link>
            <Link className='btn btn-primary' setData={setData} to='/unlimited-products'>Unlimited Product</Link>
            <Link className='btn btn-primary' to='/online-payments'>Online Payments</Link>
            <Link className='btn btn-primary' data={data} to='/orders'>Orders</Link>
        </div>
    );
};

export default Header;