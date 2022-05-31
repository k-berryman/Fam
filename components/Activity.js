import Stories from "./Stories";
import Posts from "./Posts";
import { useSession } from "next-auth/react";

function Activity() {
  const { data: session } = useSession();

  return (
    <div>
      {session && (
        <div className="grid grid-cols-1 md:max-w-3xl xl:max-w-4xl mx-auto">
          {/* Posts & Comments */}
          <Posts />
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

export default Activity
