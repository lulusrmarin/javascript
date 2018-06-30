# Vue Components
- __navigation.js__ - simple Bootstrap4 formatted navigation component with built in emission of selected values.  May not fit all cases due to a potential need to submit different values than the name of the navigation field.  It could be extended to use an object or array to allow for index/key separation to allow a separation in value and name of field, but for my uses so far that's overkill

- __google-oauth-2-login-button.js__ - The client half of the Ouath2 workflow for Google.  There is an ability to do this with pure javascript but it requires exposing your API key and Secret, which I'm not a fan of.  A more conservative way to do this would be to use Node or PHP.  I have a solution to each which will probably be uploaded at some point.  Once logged in, should display username, google image avatar and logout button.  Will definitely log you out, but if storing information in session that will need to be manually unset too (which is also something this component will do on logout)

- __dropdown.js__ - Dropdown/select option component that takes an array of options and emits the option as a value.  This is similar to navigation.js on behavior, and may need to be extended a similar way depending on your use case

- __search.js__ - Uses font awesome and bootstrap and creates a search field which automatically emits to a root component what was searched for on enter keydown, could probably be extended to take a prop or option that allows for a click-able button as well.

- __pagination.js__ - Uses  Bootstrap4 pagination combined with Vue.js component.  Currently the component only takes one prop, which is a number of total items.  There is internal data such as the current page, results per page default, available results per page, and the range (being how many pages should be padding before or after the current page in the element.  These would stand to be better  used as props so they can live individually on each instance of the component.  *Requires dropdown.js and search.js.*

 - __post-form.js__ - Posts a title and body to a server side listener somewhere using jquery post
 
 - __thread.js__ - Loads a thread of posts from server side using post information.  Works in conjunction with GET url request to load a necessary number of posts.  Takes a property of a thread ID and sends that in a GET request
 
 - __post.js__ - Posts a title and body to a server side listener somewhere using jquery post.  Requires a text, body, timestamp, image, and displayName to work correctly.

- __rich-text.js__ - Requires SCEditor.  Rich text editor SCEditor in bbcode format whic emits values on lifecycle destroy and sets text through a prop on mount.  Very handy for a rich text/preview component I'm working on
