import Image from "next/image";
import {
  HeartIcon,
  MenuIcon,
  CalendarIcon,
  ChatAltIcon,
  UserCircleIcon,
  PlusCircleIcon,
  CogIcon
} from "@heroicons/react/outline";
import {
  HomeIcon
} from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router"
import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtom"

function Header() {
  const { data: session } = useSession();
  // console.log(session)
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto py-4'>
        {/* Left - Display App Name */}
        <div onClick={() => router.push('/')} className='relative hidden lg:inline-grid h-30 w-32'>
          <Image
            src='https://links.papareact.com/ocw'
            layout='fill'
            objectFit='contain'
          />
        </div>

        {/* Left - Display App Icon */}
        <div onClick={() => router.push('/')} className='relative lg:hidden h-10 w-10 flex-shrink-0 cursor-pointer'>
          <Image
            src='https://links.papareact.com/jjm'
            layout='fill'
            objectFit='contain'
          />
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={() => router.push('/')} className="navBtn"/>
          <MenuIcon className="h-6 md:hidden cursor-pointer"/>

          {session ? (
            <>
              <CalendarIcon onClick={() => router.push('/calendar')} className="navBtn"/>
              <div className="relative navBtn">
                <ChatAltIcon onClick={() => router.push('/messaging')} className="navBtn"/>
                <div className="absolute -top-2 -right-3 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
              </div>
              <UserCircleIcon onClick={() => router.push('/profile')} className="navBtn"/>
              <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn"/>
              <CogIcon onClick={signOut} className="navBtn"/>
              <button className="text-blue-400 text-sm font-semibold" onClick={signOut}>Sign Out</button>
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>

      </div>
    </div>
  )
}

export default Header
