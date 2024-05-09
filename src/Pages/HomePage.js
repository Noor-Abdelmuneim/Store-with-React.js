import React, { useContext } from 'react'
import Context from '../Store/Index';
import ProductsList from '../Components/ProductsList';

export default function HomePage() {
    const { products, setSortType } = useContext(Context);
    return (
        <div>HomePage : <ProductsList prods={products} setSortType={setSortType} /></div>
    )
}
