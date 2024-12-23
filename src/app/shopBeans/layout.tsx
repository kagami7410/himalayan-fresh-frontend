import React from 'react'

const layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div className='flex border flex-col  justify-items-center'>
            <>
                <h2 className='flex justify-center'>Shop Beans</h2>
                {children}

            </>
        </div>
    )
}

export default layout
