import React from 'react';
import {PokDialog} from '../components/PokDialog/PokDialog';
 import Productos from '../components/Productos/Productos';

 
function Products({openPok}) {
    return (
        <>

        
        <PokDialog {...openPok}/>
        <Productos {...openPok}/>
     
        </>

    )
}

export default Products
