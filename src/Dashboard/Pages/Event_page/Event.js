import React from "react";
import './event.css'
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
} from "@syncfusion/ej2-react-schedule";

const Event = () => {
  return (
    <div className="bg-dark text-white" id="event" >
      Event
      <ScheduleComponent>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} className='text-dark' />
      </ScheduleComponent>
    </div>
  );
};

export default Event;
