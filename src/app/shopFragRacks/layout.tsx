import React from 'react'

const layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div className='flex  flex-col  justify-items-center'>
            <>
                {/* <h2 className='flex justify-center p-2 m-2 bg-orange-300'>Free Delivery on order over £50</h2> */}
                {children}

            </>
        </div>
    )
}

export default layout
