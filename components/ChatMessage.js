import { useState, useEffect } from "react"

function ChatMessage({ messageId, text }) {

  return (
    <div>
      <h1>{ messageId }</h1>
      <h1>{ text } </h1>
    </div>
  )
}

export default ChatMessage
