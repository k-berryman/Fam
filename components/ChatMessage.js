import { useState, useEffect } from "react"

function ChatMessage({ text, createdAt, username, userImage }) {

  return (
    <div>
      <div className="flex my-5">
        <img src={ userImage } className="rounded-full aspect-auto mr-2 scale-75"/>

        <div className="flex-direction-row">
          <h1>{ username }</h1>
          <h1 className="bg-slate-200 w-40 break-words text-xl rounded">{ text } </h1>
          <p></p>


        </div>
      </div>
    </div>
  )
}

export default ChatMessage
