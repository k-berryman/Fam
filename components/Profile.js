import { useState, useEffect } from "react";
import { collection, onSnapshot, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
import Image from "next/image";

function Profile() {
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

  // name, birthday, status
  return (
    <div>
      <div className="bg-slate-200 mt-6 ml-11 mr-11 w-75% h-40 rounded-lg flex">
        <div className="pt-6 pl-3 w-40 h-40 rounded-lg">
          <Image
            src='https://www.designfreelogoonline.com/wp-content/uploads/2019/02/00580-Family-02.png'
            width='110px'
            height='110px'
          />
        </div>

        <div className="ml-4 mr-4 pt-4 pl-3 w-96 h-40 rounded-lg">
          <p className="mt-5 text-lg">Email: </p>

          <div class="mt-1 mr-4 relative rounded-md shadow-sm">
            <input type="text" name="price" id="price" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="sample@email.com" />
          </div>
        </div>

        <div className="mr-4 pt-4 pl-3 w-96 h-40 rounded-lg">
          <p className="mt-5 text-lg">Name: </p>

          <div class="mt-1 mr-4 relative rounded-md shadow-sm">
            <input type="text" name="price" id="price" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="Jane Doe" />
          </div>
        </div>

        <div className="mr-4 pt-4 pl-3 w-96 h-40 rounded-lg">
          <p className="mt-5 text-lg">Birthday: </p>

          <div class="mt-1 mr-4 relative rounded-md shadow-sm">
            <input type="text" name="price" id="price" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="July 4th, 1922" />
          </div>
        </div>

        <div className="pt-4 pl-3 w-96 h-40 rounded-lg">
          <p className="mt-5 text-lg">Status: </p>

          <div class="mt-1 mr-4 relative rounded-md shadow-sm">
            <input type="text" name="price" id="price" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="Finishing a programming bootcamp" />
          </div>
        </div>
      </div>


      <button
        type="button"
        className="w-[470px] ml-11 mt-4 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 sm:text-sm"
      >
      {"Update Account"}
      </button>


    </div>
  )
}

export default Profile
