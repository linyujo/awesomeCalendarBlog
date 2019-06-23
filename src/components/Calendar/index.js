import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import events from '../../events';
import CustomToolbar from './Toolbar';
import CustomEvent from './Event';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './index.scss';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const eventStyleGetter = (event, start, end, isSelected) => {
  const style = {
    backgroundColor: event.hexColor,
    borderRadius: '4px',
    opacity: 0.8,
    color: 'white',
    border: '0px',
    display: 'block'
  };
  return {
    style: style
  };
};

const MyCalendar = props => (
  <div className="myCalendar">
    <BigCalendar
      localizer={localizer}
      events={events}
      components={{
        event: CustomEvent,
        toolbar: CustomToolbar
      }}
      startAccessor="start"
      endAccessor="end"
      eventPropGetter={eventStyleGetter}
    />
  </div>
);

export default MyCalendar;
