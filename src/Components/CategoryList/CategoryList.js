import axios from 'axios';
import React, { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi'

const CategoryList = () => {
    const [categoryData, setCategoryData] = useState([])

    axios.get('/data.json')
        .then(res => setCategoryData(res.data))

    return (
        <div>
            <div className='bg-blue-800 rounded-lg h-40 w-2/4 py-auto items-center mx-auto'>
                <div>
                    <h1 className='pt-6'>My Customers</h1>
                </div>
                <BiArrowBack  className=' ml-10'/>
            <input type="text" placeholder="Type here" className="input input-bordered input-accent w-1/2" />
                <button className='btn btn-success'>Submit</button>
            </div>
            <div className='text-black w-3/4 mt-10 mx-auto'>
                {
                    categoryData.map(data=>
                        <div className='flex shadow-lg mb-8 py-3 text-left justify-evenly gap-10 mx-auto' key={data.id}>
                            <h1 className='justify-start items-center'><span className='py-8 px-8 rounded-md bg-slate-300'>{data.username}</span></h1>
                            <div>
                            <h1 className='justify-start'>{data.name}</h1>
                            <h1 className='justify-start'>{data.email}</h1>
                            </div>
                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default CategoryList;