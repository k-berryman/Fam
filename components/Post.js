import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"

function Post({ id, username, userImg, img, caption }) {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center p-5">
        <img src={userImg} className="rounded-full h-12 w-12 object-contain border p-1 mr-3" alt="" />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5"/>
      </div>

      {/* img */}
      {/* Buttons */}
      {/* Caption */}
      {/* Comments */}
      {/* Input Box */}
    </div>
  )
}

export default Post
