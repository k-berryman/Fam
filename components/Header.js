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

function Header() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className='flex justify-between mt-4 max-w-6xl mx-5 lg:mx-auto'>
        {/* Left - Display App Name */}
        <div className='relative hidden lg:inline-grid h-32 w-32'>
          <Image
            src='https://links.papareact.com/ocw'
            layout='fill'
            objectFit='contain'
          />
        </div>

        {/* Left - Display App Icon */}
        <div className='relative lg:hidden h-10 w-10 flex-shrink-0 cursor-pointer'>
          <Image
            src='https://links.papareact.com/jjm'
            layout='fill'
            objectFit='contain'
          />
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn"/>
          <CalendarIcon className="navBtn"/>
          <div className="relative navBtn">
            <ChatAltIcon className="navBtn"/>
            <div className="absolute -top-2 -right-3 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
          </div>
          <UserCircleIcon className="navBtn"/>
          <PlusCircleIcon className="navBtn"/>
          <CogIcon className="navBtn"/>

          <MenuIcon className="h-6 md:hidden cursor-pointer"/>

        </div>

      </div>
    </div>
  )
}

export default Header
