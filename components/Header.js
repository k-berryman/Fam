import Image from "next/image";
import {
  HeartIcon,
  MenuIcon,
  CalendarIcon,
  ChatAltIcon,
  PlusCircleIcon,
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
            src='https://www.designfreelogoonline.com/wp-content/uploads/2019/02/00580-Family-02.png'
            layout='fill'
            objectFit='contain'
          />
        </div>

        {/* Left - Display App Icon */}
        <div onClick={() => router.push('/')} className='relative lg:hidden h-10 w-10 flex-shrink-0 cursor-pointer'>
          <Image
            src='https://firebasestorage.googleapis.com/v0/b/famwebapp-abe61.appspot.com/o/heart.png?alt=media&token=57377a3b-46ac-4215-971c-960ec6ff2cd6'
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
              <ChatAltIcon onClick={() => router.push('/messaging')} className="navBtn"/>
              <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn"/>
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
