import axios from 'axios';
import React, { useState } from 'react';
import { GoSettings } from 'react-icons/go'
import { AiOutlineStar } from 'react-icons/ai'

const ManageOrders = ({setData}) => {

    const [manageOrdersData, setManageOrdersData] = useState([])

    axios.get('productData.json')
        .then(res => {
            setManageOrdersData(res.data)
            setData(res.data)
        })
    return (
        <div className='text-black'>
            <div className='bg-blue-800 rounded-lg h-40 w-2/4 py-auto items-center mx-auto'>
                <div className='flex mt-4 items-center justify-evenly'>
                    <h1 className='pt-6 text-white'>All Orders</h1>
                    <GoSettings className='h-8 w-8 justify-evenly text-white' />
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered input-accent w-1/2" />
                <button className='btn btn-success'>Submit</button>
            </div>
            <div>
                {
                    manageOrdersData.map(data =>
                        <>
                            <div key={data._id} className='w-3/6 px-4 mb-10 py-7 bg-slate-200 mx-auto'>
                                <div className='flex justify-between'>
                                    <h1>Name: <strong>{data.name}</strong></h1>
                                    <h1>today 5:20, 11-29-2022</h1>
                                </div>
                                <div className='mt-8 justify-between flex'>
                                    <div className='flex gap-5'>
                                        <img className='h-40 w-40' src={data.picture} alt="" />
                                        <p>
                                            <h1>{data.name}</h1>
                                            <h1>{data.balance}</h1>
                                        </p>
                                    </div>
                                    <div>
                                        <h1 className='font-bold py-1 mx-auto bg-red-300 rounded px-2'>PAID</h1>
                                    </div>
                                </div>
                                <div className='mt-3 justify-evenly'>
                                    <div>
                                            <AiOutlineStar className='h-7 w-7' /> 
                                            <h1>Pending</h1>
                                            
                                    </div>
                                    <div>
                                            <button className='btn btn-primary btn-outline'>Details</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default ManageOrders;