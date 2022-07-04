import StyledCalendar from "./StyledCalendar"
import Form from "./Form"
import { db } from "../firebase"
import { useState, useEffect, useRef } from "react"
import { addDoc, collection, onSnapshot, deleteDoc, query, orderBy, serverTimestamp, doc, setDoc } from "@firebase/firestore"
import { useSession } from "next-auth/react"
import { ref } from "@firebase/storage"


function CalendarPage() {

  const [events, setEvents] = useState([]);
  const { data: session } = useSession();
  const messageRef = useRef(null);

  // Retrieve events from firebase
  useEffect(() => {
    // Firebase provides a snapshot listener
    // Grab all posts in 'events' collection
    return onSnapshot(query(collection(db, 'events'), orderBy('createdAt')), snapshot => {
      setEvents(snapshot.docs);
    });
  }, [db])


  // Send message to Firebase
  const uploadMessage = async (e) => {
      // Prevent page from refreshing when trying to submit a message
      e.preventDefault();

      // Go into db, events collection, post with id, comments field
      await addDoc(collection(db, 'events'), {
        text: messageRef.current.value,
        createdAt: serverTimestamp(),
        username: session.user.username,
        userImage: session.user.image,
      })
  }

  return (
    <div>
      <StyledCalendar />
      <div className='pl-[640px] -mt-64'>
        <h1 className="text-2xl">Upcoming Family Events</h1>
        <div className="">
          <ul>
          {events.map(event => (
            <li>- {event.data().name} at {event.data().location} on {event.data().date}</li>
          ))}
          </ul>
        </div>

        <Form />
      </div>
    </div>
  )
}

export default CalendarPage
