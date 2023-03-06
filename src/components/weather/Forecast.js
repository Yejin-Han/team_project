import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const timeLine = [
  "오전 0시",
  "오전 3시",
  "오전 6시",
  "오전 9시",
  "오후 12시",
  "오후 3시",
  "오후 6시",
  "오후 9시",
];

let idx = 0;
const timeFor3Hours = (now) => {
  if (now >= 0 && now < 3) {
    idx = 0;
  } else if (now >= 3 && now < 6) {
    idx = 1;
  } else if (now >= 6 && now < 9) {
    idx = 2;
  } else if (now >= 9 && now < 12) {
    idx = 3;
  } else if (now >= 12 && now < 15) {
    idx = 4;
  } else if (now >= 18 && now < 21) {
    idx = 5;
  } else if (now >= 21 && now < 24) {
    idx = 6;
  }
};

const degCheck = (deg) => {
  if (deg >= 348.75 || deg < 11.25) {
    return <label>북</label>;
  } else if (deg >= 11.25 && deg < 33.75) {
    return <label>북북동</label>;
  } else if (deg >= 33.75 && deg < 56.25) {
    return <label>북동</label>;
  } else if (deg >= 56.25 && deg < 78.75) {
    return <label>동북동</label>;
  } else if (deg >= 78.75 && deg < 101.25) {
    return <label>동</label>;
  } else if (deg >= 101.25 && deg < 123.75) {
    return <label>동남동</label>;
  } else if (deg >= 123.75 && deg < 146.25) {
    return <label>남동</label>;
  } else if (deg >= 146.25 && deg < 168.75) {
    return <label>남남동</label>;
  } else if (deg >= 168.75 && deg < 191.25) {
    return <label>남</label>;
  } else if (deg >= 191.25 && deg < 213.75) {
    return <label>남남서</label>;
  } else if (deg >= 213.75 && deg < 236.25) {
    return <label>남서</label>;
  } else if (deg >= 236.25 && deg < 258.75) {
    return <label>서남서</label>;
  } else if (deg >= 258.75 && deg < 281.25) {
    return <label>서</label>;
  } else if (deg >= 281.25 && deg < 303.75) {
    return <label>서북서</label>;
  } else if (deg >= 303.75 && deg < 326.25) {
    return <label>북서</label>;
  } else if (deg >= 326.25 && deg < 348.75) {
    return <label>북북서</label>;
  }
};

const Forecast = ({ data }) => {
  const timeOfNow = new Date().getHours();
  timeFor3Hours(timeOfNow);
  const forecastTimeLine = timeLine
    .slice(idx - 1, timeLine.length)
    .concat(timeLine.slice(0, idx - 1));
  return (
    <>
      {/* 직전 3시간+24시간까지의 예상날씨 3시간단위로 */}
      <label className="forecast_title">시간별 예상날씨</label>
      <Accordion allowZeroExpanded className="forecast_accordion">
        {data.list.slice(1, 8).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="time_item">
                  <img
                    alt="weather"
                    className="icon_s"
                    src={`img/weather/${item.weather[0].icon}.png`}
                  />
                  <label className="times">{forecastTimeLine[idx]}</label>
                  <label className="time_temp">
                    {Math.round(item.main.temp)}°
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="time_details_grid">
                <div className="time_details_grid_item">
                  <label>풍향</label>
                  {degCheck(item.wind.deg)}
                </div>
                <div className="time_details_grid_item">
                  <label>풍속</label>
                  {item.wind.speed}m/s
                </div>
                <div className="time_details_grid_item">
                  <label>습도</label>
                  {item.main.humidity}%
                </div>
                <div className="time_details_grid_item">
                  <label>기압</label>
                  {item.main.pressure}hPa
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
