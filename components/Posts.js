import Post from "./Post"
import { useState, useEffect } from "react"
import { collection, onSnapshot, query, orderBy } from "@firebase/firestore"
import { db } from "../firebase"

function Posts() {
  const [posts, setPosts] = useState([]);

  // Attach a listener to the backend db
  useEffect(() => {
    // Firebase provides a snapshot listener
    // Grab all posts in 'posts' collection
    // Order it by the timestamp
    return onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
      setPosts(snapshot.docs);
    });
  }, [db])

  return (
    <div>
      {posts.map(post => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  )
}

export default Posts
