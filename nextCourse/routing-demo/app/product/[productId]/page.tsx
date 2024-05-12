import { metadata } from "@/app/layout"
import { Metadata } from "next"
type props = {
    params: {
        productId: String
    }

}
export const generateMetadata = async ({ params }: props): Promise<Metadata> => {
    const titile = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iphone ${params.productId}`)
        }, 100)
    })
    return {
        title: `product ${titile}`
    }
}
export default function ProductDetails({ params }: props) {
    return (
        <div>product details page {params.productId}</div>
    )
}
