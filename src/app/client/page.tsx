'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function ClientPage(){
    const router = useRouter()
    const {data: session } = useSession({
        required: true
    })
    console.log(session)

    return(
        <div className='w-full h-full flex items-center justify-center text-white'>
            <h1>Olá {session?.user?.name}</h1>
        </div>
    )
}