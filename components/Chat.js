import { db } from "../firebase"
import ChatMessage from "./ChatMessage"
import { useState, useEffect } from "react"
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "@firebase/firestore"

function Chat(props) {
  const [messages, setMessages] = useState([]);

  const uploadPost = async () => {
    // access the posts collection and add a document to the db
    const docRef = await addDoc(collection(db, 'messages'), {
      // the data that we're going to add as we push
      text: 'im in a code editor..',
      createdAt: serverTimestamp()
    });
  }


  return (
    <div>

      <div>
        {messages.map(message => (
          <ChatMessage
            messageId={message.id}
            text={message.text}
          />

        ))}

        <button onClick={uploadPost}>Refresh</button>
      </div>


    </div>
  )
}

export default Chat
