ready().then(() => {
  // your code, here
  let links = document.getElementsByClassName("page");
  [].forEach.call(links, (link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      let textPath = link.getAttribute('href');
      fetch(textPath)
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
            throw(error);
          }
        })
        .then(response => response.text())
        .then(text => {
          document.getElementById('main').innerHTML = text;
        })
        .catch(error => console.error(`Error in fetch: ${error.errorMessage}`));
    });
  });
});
