import React from 'react'
import Banner from '../components/Banner/Banner'

function Home({openPok}) {
    return (
        <>
            <Banner {...openPok}/>
        </>
    )
}

export default Home
