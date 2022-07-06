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
  const [loaded, setLoaded] = useState(false);

  // Retrieve events from firebase
  useEffect(() => {
    // Firebase provides a snapshot listener
    // Grab all posts in 'events' collection
    return onSnapshot(query(collection(db, 'events')), snapshot => {
      setEvents(snapshot.docs);
    });
  }, [db])



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
  }, [db]);


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
              <div>
                <StyledCalendar />
                <div className='pl-[640px] -mt-64'>
                  <h1 className="text-2xl">Upcoming Family Events</h1>
                  <div className="">
                    <ul>
                    {events.map(event => (
                      <li className="text-xl">- {event.data().name} at {event.data().location} on {event.data().date}</li>
                    ))}
                    </ul>
                  </div>

                  <Form />
                </div>
              </div>

          ) : (
            <div className="flex flex-col items-center justify-center min-h-screen py-2 px-14 text-center">
              Loading...
            </div>
          )
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

export default CalendarPage
