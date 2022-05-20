import { useSession } from "next-auth/react"

function Story({ img, username }) {
  const { data: session } = useSession();

  // console.log(session)

  return (
    <div>
      <img
        className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration 200ms ease-out'
        //src={session?.user?.image}
        src='https://avatars.githubusercontent.com/u/13089398?v=4'
        alt='profile pic'/>
      <p
        className='text-xs w-14 truncate text-center'
      >
        {username}
      </p>
    </div>
  )
}

export default Story
