import Chat from "./Chat";
import { useSession } from "next-auth/react";

function ChatActivity() {
  const { data: session } = useSession();

  return (
    <div>
      {session && (
        <div className="grid grid-cols-1 md:max-w-3xl xl:max-w-6xl mx-auto">
          <Chat />
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

export default ChatActivity
