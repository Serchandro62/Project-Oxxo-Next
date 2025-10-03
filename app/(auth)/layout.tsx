import React from "react"
import Image from 'next/image'

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    
    return (
        <div className="bg-orange-200 w-screen h-screen overflow-hidden grid">
            <div className="pla ce-content-center place-self-center place-items-center">
                <Image src="/oxxo-logo.svg" alt="Logo de Oxxo" width={150} height={0} className="place-self-center self-center justify-self-center mb-4" />
                {children}
            </div>
        </div>
    )
}