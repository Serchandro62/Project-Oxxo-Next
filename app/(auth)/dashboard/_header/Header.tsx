import Image from "next/image"

export default function Header(){
    return (
        <div className="w-screen bg-orange-200 flex flex-row items-center px-10">
            <Image src="/oxxo-logo-svg" alt={""} width={100} height={0} draggable={false}/>
        </div>
    )
}