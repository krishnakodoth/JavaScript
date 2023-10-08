async function fetchData() {
  const url =
    "https://forecast9.p.rapidapi.com/rapidapi/forecast/Bengaluru/summary/";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6e0df196f0msh8a33cdf63113e12p19a762jsnfa1a5bf4a2ce",
      "X-RapidAPI-Host": "forecast9.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    //console.log(result);
    const root = document.getElementById("root");
    const __h1 = document.createElement("h1");
    __h1.innerText =
      result?.location?.name + " - " + result?.location?.timezone;
    root.appendChild(__h1);

    const __ul = document.createElement("ul");
    __ul.setAttribute("id", "weatherList");
    root.appendChild(__ul);

    const today = new Date();
    const nextThreeDays = new Date(today.setDate(today.getDate() + 3));

    console.log(today);
    console.log(nextThreeDays.toISOString());
    console.log(
      nextThreeDays - new Date(result.forecast.items[0].dateWithTimezone)
    );

    const next3DaysWeather = result.forecast.items.filter(
      (item) =>
        new Date(item.dateWithTimezone).getTime() <= nextThreeDays.getTime()
    );

    document.getElementById("weatherList").innerHTML = next3DaysWeather.map(
      (item) => `<li>${item.date} - ${item.weather.text}</li>`
    );
  } catch (error) {
    console.error(error);
  }
}

fetchData();
