import { useState, useEffect, useRef } from "react";
import { collection, onSnapshot, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
import Image from "next/image";
import { ref } from "@firebase/storage"

function Profile({ userImage, username }) {
  const nameRef = useRef(null);
  const birthdayRef = useRef(null);
  const statusRef = useRef(null);

  // Send message to Firebase
  const updateProfile = async (e) => {
      // Prevent page from refreshing when trying to submit a message
      e.preventDefault();

      /*// Go into db, messages collection, post with id, comments field
      await addDoc(collection(db, 'messages'), {
        text: messageRef.current.value,
        createdAt: serverTimestamp(),
        username: session.user.username,
        userImage: session.user.image,
      })*/
  }

  // name, birthday, status
  return (
    <div>
      <div className="bg-slate-200 mt-6 ml-11 mr-11 w-75% h-40 rounded-lg flex">
        <div className="pt-6 pl-6 w-40 h-40 rounded-lg">
          <Image
            src={userImage}
            width='110px'
            height='110px'
          />
        </div>

        <div className="ml-4 mr-4 pt-4 pl-3 w-96 h-40 rounded-lg">
          <p className="font-bold mt-5 text-lg">Username:</p>
          <p className="mt-2 text-lg">{username}</p>
        </div>

        <div className="font-bold mr-4 pt-4 pl-3 w-96 h-40 rounded-lg">
          <p className="mt-5 text-lg">Name: </p>

          <div class="font-bold mt-1 mr-4 relative rounded-md shadow-sm">
            <input
              type="text"
              ref={nameRef}
              class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="Change name here"
            />
          </div>
        </div>

        <div className="font-bold mr-4 pt-4 pl-3 w-96 h-40 rounded-lg">
          <p className="mt-5 text-lg">Birthday: </p>

          <div class="mt-1 mr-4 relative rounded-md shadow-sm">
            <input
              type="text"
              ref={birthdayRef}
              class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="Change birthday here"
            />
          </div>
        </div>

        <div className="pt-4 pl-3 w-96 h-40 rounded-lg">
          <p className="mt-5 text-lg">Status: </p>

          <div class="mt-1 mr-4 relative rounded-md shadow-sm">
            <input
              type="text"
              ref={statusRef}
              class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="Change status here"
            />
          </div>
        </div>
      </div>


      <button
        type="button"
        onClick={updateProfile}
        className="w-[470px] ml-11 mt-4 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 sm:text-sm"
      >
      {"Update Account"}
      </button>


    </div>
  )
}

export default Profile
