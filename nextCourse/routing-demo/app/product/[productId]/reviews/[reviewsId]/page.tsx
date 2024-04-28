import React from 'react'

export default function RevieswId({ params }: { params: { reviewsId: string; productId: string } }) {
    return (
        <div>
            Reviews{params.reviewsId} for the product {params.productId}
        </div>
    )
}
