import React from 'react'
import { Oval } from 'react-loader-spinner'

function Loading() {
    return (
        <>

            <div className='flex items-center justify-center w-full min-h-[90vh]'>
                <Oval
                    height={80}
                    width={80}
                    color="black"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#adadad"
                    strokeWidth={5}
                    strokeWidthSecondary={4}

                />
            </div>
        </>
    )
}

export default Loading