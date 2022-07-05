import { useSession } from "next-auth/react";
import Profile from "./Profile";
import ProfileNoInput from "./ProfileNoInput";

function AllProfiles() {
  const { data: session } = useSession();


  return (
    <div>
      {session && (
        <div className="">
          <Profile userImage={session.user.image} username={session.user.username}/>
          <ProfileNoInput />
        </div>
      )}

      {!session && (
        <div className="text-9xl">
          <h1>Please Sign In</h1>
        </div>
      )}

    </div>
  )
}

export default AllProfiles
