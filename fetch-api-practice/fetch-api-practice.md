## Apply your understanding of Fetch!

Now that you have become familiar with some of the utility of fetch, build on the work you did during the [ES6 Fetch API](https://learn.launchacademy.com/lessons/es6-fetch-api) walkthrough.


## Instructions:

Begin by running:
```
et get fetch-api-practice
bundle install
ruby server.rb
```

The data has already been fetched from its source.  Your job is to:
1. Create a new list item for each book title.
2. Append each list item to the unordered list on the index page.

## Tips:

* Check out the `index.erb` to see what your page looks like.
* Use your knowledge of Javascript to access the `innerHTML` on the page.
```javascript
// public/js/app.js
fetch('http://localhost:4567/books.json')
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
  .then(body => {
    console.log(body);
    let bodyParsed = JSON.parse(body);
    console.log(bodyParsed);
    // your code here
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
```
