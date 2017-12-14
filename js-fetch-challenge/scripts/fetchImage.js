ready().then(() => {
  // your code, here
  fetch('/images/logo.png')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.blob())
    .then(imageBlob => {
      let objectURL = URL.createObjectURL(imageBlob);

      let imageElement = document.createElement('img');
      imageElement.src = objectURL;
      document.getElementById('main').appendChild(imageElement);
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
});
