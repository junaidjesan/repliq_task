import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import { BsThreeDotsVertical } from 'react-icons/bs'

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
                        <div className='flex'>
                            <div>
                                <img src={product.picture} alt="" />
                            </div>
                            <div>
                                <h1>{product.name}</h1>
                            </div>
                            <div>
                                <h1><BsThreeDotsVertical className='text-black' /> </h1>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <input type="checkbox" className="toggle" checked />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default UnlimitedProducts;