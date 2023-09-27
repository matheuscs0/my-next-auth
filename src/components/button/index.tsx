'use client'
import { ReactNode } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

type ButtonProps = {
    children: ReactNode,
    avatarIcon?: string | undefined
}

const SignInButton = ({children, avatarIcon}: ButtonProps) => {
  const {data: session } = useSession()
  console.log(session)

  return (
    <>
     {session ? (
     <div className='flex gap-5 items-center'>
        <button className='bg-blue-500 hover:bg-blue-700 transition-all text-white font-bold py-2 px-4 rounded'
          onClick={() => signOut()}
        >
            {children}
        </button>
        <img src={avatarIcon} alt="Avatar" className='w-10 h-10 rounded-full'></img>
     </div>) : (
      <div className='flex gap-5 items-center'>
        <button className='bg-blue-500 hover:bg-blue-700 transition-all text-white font-bold py-2 px-4 rounded'
          onClick={() => signIn('google')}
        >
          {children}
        </button>
        <img src={avatarIcon} alt="Avatar" className='w-10 h-10 rounded-full'></img>
      </div>
     )}
    </>
  )
}

export default SignInButton