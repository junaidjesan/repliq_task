import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='gap-5'>
            <Link className='btn btn-primary' to='/'>Category List</Link>
            <Link className='btn btn-primary' to='/manage-orders'>Manage Orders</Link>
            <Link className='btn btn-primary' to='/unlimited-products'>Unlimited Product</Link>
            <Link className='btn btn-primary' to='/online-payments'>Online Payments</Link>
        </div>
    );
};

export default Header;