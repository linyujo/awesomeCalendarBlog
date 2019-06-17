import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import events from '../../events';
// import dates from '../../../utils/dates';
import CustomToolbar from './Toolbar';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './index.scss';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const MyCalendar = props => (
  <div className="myCalendar">
    <BigCalendar
      localizer={localizer}
      events={events}
      components={{ toolbar: CustomToolbar }}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
);

export default MyCalendar;
