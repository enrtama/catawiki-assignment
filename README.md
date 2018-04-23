This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Explanation

##### What things did you consider for these solution?
* Init a template with create-react-app so everything works out of the box (keep it simple)
* Shall I use redux? I decided not to use as It takes more time to configure
* What short of errors can I find when calling the endpoint? (status codes)
* A bit of Responsiveness?
* Use axios as "Promise based HTTP client"
* Is the currency the same all the time? I assumed yes
* Show message when user is in "offline mode" / "Not connected"
* Simulating a slow response of the API with a function “delay"

##### What other approaches did you think about? Why did you discard them?
* Use another JS framework? ReactJS is what I feel comfortable with. I can be the most efficient using it.
* Using table library? Simple table so decided not to use it
* Use spinner to load data. Maybe a text telling the user that data is being loaded

##### What trade-offs did you make?
* Api module exported: function "request" can be used by other components (modular code)
* Constants: Code will be changed everywhere.
* Take advantage of create-react-app templates to register a service worker to handle online/offline mode
* create-react-app templates gives you configuration out of the box so I did not spend time on it.

## Folder Structure

After creation, your project should look like this:

```
catawiki-assignment/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
    manifest.json
    stocks.json
  src/
    __tests__/
      App.test.js
    api/
      index.js
    assets/
      catawiki-logo.png
    components/
      App.js
    constants/
      index.js
    styles/
      App.css
      index.css
    index.js
    registerServiceWorker.js
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

## Available Scripts

In the project directory, you can run:

### `yarn install`
Installs the project dependencies

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
