import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillShareFill, BsThreeDotsVertical } from 'react-icons/bs'

const UnlimitedProducts = () => {

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const qr = await fetch('productData.json')
            const result = await qr.json()
            return result
        }
    })
    console.log(products)

    return (
        <div className='text-black w-3/4 mx-auto'>
            <div className='bg-blue-800 text-white py-10'>
                <h1>Catalogue</h1>
                <div className='flex justify-evenly'>
                    <Link className='shadow-md px-2 py-1'><h1>Products</h1></Link>
                    <Link className='shadow-md px-2 py-1'><h1>Categories</h1></Link>
                </div>
            </div>
            <div className='text-black'>
                {
                    products.map(product => <>
                        <div key={product._id} className=' w-2/4 mx-auto py-3 mb-10 gap-5 bg-slate-200'>
                            <div className='flex justify-evenly'>
                                <div>
                                    <img className='h-40 w-40' src={product.picture} alt="" />
                                </div>
                                <div>
                                    <h1>Name: {product.name}</h1>
                                    <strong>Price: {product.balance}</strong>
                                </div>
                                <div className=''>
                                    <h1><BsThreeDotsVertical className='text-black mb-16' /> </h1>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <input type="checkbox" className="toggle" checked />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='btn btn-outline btn-primary'>
                                <h1 className='flex items-center gap-5'><BsFillShareFill /> shear now</h1>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default UnlimitedProducts;