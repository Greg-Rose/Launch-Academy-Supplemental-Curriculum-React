### Getting Started

This marathon is designed to reinforce the concepts from this week from turning a base React app into a full fledged stateful React application.

Note that this is a very task-based marathon. Each step will present new functionality (unless otherwise specified), and you always be able to see your app on the page at all times.

### Setup

From your challenges directory, run the following:

```sh
$ et get react-marathon
$ cd react-marathon
$ npm install
$ npm start
```

If you go to <http://localhost:8080>, you should see a list of playlists displayed as well as an area where songs will be displayed.

![Step 0](https://s3.amazonaws.com/horizon-production/images/react-marathon-0.png)

### Step 1

Showing the list of playlist names is cool, but if we look at `src/constants/data`, we can see that each playlist also has a description!

In the `map` function in `src/components/PlaylistCollection`, each `playlist` has access to a description. First, pass that description as a prop to the rendered `Playlist` component.

Now, in `Playlist`, render the newly passed down description in `h3` tags under the name of the playlist.

You should now see the descriptions of each playlist as shown below:

![Step 1](https://s3.amazonaws.com/horizon-production/images/react-marathon-1.png)

### Step 2

Now we need to render all the songs in our app.

First, in `src/containers/App`, pass the songs from data as props to the `SongCollection` component in the render method.

Second, in `src/components/SongCollection`, set a variable, `songComponents`, to mapped out `Song` components from the songs passed down from props. Render that variable in the return function in `SongCollection`. **Hint** Be careful not to confuse this return function with the return from your map function.

Finally, create a new component, `Song`, in `src/components/Song`. This component should render a list element, within which is the song's name in an h2 tag, and the song's artist in an h3 tag.

Make sure to export your `Song` component and import it in `SongCollection`!

If you have any trouble with this step, you can look at the `Playlist` and `PlaylistCollection` components for guidance!

After this step, you should see the songs displayed on the page:

![Step 2](https://s3.amazonaws.com/horizon-production/images/react-marathon-2.png)

### Step 3

Let's switch gears and navigate back to the playlist portion of the application. 

If we look at the bottom of `src/constants/data`, you'll see an important piece of information, `selectedPlaylistId`.   Let's use that information to tell the user that this playlist is currently selected.

First, in `src/containers/App`, let's pass down the `selectedPlaylistId` as a prop to our rendered `PlaylistCollection` component.

Next, in `src/components/PlaylistCollection`, in our map function, let's conditionally set a variable `className` to be `"className"` if the id of the playlist matches the `selectedPlaylistId`, and pass that as a prop to the rendered `Playlist` component.

Finally, let's use that `className` prop in `src/components/Playlist` to set the className to the `li` tag.

Once finished, your app should show the selected playlist in a highlighted color:

![Step 3](https://s3.amazonaws.com/horizon-production/images/react-marathon-3.png)

### Step 4

This step is going to test your javascript knowledge, because we don't want to show all the songs in our app, we only want to display the songs for the current Playlist in `src/containers/App`.

First, the `.find` method takes an array and returns the element that matches specific criteria.

```javascript
  let selectedFruit = ["apples","bananas","oranges"].find(fruit => {
    return fruit === "apples"
  })
  // => selectedFruit = "apples"
```

Use the `.find` method to set a variable `selectedPlaylist`, to equal the playlist object from `data.playlists` who's `id` matches the `selectedPlaylistId`.

Next, the `.filter` method works very similarly to the `.find` method, except it will return an array of matches as opposed to a single match.

```javascript
  let oddNumbers = [1,2,3].filter(number => {
    return number % 2 == 1
  })
  // => oddNumbers = [1,3]
```

Use the `.filter` method to create a `currentSongs` array, where the current songs are the songs from `data.songs` that have id's that are included in the  `selectedPlaylist.songs` array. `.includes` should also come in handy with the return value of your filter method.

Finally, pass the `currentSongs` to `SongCollection` *instead* of `data.songs`.

Once this step is complete, you should now only see the songs that belong to the currently selected playlist.

![Step 4](https://s3.amazonaws.com/horizon-production/images/react-marathon-4.png)

### Step 5

Seeing playlists is pretty cool, but you know what's even cooler? ~~Ice Cold!~~ Selecting playlists!

Let's create a synthetic event in `src/components/Playlist`. Write a function `handleClick` that alerts the user that the playlist has been clicked by displaying the playlist's name.

Next, add an `onClick` event listener to the `li` tag, right where we previously added the className.

After this step, you should see an alert if you click on a playlist:

![Step 5](https://s3.amazonaws.com/horizon-production/images/react-marathon-5.png)

### Step 6

**Note: You will not see any client-facing changes to the app until after Step 9.**

If we want to add the ability to change which playlist is selected, we will have to alter the **state** of our application.

In `src/containers/App`, add `selectedPlaylistId` to `this.state`. This piece of state should still be initialized to the `selectedPlaylistId` from `props.data`, so make sure to set that as the initial value.

From here, we should now make sure we update the props passed down to `PlaylistCollection` to use the `selectedPlaylistId` from `state` instead of `data`.

### Step 7

Let's define a function to manipulate state in `src/containers/App`. This function, `selectPlaylist`, should take in an `id` as an argument and set the state of `selectedPlaylistId` to that `id`.

Let's pass that function to `PlaylistCollection` as a `handleSelect` prop to distinguish the function in `App` and the passed down function in `PlaylistCollection`.

### Step 8

In `src/components/PlaylistCollection`, within our map function, we need to define a new function for selecting each individual playlist. Let's create a function called `playlistSelect`, which does not take in any arguments, and calls the `handleSelect` function passed down from props.

The call to `props.handleSelect`, which is referencing `selectPlaylist` from `App`, still needs to take in `id`. Fortunately, because we are in a map, we can use `playlist.id` as an argument.

Finally, let's pass the newly created `playlistSelect` function to the returned `Playlist` component. Let's set it to a prop `handlePlaylistSelect`.

### Step 9

The moment you've all been waiting for.  In `src/components/Playlist`, instead of alerting the user, let's call the `handlePlaylistSelect` function passed in through props from `PlaylistCollection`. Make sure to actually invoke this function here with `()`.

Afterwards, you should now be able to click on a playlist and see the highlight change to the playlist you clicked on:

![Step 9](https://s3.amazonaws.com/horizon-production/images/react-marathon-6.png)

**Pop Quiz: ** Can you think of a different way to implement steps 8 and 9?

### Step 10

We're done! Wait a second, `Barnacle Goose` isn't a good work out song! We forgot to make sure the songs change accordingly based on which playlist is selected.

In `src/containers/App`, make sure that `selectedPlaylist` includes logic to depend on `this.state.selectedPlaylistId`, not `data.selectedPlaylistId`.

Now, when we select a different playlist, we should also see the songs for that playlist displayed:

![Step 10](https://s3.amazonaws.com/horizon-production/images/react-marathon-7.png)

### Optional Steps

The core requirements are done! But here are a list of extra challenges you can work in if you have more time for practice.

- Add the ability to select songs as well! This will involve adding another piece of state to `App`, the ability to change that state, and the css effect of that state change. You should follow a lot of the patterns done in Step 3, and Steps 5-9.

- A few components were provided for you at the start of this application. Come up with your own idea and build a similar React application from scratch! This is a perfect opportunity to work on any side project ideas you may have!
