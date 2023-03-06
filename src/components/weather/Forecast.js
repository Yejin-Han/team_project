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

const Forecast = ({ data }) => {
  return (
    <>
      {/* 오늘 0시~21시까지의 예상날씨 3시간단위로 */}
      <label className="forecast_title">오늘 예상날씨</label>
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
                  <label className="times">{timeLine[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="avg_temp">
                    {Math.round((item.main.temp_max + item.main.temp_min) / 2)}°
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
