import { useSession } from "next-auth/react";
import Profile from "./Profile";
import ProfileNoInput from "./ProfileNoInput";

function AllProfiles() {
  const { data: session } = useSession();

  // console.log(session)

  return (
    <div>
      {session && (
        <div className="grid grid-cols-1 md:max-w-3xl xl:max-w-6xl mx-auto">  
          <Profile />
          <ProfileNoInput />
        </div>
      )}

      {!session && (
        <div className="text-9xl">
          <h1>LOG IN, PLEASE</h1>
        </div>
      )}

    </div>
  )
}

export default AllProfiles
