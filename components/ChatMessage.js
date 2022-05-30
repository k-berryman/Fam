import { useState, useEffect } from "react"

function ChatMessage({ senderId, text }) {

  return (
    <div>
      <h1>{ senderId }</h1>
      <h1>{ text } </h1>
    </div>
  )
}

export default ChatMessage
