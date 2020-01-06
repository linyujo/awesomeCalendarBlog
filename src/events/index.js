import moment from 'moment';

const now = new Date();

const tagColor = {
  sideProject: '#006622',
  exercise: '#cc99ff',
  study: '#0d6eff',
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
  {
    id: 'c638cb28-fe09-445c-9f01-54179413b525',
    title: '運動',
    start: moment('2019-7-1', dateFormat),
    end: moment('2019-7-2', dateFormat),
    desc: '運動',
    hexColor: tagColor.exercise,
  },
  {
    id: '464d389a-df7a-4e9c-a732-ff2a0a898a7b',
    title: 'React-Redux單元測試',
    start: moment('2019-7-2', dateFormat),
    end: moment('2019-7-3', dateFormat),
    desc: 'Udemy課程：使用Jest和Enzyme寫單元測試',
    hexColor: tagColor.study,
  },
  {
    id: '16097641-2e26-4bb0-9c96-1f60e1badc71',
    title: '運動',
    // allDay: true,
    start: moment('2019-8-6', dateFormat),
    end: moment('2019-8-6', dateFormat),
    desc: '運動',
    hexColor: tagColor.exercise,
  },
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
