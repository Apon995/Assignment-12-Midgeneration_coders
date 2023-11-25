import React from 'react'

function ServiceCart({ service }) {
    const { serviceName, servicePrice, serviceTools ,previousPrice } = service || {};
    return (
        <>

            <div id='servicebg'>
                <h4 className='text-3xl text-[#2a2a2a] font-bold h-[100px] '>{serviceName || 'Custom website'}</h4>
                <div className='flex flex-col gap-9'>
                    <div>
                        <span className='text-base text-[#ff695f] line-through font-medium'>{previousPrice || 7999}৳</span>
                        <br />
                        <span className='text-3xl text-[#ff695f] font-semibold'>{servicePrice || 90000}৳</span>
                    </div>
                    <ul id='servicecartUl'>
                        {
                            serviceTools?.map((tools, count) => <li key={count}>{tools}</li>)
                        }
                    </ul>
                    <div>
                        <button className='bg-[#2742fd] p-4 px-6 rounded-lg text-white  text-xl font-medium'>Buy Now</button>
                    </div>
                </div>
            </div>

















        </>
    )
}

export default ServiceCart