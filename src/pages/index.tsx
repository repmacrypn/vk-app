import React from 'react'

import { Loader } from 'src/components/Loader'

export const Pages = () => {
    return (
        <React.Suspense fallback={<Loader />}>

        </React.Suspense>
    )
}