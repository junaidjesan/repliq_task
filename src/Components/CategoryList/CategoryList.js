import React from 'react';

const CategoryList = () => {
    return (
        <div>
            <div className='bg-blue-800 h-40 w-2/4 items-center mx-auto'>
                <input type="text" placeholder='search here' className="input items-center my-auto input-bordered" />
                <button className='btn btn-success'>Submit</button>
            </div>
            <div className='text-black'>
                <div className="overflow-x-auto w-full">
                    <table className="table w-3/4 mx-auto">
                        
                        <tbody>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;