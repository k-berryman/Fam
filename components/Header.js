import Image from "next/image";

function Header() {
  return (
    <div>
      <div className='flex justify-between max-w-6xl'>
        {/* Left */}
        <div className='relative hidden lg:inline-grid h-24 w-24'>
          <Image
            src='https://links.papareact.com/ocw'
            layout='fill'
            objectFit='contain'
          />
        </div>

        <div className='relative lg:hidden h-10 w-10 flex-shrink-0 cursor-pointer'>
          <Image
            src='https://links.papareact.com/jjm'
            layout='fill'
            objectFit='contain'
          />
        </div>

        <h1>hey</h1>
        {/* Middle */}
        {/* Right */}
      </div>
    </div>
  )
}

export default Header
