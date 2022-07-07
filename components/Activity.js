import Stories from "./Stories";
import Posts from "./Posts";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router"
import { addDoc, collection, onSnapshot, deleteDoc, query, orderBy, serverTimestamp, doc, setDoc } from "@firebase/firestore"
import { useState, useEffect } from "react";
import { db } from "../firebase";



function Activity() {
  const { data: session } = useSession();
  const router = useRouter();

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [famCode, setFamCode] = useState('');
  const [loaded, setLoaded] = useState(false);

  // Retrieve profile data from firebase
  useEffect(() => {
    console.log('use effect starting')
    // Firebase provides a snapshot listener
    // Grab all posts in 'users' collection
    return onSnapshot(query(collection(db, 'users'), orderBy('createdAt')), snapshot => {
      setUsers(snapshot.docs);
    });
  }, [db]);


  const getCurrentUser = async () => {
    await users.map(function idk (user) {
      if(user.data().username === session.user.username) {
        setUser(user.data())
        return;
      }
    })
  }

  const checkHasFam = async () => {
    if(!session) {
      return;
    }
    await getCurrentUser();

    if(!user.famCode) {
      setFamCode('');
    }
  }

  if(loaded === false) {
    setTimeout(() => {
      try {
        checkHasFam();
        setLoaded(true);
      } catch(e) {
        console.log(e);
      }
    }, 500)
  }

  return (
    <div>
      {
        session ? (
          loaded ? (
            user.famCode ? (
              <div className="grid grid-cols-1 md:max-w-3xl xl:max-w-4xl mx-auto">
                <Posts />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center min-h-screen py-2 px-14 text-center">
                <h1>Access Denied</h1>
                <h1>Ask your Family Admin for access privileges</h1>


                <button
                  type="refresh"
                  onClick={checkHasFam}
                  className="w-[215px] ml-5 mt-4 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 sm:text-sm"
                >
                {"Update Account"}
                </button>
              </div>
            )
          ) : (
            <div className="flex flex-col items-center justify-center min-h-screen py-2 px-14 text-center">
              Loading...
            </div>
          )
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 px-14 text-center  bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
          Please click sign in :)
        </div>
      )}



    </div>
  )
}

export default Activity
