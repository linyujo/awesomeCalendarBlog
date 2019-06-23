import moment from 'moment';

const now = new Date();

const tagColor = {
  sideProject: '#006622',
};

const dateFormat = 'YYYY-MM-DD';

export default [
  {
    id: 'ce7a28e1-2ca1-4ac4-aa7f-1c4c8f74c4a8',
    title: '翻修blogger',
    start: moment('2019-6-18', dateFormat),
    end: moment('2019-6-20', dateFormat),
    desc: '增加日曆事件顏色, tooltop',
    hexColor: tagColor.sideProject,
  },
  // {
  //   id: 0,
  //   title: 'All Day Event very long title',
  //   allDay: true,
  //   start: moment('2019-6-6', dateFormat),
  //   end: moment('2019-6-18', dateFormat),
  // },
  // {
  //   id: 1,
  //   title: 'Long Event',
  //   start: new Date(2019, 3, 7),
  //   end: new Date(2019, 3, 10),
  // },

  // {
  //   id: 2,
  //   title: 'DTS STARTS',
  //   start: new Date(2019, 2, 13, 0, 0, 0),
  //   end: new Date(2019, 2, 20, 0, 0, 0),
  // },

  // {
  //   id: 3,
  //   title: 'DTS ENDS',
  //   start: new Date(2019, 10, 6, 0, 0, 0),
  //   end: new Date(2019, 10, 13, 0, 0, 0),
  // },

  // {
  //   id: 4,
  //   title: 'Some Event',
  //   start: new Date(2019, 3, 9, 0, 0, 0),
  //   end: new Date(2019, 3, 10, 0, 0, 0),
  // },
  // {
  //   id: 5,
  //   title: 'Conference',
  //   start: new Date(2019, 3, 11),
  //   end: new Date(2019, 3, 13),
  //   desc: 'Big conference for important people',
  // },
  // {
  //   id: 6,
  //   title: 'Meeting',
  //   start: new Date(2019, 3, 12, 10, 30, 0, 0),
  //   end: new Date(2019, 3, 12, 12, 30, 0, 0),
  //   desc: 'Pre-meeting meeting, to prepare for the meeting',
  // },
  // {
  //   id: 7,
  //   title: 'Lunch',
  //   start: new Date(2019, 3, 12, 12, 0, 0, 0),
  //   end: new Date(2019, 3, 12, 13, 0, 0, 0),
  //   desc: 'Power lunch',
  // },
  // {
  //   id: 8,
  //   title: 'Meeting',
  //   start: new Date(2019, 3, 12, 14, 0, 0, 0),
  //   end: new Date(2019, 3, 12, 15, 0, 0, 0),
  // },
  // {
  //   id: 9,
  //   title: 'Happy Hour',
  //   start: new Date(2019, 3, 12, 17, 0, 0, 0),
  //   end: new Date(2019, 3, 12, 17, 30, 0, 0),
  //   desc: 'Most important meal of the day',
  // },
  // {
  //   id: 10,
  //   title: 'Dinner',
  //   start: new Date(2019, 3, 12, 20, 0, 0, 0),
  //   end: new Date(2019, 3, 12, 21, 0, 0, 0),
  // },
  // {
  //   id: 11,
  //   title: 'Birthday Party',
  //   start: new Date(2019, 3, 13, 7, 0, 0),
  //   end: new Date(2019, 3, 13, 10, 30, 0),
  // },
  // {
  //   id: 12,
  //   title: 'Late Night Event',
  //   start: new Date(2019, 3, 17, 19, 30, 0),
  //   end: new Date(2019, 3, 18, 2, 0, 0),
  // },
  // {
  //   id: 12.5,
  //   title: 'Late Same Night Event',
  //   start: new Date(2019, 3, 17, 19, 30, 0),
  //   end: new Date(2019, 3, 17, 23, 30, 0),
  // },
  // {
  //   id: 13,
  //   title: 'Multi-day Event',
  //   start: new Date(2019, 3, 20, 19, 30, 0),
  //   end: new Date(2019, 3, 22, 2, 0, 0),
  // },
  // {
  //   id: 14,
  //   title: 'Today',
  //   start: new Date(new Date().setHours(new Date().getHours() - 3)),
  //   end: new Date(new Date().setHours(new Date().getHours() + 3)),
  // },
  // {
  //   id: 15,
  //   title: 'Point in Time Event',
  //   start: now,
  //   end: now,
  // },
];
