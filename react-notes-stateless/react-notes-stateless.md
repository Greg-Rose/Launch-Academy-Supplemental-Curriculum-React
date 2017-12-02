You have been hired to create the following notes application:

![react_notes_root_image][react_notes_root_image]

The left pane shows a list of folders which contain notes.
The currently selected folder is highlighted in blue.
At the bottom of the left pane, there is a form to create a new folder.

The middle pane displays the list of notes in the current folder.
The currently selected note is highlighted in yellow.
At the top of the middle pane, there is a button to create a new note in the currently selected folder as well as a search bar.
Typing into the search bar would change the notes displayed in the list to those whose content matches the search bar input.

The right pane is a form to update the currently selected note.
The users would type into the `textarea` element of the form and click on the update button to save the changes to the note.
The top of the right pane also shows when the note was last updated and a button to delete the note.

## Setup
From your challenges directory, run the following:

```sh
$ et get react-notes-stateless
$ cd react-notes-stateless
$ npm install
$ npm start
```

If you go to [localhost:8080][localhost-8080], there will be nothing displayed on the page and there should be no errors in your console.

## Deliverables
1. Using React stateless components, render a static version of the application. Use the hard-coded data has been supplied in `App.js` to ensure that the created components are working as expected.
2. You do not have to implement a fully working application. However, you must create event listeners and event handlers that accomplish the following:
    1. Clicking on a folder should pop-up an alert box with the text "Folder clicked".
    2. Clicking on a note should pop-up an alert box with the text "Note clicked".
    3. Submitting the new folder form should pop-up an alert box with the text "Folder Created".
    4. Clicking on the new note button should pop-up an alert box with the text "Note Created".
    5. Submitting the note update form should pop-up an alert box with the text "Note Updated".
    6. Clicking on the delete note button should pop-up an alert box with the text "Note Deleted".
3. You are a professional front-end developer, so make sure your website looks like the [Ryan Gosling][html-vs-html-css] of notes applications.

## Pro Tips
* You should look over the application, think about the stateless components that
    compose the application, and draw out the hierarchy of these components.
    Once you have done this take a look at [our drawing of the component
    hierarchy][react_notes_component_hierarchy].  Here the `App` component is
    the top-level component which renders the `FolderList`, `FolderForm`, and
    `NotesSection` components.  The `FolderList` and `NotesSection` components
    render other components themselves.  This approach is not the only correct
    solution.  There may be better ways to break down this application into
    components, so we encourage you to deviate from this approach if you feel
    like your solution is better.

* For the event listeners and event handlers, do the simplest possible thing for now. Do not worry too much about where the event handlers are defined.
* We have set up a `stylesheets` folder containing an `App.scss` file for your `App` component styling and a `Colors.scss` file which defines the colors that you will need for the application. If you wish to create additional SASS files in the `stylesheets` folder, make sure to import the new files in the `main.scss` file for the styling to take effect.
* [Foundation][foundation] and [Font Awesome][font-awesome] are available for you to use via a CDN. You know what to do.
* The Font Awesome icons that you will need are [fa-plus-cicle][fa-plus-circle], [fa-sticky-note-o][fa-sticky-note-o], [fa-times][fa-times], and [fa-search][fa-search].
* In the middle pane, the content is truncated at 35 characters if the note's body exceeds 35 characters.

[fa-plus-circle]: http://fortawesome.github.io/Font-Awesome/icon/plus-circle/
[fa-sticky-note-o]: http://fortawesome.github.io/Font-Awesome/icon/sticky-note-o/
[fa-search]: http://fortawesome.github.io/Font-Awesome/icon/search/
[fa-times]: http://fortawesome.github.io/Font-Awesome/icon/times/
[font-awesome]: http://fortawesome.github.io/Font-Awesome/
[foundation]: http://foundation.zurb.com/
[html-vs-html-css]: https://pbs.twimg.com/media/CF_v2j4VEAADvhP.jpg
[localhost-8080]: http://localhost:8080
[react_notes_root_image]: https://s3.amazonaws.com/horizon-production/images/react_notes.png
[react_notes_component_hierarchy]: https://s3.amazonaws.com/horizon-production/images/react_notes_component_hierarchy.png
