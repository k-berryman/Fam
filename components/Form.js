import { db } from "../firebase"
import { useState, useEffect, useRef } from "react"
import { addDoc, collection, onSnapshot, deleteDoc, query, orderBy, serverTimestamp, doc, setDoc } from "@firebase/firestore"
import { useSession } from "next-auth/react"
import { ref } from "@firebase/storage"


function Form() {

  const [events, setEvents] = useState([]);
  const { data: session } = useSession();

  // Send message to Firebase
  const uploadEvent = async (e) => {
      // Prevent page from refreshing when trying to submit a message
      e.preventDefault();

      // Go into db, events collection, post with id, comments field
      await addDoc(collection(db, 'events'), {
        createdAt: serverTimestamp(),
        name: "Dad's Birthday",
        location: "Cedar Point",
        date: "July 30th, 2022"
      })
  }

  return (
    <div>
      <div className="w-96 mt-20 h-40 rounded-lg text-2xl">
        <p className="mt-5 text-lg">Add Event </p>

        <div className="flex">
          <p className="text-sm mt-3">Event Name: </p>
          <div class="ml-3 mt-1 mr-4 relative rounded-md shadow-sm">
            <input type="text" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="Kaitlin's Birthday" />
          </div>
        </div>

        <div className="flex">
          <p className="text-sm mt-3">Location: </p>
          <div class="ml-3 mt-1 mr-4 relative rounded-md shadow-sm">
            <input type="text" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="Orlando, FL" />
          </div>
        </div>

        <div className="flex">
          <p className="text-sm mt-3">Date: </p>
          <div class="ml-3 mt-1 mr-4 relative rounded-md shadow-sm">
            <input type="text" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="July 9th, 2022" />
          </div>
        </div>

        <button
          type="button"
          onClick={uploadEvent}
          className="inline-flex mt-6 justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 mb-10 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300"
        >
        {"Upload Event"}
        </button>
      </div>
    </div>
  )
}

export default Form
