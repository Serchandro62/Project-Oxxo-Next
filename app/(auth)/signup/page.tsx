import { Button, Input } from "@heroui/react";
import Link from "next/link";

export default function SignUpPage() {
    return (
        <>
            <div className="bg-orange-500 px-10 py-2 rounded-md">
                <p className="text-2xl my-4 text-white text-center">Registrarse</p>
                <div className="flex flex-col gap-2 my-4">
                    <Input className="bg-white rounded overflow-hidden px-1 py-2" placeholder="Email" type="email" isRequired={true} size="sm" />
                    <Input className="bg-white rounded overflow-hidden px-1 py-2" placeholder="Contraseña" type="password" isRequired={true} size="sm" />
                    <Input className="bg-white rounded overflow-hidden px-1 py-2" placeholder="Repetir contraseña" type="password" isRequired={true} size="sm" />
                </div>
                
                <div className="flex flex-col items-center gap-2">
                    <Button color="primary" className="bg-blue-700 rounded px-5 py-2 text-white">Registrarse</Button>
                    <p>¿Ya tienes una cuenta? <Link href="./login" className="text-white underline">Inicia sesión</Link></p>
                </div>
            </div>
        </>
    )
}