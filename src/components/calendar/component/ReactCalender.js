import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import moment from "moment";
import "../MainCalender.style.scss";

const ReactCalender = () => {
  const navigate = useNavigate();
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

  const closeCalendar = () => {
    navigate("/");
  };

  return (
    <div>
      <div>
        <div className="calendar-wrapper">
          <div className="calendar-header">
            <h1> 🗓️ 달력 </h1>
            <button onClick={closeCalendar} className="close-button">
              ✕
            </button>
          </div>
          <div className="calendar-body">
            <Calendar
              onChange={setDate}
              value={date}
              locale="ko-KR"
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
        </div>
      </div>
      <div>
        <span>Selected Date : </span>
        {selectedDay}
      </div>
    </div>
  );
};

export default ReactCalender;
