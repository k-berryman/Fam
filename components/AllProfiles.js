import { useSession } from "next-auth/react";
import Profile from "./Profile";
import ProfileNoInput from "./ProfileNoInput";
import { addDoc, collection, onSnapshot, deleteDoc, query, orderBy, serverTimestamp, doc, setDoc } from "@firebase/firestore"
import { useState, useEffect } from "react";
import { db } from "../firebase";

function AllProfiles() {
  const { data: session } = useSession();


  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [famCode, setFamCode] = useState('');

  // Retrieve profile data from firebase
  useEffect(() => {
    console.log('use effect starting')
    // Firebase provides a snapshot listener
    // Grab all posts in 'users' collection
    return onSnapshot(query(collection(db, 'users'), orderBy('createdAt')), snapshot => {
      setUsers(snapshot.docs);
    });

    getCurrentUser();
    checkHasFam();
    router.push('/')
  }, [db, user, famCode]);


  const getCurrentUser = async () => {
    console.log('trying here')
    await users.map(function idk (user) {
      if(user.data().username === session.user.username) {
        setUser(user.data())
        return;
      }
    })
  }

  const checkHasFam = async () => {
    await getCurrentUser();

    if(!user.famCode) {
      setFamCode('');
    }
  }


  return (
    <div>
      {
        session ? (
        user.famCode ? (
          <div className="">
            <Profile userImage={session.user.image} username={session.user.username}/>
            <ProfileNoInput />
          </div>
        ) : (
          <div>
            <h1>Logged In, but has no Fam</h1>

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
        <div className="flex flex-col items-center justify-center min-h-screen py-2 px-14 text-center  bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
          Please click sign in :)
        </div>
      )}
    </div>
  )
}

export default AllProfiles
