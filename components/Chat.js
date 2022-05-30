import { db } from "../firebase"
import ChatMessage from "./ChatMessage"
import { useState, useEffect } from "react"
import { addDoc, collection, onSnapshot, deleteDoc, query, orderBy, serverTimestamp, doc, setDoc } from "@firebase/firestore"

function Chat() {
  const [messages, setMessages] = useState([]);

  // Attach a listener to the backend db
  useEffect(() => {
    // Firebase provides a snapshot listener
    // Grab all posts in 'posts' collection
    // Order it by the timestamp
    console.log("im trtying")
    return onSnapshot(query(collection(db, 'messages'), orderBy('createdAt', 'desc')), snapshot => {
      setMessages(snapshot.docs);
    });
  }, [db])

  return (
    <div>
      {messages.map(msg => (
        <ChatMessage
          key={msg.id}
          id={msg.id}
          text={msg.data().text}
        />
      ))}
    </div>
  )
}

export default Chat
