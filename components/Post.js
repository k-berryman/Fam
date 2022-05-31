import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"
import { useState, useEffect } from "react"
import { addDoc, collection, onSnapshot, deleteDoc, query, orderBy, serverTimestamp, doc, setDoc } from "@firebase/firestore"
import { useSession } from "next-auth/react"
import { db } from "../firebase"
import Moment from "react-moment"

function Post({ id, username, userImg, img, caption }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const { data: session } = useSession();
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  // COMMENTS
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, 'posts', id, 'comments'),
          orderBy('timestamp', 'desc')
        ),
        snapshot => setComments(snapshot.docs)
      ),
      [db, id]
    );

    // LIKES
    useEffect(
      () =>
        onSnapshot(collection(db, 'posts', id, 'likes'),
          snapshot => setLikes(snapshot.docs)
        ),
        [db, id]
      );

    useEffect(
      () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1
      ),
      [likes]
    );

  const sendComment = async (e) => {
    // Prevent page from refreshing when trying to submit a comment
    e.preventDefault();

    const commentToSend = comment;
    setComment('');

    // Go into db, posts collection, post with id, comments field
    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp()
    })
  }

  // In likes, IDs are user IDs - one like per user
  const likePost = async () => {
    if(hasLiked) {
      // delete like
      await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid));
    } else {
      await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
        username: session.user.username
      })
    }


  }

  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* Header */}
      <div className="flex items-center p-5">
        <img src={userImg} className="rounded-full h-12 w-12 object-contain border p-1 mr-3" alt="" />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5"/>
      </div>

      {/* img */}
      <img src={img} className="object-cover w-full" alt="" />

      {/* Buttons */}
      <div className="flex justify-between px-4 py-4">
        <div className="flex space-x-4">
          {
            hasLiked ? (
              <HeartIconFilled onClick={likePost} className="btn text-red-500" />
            ) : (
              <HeartIcon onClick={likePost} className="btn" />
            )
          }
          <ChatIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/* Likes & Caption */}
      <p className="p-5 truncate">
        { likes.length > 0 && (
          <p className="font-bold mb-1">{likes.length} likes</p>
        )}
        <span className="font-bold mr-1">{username} </span>
        {caption}
      </p>

      {/* Comments */}
      {comments.length > 0 && (
        <div className="ml-10 h-10 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map(comment => (
            <div key={comment.id} className="flex items-center space-x-2 mb-3">
              <img className="h-7 rounded-full" src={comment.data().userImage} alt="" />
              <p className="text-sm flex-1">
                <span className="font-bold">
                  {comment.data().username}{" "}
                </span>{comment.data().comment}
              </p>

              <Moment fromNow className="pr-5 text-xs">
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}

      {/* Input Box */}
      <form className="flex p-4 items-center">
        <EmojiHappyIcon className="h-7"/>
        <input
          type="text"
          value={comment}
          onChange={e => setComment(e.target.value)}
          className="border-none flex-1 focus:ring-0"
          placeholder="Add a comment..."
        />
        <button
          type="submit"
          disabled={!comment.trim()}
          className="font-semibold text-blue-400"
          onClick={sendComment}
        >
          Post
        </button>
      </form>

    </div>
  )
}

export default Post
