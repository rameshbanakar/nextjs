import React from 'react'

export default function ProductDetails({params}:{params:{productId:string}}) {
    return (
        <div>product details page {params.productId}</div>
    )
}
