import { useState, useEffect } from "react"
import ChatMessage from "./ChatMessage"

function Chat(props) {

  const [messages, setMessages] = useState([
    {
        senderId: "perborgen",
        text: "who'll win?"
    },
    {
        senderId: "janedoe",
        text: "who'll win?"
    }
  ]);

  return (
    <div>

      <div>
        {messages.map(message => (
          <ChatMessage
            senderId={message.senderId}
            text={message.text}
          />
        ))}
      </div>


    </div>
  )
}

export default Chat
