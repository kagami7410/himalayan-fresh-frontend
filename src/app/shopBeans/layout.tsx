import React from 'react'

const layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <>
                <h2 className='flex justify-center'>Shop Beans</h2>
                {children}

            </>
        </div>
    )
}

export default layout
