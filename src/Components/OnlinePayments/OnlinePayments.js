import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { BsArrowLeft, BsArrowRight, BsInfoCircle, BsThreeDotsVertical } from 'react-icons/bs';

const OnlinePayments = () => {
    const [paymentsData, SetPaymentsData] = useState([])

    axios.get('productData.json')
        .then(res => SetPaymentsData(res.data))

    return (
        <div className='text-black w-3/6 mx-auto'>
            <div>
                <h1 className='flex py-10 bg-blue-800 text-white justify-around'>
                    <BsArrowLeft />
                    <strong>Online Payments</strong>
                    <BsInfoCircle />
                </h1>
            </div>
            <div>
                <h1 className='flex justify-between mb-3 rounded-sm border-2 border-gray-500 py-5 px-4'>Default Method <BsArrowRight /></h1>
                <h1 className='flex justify-between mb-3 rounded-sm border-2 border-gray-500 py-5 px-4'>Payment Profile <BsArrowRight /></h1>
            </div>
            <div className='bg-gray-200 py-8'>
                <h1 className='text-xl'>Payment OverView</h1>
                <div className='flex gap-5 mx-auto justify-center mt-4 text-white'>
                    <h1 className='bg-yellow-800 py-9 px-16'>
                        Available <br />
                        <strong>230$</strong>
                    </h1>
                    <h1 className='bg-green-800 py-9 px-16'>
                        Current <br />
                        <strong>230$</strong>
                    </h1>
                </div>
            </div>
            <div>
                <h1>TransCription</h1>
                <div>
                    {
                        paymentsData.map(payment =>
                            <div key={payment._id} className='mb-5 flex justify-evenly'>
                                <div>
                                    <img className='h-40 w-40' src={payment.picture} alt="" />
                                </div>
                                <div>
                                    <h1>Name: {payment.name}</h1>
                                    <strong>Price: {payment.balance}</strong>
                                </div>
                                <div className=''>
                                    <h1>{payment.balance}</h1>
                                    <div className="form-control flex gap-2">
                                        <input type="radio" name="radio-6" className="radio radio-primary" checked /><h1>Requested</h1>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default OnlinePayments;