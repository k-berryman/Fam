import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function StyledCalendar() {

  return (

    <div class="container ml-96 mt-28 scale-150">
        <Calendar
          className=""
          calendarType="US"
        />
    </div>


  )
}

export default StyledCalendar
