const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const month = [
  "Januar",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const createDate = (unixTimeSpan) => {
  return new Date(unixTimeSpan * 1000);
};

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function getLocalTime(unixTimeSpan) {
  if (!unixTimeSpan) return null;

  const dateTime = createDate(unixTimeSpan);

  return `${dateTime.getHours()}:${addZero(dateTime.getMinutes())}`;
}

function getDaySemiColumnDate(unixTimeSpan) {
  if (!unixTimeSpan) return null;

  const dateTime = createDate(unixTimeSpan);

  return `${weekday[dateTime.getDay()]}, ${dateTime.getDate()} ${
    month[dateTime.getMonth()]
  }`;
}

export { getLocalTime, getDaySemiColumnDate };
