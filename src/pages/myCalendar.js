import React from 'react';

import MyCalendar from '../components/Calendar';

const calendarPageStyle = {
  // margin: '104px auto 80px auto',
  marginTop: 78
};

const CalendarPage = props => (
  <div style={calendarPageStyle}>
      <MyCalendar />
  </div>
);

export default CalendarPage;
