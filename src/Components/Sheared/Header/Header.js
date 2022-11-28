import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Link className='btn btn-primary' to='/'>Category List</Link>
            <Link className='btn btn-primary' to='/manage-orders'>Manage Orders</Link>
        </div>
    );
};

export default Header;