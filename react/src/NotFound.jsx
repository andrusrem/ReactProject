import React from 'react';

const NotFound = () => {
    return <div className='grid w-screen mt-10% mb-20%'>
        <div className='justify-self-center text-center'>
            <h6 className='text-red text-7xl'>#404</h6>
            <p className='mt-2 text-red text-xl'>Woups someone stole this page <br /> or <br /> it not existed at all...</p>
        </div>
    </div>
}

export default NotFound;