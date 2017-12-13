let latitude = 42.35;
let longitude = -71.07;

// your code, here
fetch(`/api/v1/forecast/${latitude},${longitude}`)
  .then(response => {
    if(response.ok) {
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
      throw(error);
    }
  })
  .then(response => response.json())
  .then(body => {
    let currently = body.currently;
    document.getElementById('conditions').innerHTML =
      `${currently.temperature}° and ${currently.summary}`;
    var skycons = new Skycons();
    skycons.add("icon", currently.icon);
    skycons.play();
  })
  .catch(error => {
    console.error(`Error in fetch: ${error.message}`);
  });
