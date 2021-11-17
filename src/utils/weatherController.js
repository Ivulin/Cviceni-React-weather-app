const baseApiUrl = process.env.REACT_APP_API_BASE_URL;
const appID = process.env.REACT_APP_MY_API_ID;

function callAPI(url) {
  return fetch(url).then((response) => response.json());
}

function getWeather(city, setFunction) {
  callAPI(`${baseApiUrl}weather?q=${city}&units=metric&appid=${appID}`).then(
    (data) => setFunction(data)
  );
}

function getForecast(city, setFunction, filter) {
  if (!filter)
    callAPI(`${baseApiUrl}forecast?q=${city}&units=metric&appid=${appID}`).then(
      (data) => setFunction(data)
    );
  else
    callAPI(`${baseApiUrl}forecast?q=${city}&units=metric&appid=${appID}`).then(
      (data) => {
        const newArray = filter(data.list);
        setFunction(newArray);
      }
    );
}

export { getWeather, getForecast };
