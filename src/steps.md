## React with Redux setup

npx create-react-app linkedin-clone-yt --template redux; .<br />
creates and sets up a new React application starter with the **Redux Toolkit**

## Setting up FireBase

We use Firebase for authentication, hosting and as a database. We combine all of this with redux and material UI to get a nice finished product<br />
[Go over to firebase](https://firebase.google.com) > console > Add Project.<br />
Click Firestore Database, Select Start in test mode and Next <br />
The location doesn’t matter, just continue clicking on **Enable**. <br />

### setting up authentication

From the side panel go over to Authentication tab <br />
Click on Get Started. Enable Email/Password <br />

### connect this Firebase project to our React App

Click on the Settings icon on the side panel and select Project Settings. <br />
Scroll down and click on the </> icon. Also set up firebase hosting and register the app( gonna allow you to deploy the app afterwards). <br />
Skip step 2 bec we using React and JS modules, Install Firebase CLI <br />
Skip Deploy to Firebase Hosting . Continue to console <br />
Click on Config and copy the firebaseConfig<br />

## Clean up process

Delete App.test, logo.svg, setupTest <br />
Remove the header tag in App.js<br />
Remove all the code in app.css<br />
In index css make sure there's margin of zero on everything<br />
We will use the **BEM** naming convention - how we name our classes in React<br />

## Start building

Header, Left side bar, Feed, Right Widgets (flexbox)<br />

### Header

Create a Header.js file -- rfce <br />
Create a css file for this (Header.css)<br />
Two containers for left and right section<br />
Install Material UI for icons; `yarn add @material-ui/core` <br />
Search for icons in [materilal UI](https://mui.com/) and grab the search icon<br />

#### Header Right

Create a reusable component called HeaderOption <br />
Header option - icons, text underneath<br />

### App Body

Side bar, Feed, Widgets(under one div) <br />

## Sidebar

Create a Sidebar component <br />
Under recent in sidebar,make it in a reusable fashion but not in a component way.Create a recentItem function which takes in some arguments; <br />

## Feeds

Create a Feed.js component <br />

Create a feed-input then create a form (when you type into input field, hit enter goes ahead and submits message onto the screen) <br />
Input container will have another section inside of it for inputOption(create a component)<br />

Posts (where we see all the posts rendered out<br/>
Create a Post.js component, incorporate useState when adding posts <br />

##### Adding animations to the feed

Implement this library into our code; [react flip move](https://github.com/joshwcomeau/react-flip-move)<br />
Check out framer motion too<br />
We need to install `yarn add react-flip-move` <br />
Go into our Post.js and change it into an arrow function <br />
Set up a forwardRef, import it from React<br />
Wrap it around Post and where I destructured add a ref(react needs to have certain pointers towards certain things)<br />
Wrap the Post component in Feeds in a `<FlipMove></FlipMove>` tag<br />
When we deal with any kind of animations, like this library the way they implement it they need reference to the object that was gonna get animated in<br/>

### Use Firebase (Connecting to the database)

Add a Firebase file (firebase.js) <br />
Config, copy the code<br />
Install firebase to the project `yarn add firebase` <br />
Connect to database and set everything up`const firebaseApp = firebase.initializeApp(firebaseConfig)` <br />
Get the db. Go to the firebase app we initialized and get firestore `const db = firebaseApp.firestore();` .Inside of db we have access to a variable <br />
Access to authentication (login support) `const auth = firebase.auth();` <br />

#### Authentication

Full name which will be required if you are registering a new account A profile pic is optional (you can provide a url <br />
Email and password <br />
All this will be powered by Firebase <br />
Store the user inside of Redux (redux will allow us to go ahead and pull in the data from where we need it <br />

#### Redux

The purpose of redux - whenever you have a react app and you have nested componenets and we need to access the user in many different places rather than passing it as a prop to individual components we introduce redux which allows us to manage the flow of data inside of an app <br />

#### Login page

Go to app js and pull the user from the data store with the selector

## Widgets

Create a Widgets.js component <br />

# Deploying on firebase

firebase login <br />
firebase init <br />
You get a pop up that comes on the screen > Choose hosting-Configure files..<br />
Use an existing project<br />
Select a default firebase project for these directory <br />
Use for your public directory? build <br />
Configure as a single page app? y <br />
Set up automatic builds and deploys <br />
npm run build (goes ahead and creates an optimized production build - gets rid of all the crap that we don't need)<br />
We've just build the app and it now sits inside of the build folder (If we make any more changes we have to do npm run build again)<br />
firebase deploy<br />
