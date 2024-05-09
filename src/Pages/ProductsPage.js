import React, { useContext } from 'react'
import Context from '../Store/Index'
import ProductsList from '../Components/ProductsList';

export default function ProductsPage() {
    const { products, setSortType } = useContext(Context);
    return (
        <div>Product Page : <ProductsList prods={products} setSortType={setSortType} /></div>
    )
}
