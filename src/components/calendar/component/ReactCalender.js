import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "../MainCalender.style.scss";

const ReactCalender = () => {
  const [date, setDate] = useState(new Date());
  const holiDay = [
    "01-01-2023",
    "21-01-2023",
    "22-01-2023",
    "23-01-2023",
    "24-01-2023",
    "13-02-2023",
    "01-03-2023",
    "05-05-2023",
    "27-05-2023",
    "06-06-2023",
    "15-08-2023",
    "28-09-2023",
    "29-09-2023",
    "30-09-2023",
    "03-10-2023",
    "09-10-2023",
    "25-12-2023",
  ];

  const selectedDay = moment(date).format("YYYY-MM-DD");

  return (
    <div>
      <h1>React-calendar</h1>
      <div>
        <Calendar
          onChange={setDate}
          value={date}
          locale="en-En"
          tileClassName={({ date }) => {
            let day = date.getDate(); //날짜 출력
            let month = date.getMonth() + 1;
            if (date.getMonth() < 10) {
              month = "0" + month;
            }
            if (date.getDate() < 10) {
              day = "0" + day;
            }
            const realDate = day + "-" + month + "-" + date.getFullYear();
            if (holiDay.find((i) => i === realDate)) {
              return "highlight";
            }
          }}
        />
      </div>
      <div>
        <span>Selected Date : </span>
        {selectedDay}
      </div>
    </div>
  );
};

export default ReactCalender;
