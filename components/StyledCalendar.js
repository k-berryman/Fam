import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState, useEffect } from "react"
import Form from './Form';

function StyledCalendar() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(new Date())


  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let thisMonth = month[today.getMonth()];


  let url = `https://holidays.abstractapi.com/v1/?api_key=6390db73c2bc464fbc67e5d6efe6fde4&country=US&year=${yyyy}&month=${mm}&day=${dd}`



  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  const getHolidays = (year, month, day) => {
    let url = `https://holidays.abstractapi.com/v1/?api_key=6390db73c2bc464fbc67e5d6efe6fde4&country=US&year=${year}&month=${month}&day=${day}`

    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }


  const formatDay = (date) => {
    const locale = 'fr-CA';

    let newDate = Intl.DateTimeFormat(locale,
          {
                year: "numeric",
                month: "2-digit",
                day: "2-digit"
          }).format(date)

    let newYear = newDate[0] + newDate[1] + newDate[2] + newDate[3]
    let newMonth = newDate[5] + newDate[6]
    let newDay = newDate[8] + newDate[9]

    getHolidays(newYear, newMonth, newDay)

    setSelected(newDate)


  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div class="container pl-[300px] mt-36 scale-150 flex">
          <Calendar
            className=""
            calendarType="US"
            onChange={(value, event) => formatDay(value)}
          />
          <div className="pl-8">
            <h1 className="text-lg">Holidays (for {String(selected)})</h1>
            {items.map(item => (
              <li key={item.id}>
                {item.name}
              </li>
            ))}
            <br/>
            <br/>
            <h1 className="text-lg">Upcoming Family Events</h1>
            <br/>

            <Form />
          </div>
      </div>
    )
  }
}

export default StyledCalendar
