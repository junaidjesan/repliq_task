import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';

const Orders = ({ data }) => {

    return (
        <div className='w-3/6 mx-auto text-black'>
            <div>
                <h1 className='flex py-10 bg-blue-800 text-white justify-around'>
                    <strong>Online Payments</strong>
                </h1>
            </div>
            <div>
                <div className='w-3/6 px-4 mb-10 py-7 text-black bg-slate-200 mx-auto'>
                    <div className='flex justify-between'>
                        <h1>Name: <strong>jhon khi</strong></h1>
                        <h1>today 5:20, 11-29-2022</h1>
                    </div>
                    <div className='mt-8 justify-between flex'>
                        <div className='flex gap-5'>
                            <p>
                                <h1>product name</h1>
                                <h1>user balance</h1>
                            </p>
                        </div>
                        <div>
                            <h1 className='font-bold py-1 mx-auto bg-red-300 rounded px-2'>PAID</h1>
                        </div>
                    </div>
                    <div className='mt-3 justify-evenly'>
                        <div>
                            <button className='btn btn-primary btn-outline'>Details</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-3/6 mx-auto'>
                <div className='flex justify-between text-left items-center'>
                    <h1>customer name</h1>
                    <h1>name</h1>
                </div>
                <div className='flex justify-between text-left items-center'>
                    <h1>mobile</h1>
                    <h1>5641313521</h1>
                </div>
                <div className='flex justify-between  text-left items-center'>
                    <h1>addres</h1>
                    <h1>hoibo kono ak jaigai</h1>
                </div>
                <div className='flex justify-between text-left items-center'>
                    <h1>product</h1>
                    <h1>dis ko </h1>
                </div>
                <div className='gap-5'>
                    <button className='btn btn-primary mr-3 btn-outline'>Accept Order</button>
                    <button className='btn btn-danger btn-outline'>Delay Order</button>
                </div>
            </div>
        </div>
    );
};

export default Orders;