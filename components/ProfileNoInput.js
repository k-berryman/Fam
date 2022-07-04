import { useState, useEffect } from "react"
import { collection, onSnapshot, query, orderBy } from "@firebase/firestore"
import { db } from "../firebase"
import Image from "next/image";

function ProfileNoInput() {

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
        </div>

        <div className="mr-4 pt-4 pl-3 w-96 h-40 rounded-lg">
          <p className="mt-5 text-lg">Name: </p>
        </div>

        <div className="mr-4 pt-4 pl-3 w-96 h-40 rounded-lg">
          <p className="mt-5 text-lg">Birthday: </p>
        </div>

        <div className="pt-4 pl-3 w-96 h-40 rounded-lg">
          <p className="mt-5 text-lg">Status: </p>
        </div>
      </div>

    </div>
  )
}

export default ProfileNoInput
