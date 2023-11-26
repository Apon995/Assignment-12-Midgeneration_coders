import React from 'react'
import searchingDuck from '../assets/searching.gif'

function AxiosError({ error }) {


    return (
        <>

            <div className='flex items-center justify-center w-full min-h-[70vh] text-center'>

                <div>
                    <img src={searchingDuck} />
                    <h1 className='text-2xl py-3 text-black font-medium'>{error || 'Data Not found !'}</h1>
                </div>

            </div>








        </>
    )
}

export default AxiosError