'use client'
import { ReactNode } from 'react';
import SignInButton from '../button';
import { useSession } from 'next-auth/react'


type NavBarProps = {
    children: ReactNode;
}

const NavBar = ({children}: NavBarProps) => {
  const {data: session } = useSession()
  console.log(session)
    return (
      <>
        {session ? (
          <>
            <nav className="flex w-full max-w-full items-center justify-center text-white py-5">
                <ul className="flex items-center justify-between gap-10 text-xl p-5">
                  {children}
                </ul>
                <SignInButton  avatarIcon={`${session?.user?.image}`}>
                  Sair
                </SignInButton>
            </nav>
          </>
        ) : (
        <>
          <nav className="flex w-full max-w-full items-center justify-center text-white py-5">
            <ul className="flex items-center justify-between gap-10 text-xl p-5">
              {children}
            </ul>
            <SignInButton  avatarIcon="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fuser-avatar_3607444&psig=AOvVaw1M-hMQ5zL1cQ7mUlJxK6Fr&ust=1695425078499000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLj3gJPtvIEDFQAAAAAdAAAAABAO">
              Login
            </SignInButton>
          </nav>
        </>)}
      </>
    );
  };
  
  export default NavBar;
  