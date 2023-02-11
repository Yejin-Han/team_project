import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";

const ReactCalender = () => {
  const [date, setDate] = useState(new Date());

  const selectedDay = moment(date).format("YYYY-MM-DD");

  return (
    <div>
      <h1>React-calendar</h1>
      <div>
        <Calendar onChange={setDate} value={date} />
      </div>
      <div>
        <span>Selected Date : </span>
        {selectedDay}
      </div>
    </div>
  );
};

export default ReactCalender;
