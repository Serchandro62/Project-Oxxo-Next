'use client'
import { API_URL } from "@/constants";
import { Button, Input } from "@heroui/react";
import axios from "axios";
import Link from "next/link";

export default function LoginPage(){
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as any);
        let authData: any = {}
        authData.userEmail = formData.get("userEmail");
        authData.userPassword = formData.get("userPassword"); 
        const {data} = await axios.post(`${API_URL}/users/login`,{
            ...authData
        },{
            withCredentials:true
        }); 
        console.log(data);
        return;
    }
    return (
        <>
            <form className="bg-orange-500 px-10 py-2 rounded-md" onSubmit={handleSubmit}>
                <p className="text-2xl my-4 text-white text-center">Iniciar Sesión</p>
                <div className="flex flex-col gap-2 my-4">
                    <Input name="userEmail" className="bg-white rounded overflow-hidden px-1 py-2" placeholder="Email" type="email" isRequired={true} size="sm" />
                    <Input name="userPassword" className="bg-white rounded overflow-hidden px-1 py-2" placeholder="Contraseña" type="password" isRequired={true} size="sm" />
                </div>
                
                <div className="flex flex-col items-center gap-2">
                    <Button type="submit" color="primary" className="bg-blue-700 rounded px-5 py-2 text-white">Iniciar Sesión</Button>
                    <p>¿No tienes cuenta? <Link href="./signup" className="text-white underline">Registrate</Link></p>
                </div>
            </form>
        </>
    )
}