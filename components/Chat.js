import { db } from "../firebase"
import ChatMessage from "./ChatMessage"
import { useState, useEffect, useRef } from "react"
import { addDoc, collection, onSnapshot, deleteDoc, query, orderBy, serverTimestamp, doc, setDoc } from "@firebase/firestore"
import { useSession } from "next-auth/react"
import { ref } from "@firebase/storage"


function Chat() {
  const [messages, setMessages] = useState([]);
  const { data: session } = useSession();
  const messageRef = useRef(null);

  // Retrieve messages from firebase
  useEffect(() => {
    // Firebase provides a snapshot listener
    // Grab all posts in 'messages' collection
    return onSnapshot(query(collection(db, 'messages'), orderBy('createdAt')), snapshot => {
      setMessages(snapshot.docs);
    });
  }, [db])


  // Send message to Firebase
  const uploadMessage = async (e) => {
      // Prevent page from refreshing when trying to submit a message
      e.preventDefault();

      // Go into db, messages collection, post with id, comments field
      await addDoc(collection(db, 'messages'), {
        text: messageRef.current.value,
        createdAt: serverTimestamp(),
        username: session.user.username,
        userImage: session.user.image,
      })
  }


  const handleOnChange = e => {
    setM
  }

  const handleOnSubmit = e => {
    e.preventDefault()

  }


  return (
    <div>
      <div className="h-96 overflow-y-scroll -mt-4">
        {messages.map(msg => (
          <ChatMessage
            key={msg.id}
            text={msg.data().text}
            createdAt={msg.data().createdAt}
            username={msg.data().username}
            userImage={msg.data().userImage}
          />
        ))}
      </div>

      <div className="mt-2">
        <input
          className="border-none focus:ring-0 w-full text-center"
          type="text"
          ref={messageRef}
          placeholder="Please enter a caption..."
        />
      </div>

      <button
        type="button"
        onClick={uploadMessage}
        className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 mb-10 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300"
      >
      {"Upload Message"}
      </button>
    </div>
  )
}

export default Chat
