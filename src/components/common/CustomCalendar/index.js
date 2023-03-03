import React from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./style.css";
import { useEffect, useRef } from "react";

const fakeEvents = [
  {
    id: "1",
    title: "event 1",
    start: "2022-12-14T10:00:00",
    end: "2022-12-14T12:00:00",
  },
  {
    id: "2",
    title: "event 2",
    start: "2022-12-14T13:00:00",
    end: "2022-12-14T18:00:00",
    description: "Lecture",
  },
  {
    id: "3",
    title: "event 3",
    start: "2022-12-14T10:00:00",
    end: "2022-12-14T20:00:00",
  },
];
export const DailyCalendar = ({ events = fakeEvents }) => {
  return (
    <FullCalendar
      plugins={[timeGridPlugin]}
      initialView="timeGridDay"
      headerToolbar={{
        left: "",
        center: "",
        right: "",
      }}
      nowIndicator
      events={events}
      weekends={true}
      selectable={false}
      dayMaxEvents={true}
      allDaySlot={false}
      editable={false}
      height="610px"
      slotMinTime="09:00:00"
      slotMaxTime="22:00:00"
    />
  );
};

export const WeeklyCalendar = ({ events = fakeEvents }) => {
  const calendarRef = useRef(null);
  useEffect(() => {
    const middleToolbarEl = document.querySelectorAll(".fc-toolbar-chunk")[1];
    middleToolbarEl.innerHTML = '<input type=date id="datepicker" />';

    const datePicker = document.querySelector("#datepicker");
    const handleOnChange = (e) => {
      // @ts-ignore
      calendarRef.current?.getApi().gotoDate(e.target.value);
    };
    datePicker?.addEventListener("change", handleOnChange);
    return () => {
      datePicker?.removeEventListener("change", handleOnChange);
    };
  }, []);

  return (
    <FullCalendar
      plugins={[timeGridPlugin, dayGridPlugin]}
      initialView="timeGridWeek"
      ref={calendarRef}
      headerToolbar={{
        left: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
        center: "",
      }}
      nowIndicator
      events={events}
      weekends={true}
      selectable={false}
      dayMaxEvents={true}
      allDaySlot={false}
      editable={false}
      slotMinTime="09:00:00"
      slotMaxTime="22:00:00"
      height="640px"
      buttonText={{
        month: "Month",
        week: "Week",
        day: "Day",
      }}
    />
  );
};
