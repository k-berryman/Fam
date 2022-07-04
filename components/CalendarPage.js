import { useSession } from "next-auth/react"
import StyledCalendar from "./StyledCalendar"
import Form from "./Form"

function CalendarPage() {
  const { data: session } = useSession();

  return (
    <div>
      <StyledCalendar />
      <div className='pl-[640px] -mt-64'>
        <h1 className="text-2xl">Upcoming Family Events</h1>

        <Form />
      </div>
    </div>
  )
}

export default CalendarPage
