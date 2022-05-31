import Stories from "./Stories";
import Posts from "./Posts";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router"

function Activity() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div>
      {session && (
        <div className="grid grid-cols-1 md:max-w-3xl xl:max-w-4xl mx-auto">
          {/* Posts & Comments */}
          <Posts />
        </div>
      )}

      {!session && (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 px-14 text-center  bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
        <div>
          Please click sign in :)
        </div>
        </div>
      )}
    </div>
  )
}

export default Activity
