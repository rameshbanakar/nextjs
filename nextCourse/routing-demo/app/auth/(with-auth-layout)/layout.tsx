export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
            <h6> inner layout</h6>
        </>
       
    )
}