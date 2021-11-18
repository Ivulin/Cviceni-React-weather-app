const baseApiUrl = process.env.REACT_APP_API_BASE_URL;
const appID = process.env.REACT_APP_MY_API_ID;

function callAPI(url) {
  return fetch(url)
    .then((res) => {
      if (res.ok) return res.json();
      else
        throw Error(
          `The url:${res.url} returns ${res.statusText}[${res.text}] with status ${res.status}`
        );
    })
    .catch((error) => {
      console.error("Error:", error);
      return null;
    });
}

function getWeather(city, setFunction) {
  callAPI(`${baseApiUrl}weather?q=${city}&units=metric&appid=${appID}`)
    .then((data) => setFunction(data))
    .catch((error) => {
      console.error("Error:", error);
      return null;
    });
}

function getForecast(city, setFunction, filter) {
  if (!filter)
    callAPI(`${baseApiUrl}forecast?q=${city}&units=metric&appid=${appID}`)
      .then((data) => setFunction(data))
      .catch((error) => {
        console.error("Error:", error);
        return null;
      });
  else
    callAPI(`${baseApiUrl}forecast?q=${city}&units=metric&appid=${appID}`)
      .then((data) => {
        const newArray = filter(data?.list);
        setFunction(newArray);
      })
      .catch((error) => {
        console.error("Error:", error);
        return null;
      });
}

export { getWeather, getForecast };
