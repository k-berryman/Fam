function Form() {

  return (
    <div>
      <div className="w-96 h-40 rounded-lg text-2xl">
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
          className="w-[260px] mt-4 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 sm:text-sm"
        >
        {"Add Event"}
        </button>
      </div>
    </div>
  )
}

export default Form
