import React, {useState, useEffect} from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import {db} from "./firebase";
import firebase from "firebase";
import {selectUser} from "./features/userSlice";
import {useSelector} from "react-redux";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  // Set it up so that posts will be listed in Cloud Firestore - use useEffect
  useEffect(() => {
    // connect to the db
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      // name: "Jumba Mark",
      name: user.displayName,
      // description: "This is a test",
      description: user.email,
      message: input,
      // photoUrl: "",
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed-inputContainer">
        <div className="feed-input">
          <CreateIcon />
          <form action="">
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>

        <div className="feed-inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
        </div>
      </div>

      {/* Post */}
      <FlipMove>
        {/* Every time we have a post we go ahead and render it on the screen */}
        {posts.map(({id, data: {name, description, message, photoUrl}}) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
      {/* <Post name="Jumba Mark" description="Description" message="Don't limit your challenges - challenge your limits" src={photoUrl} /> */}
    </div>
  );
}

export default Feed;

// If we had a bunch of messages inside of our feed in order to capture that we use useState hook.Every variable you create using state should have a set of functions- whenever we wanna change posts I use setPosts to change it.
// Initial value for posts will be an empty array.
// Render posts on the feeds under posts (We initially shouldn't have anything rendered bec we have an empty array)

// Make it so that when I send a message it shows up in feeds - use an onClick on submit button

// Connect to our Firebase
// We use the no sql db (Firestore)
// useEffect - allows us to fire off code when the feed component loads and whenever the feed component re renders if we dont pass a second argument
// If we pass in a blank dependency it will fire off once whenever the feed component loads but it will never fire of again after that

// import the db from my local firebase
// Go into the collection of "posts", inside of our feed go ahead and do the following - onSnapshot(gives us a real time listener connection to the database - basically says give a snapchot of the posts collection).Every time the post gets added to, deletes changes or anything it will give us a snapchot

// Every time the posts change I'm gonna update my posts piece state
// In a collection we have many docs, we gonna get the docs,map through the docs and for every single doc inside of that collection we go ahead and return (having open paranthesis in the arrow function means implicit return) an object (document id inside the db, data-any of the data that is stored behind the post itself on db)

// We have created a real time listener to firebase. (Create a post collection when pushing messages in). This (message pushed in post collection) is directly mapped to posts - if my posts change it will go ahead and update it

// In sendPost; When I type in and hit enter I wanna push to the db
// When adding in the message grab the value when the user types in (useState,value prop in input, onChange-every time the user types in it fires off an event- get the input from the event)
// Once we push the post we go ahead and map it. Destructure the post and get the id and data - from when we pulled it from firebase . Post is gonna be mapped to all of those things
// A key is unique - helps React to render the last(new one) that was added instead of all the list
// Get rid of the hard coded one and type in a message (Shows in Feeds and creates a post collection in Firestore with the data deets )
// setInput to clear after sending
// The posts get put in a random location instead of appearing at the top - go over to where we actually mapped it from the database and add orderBy timestamp, pop it in desc order
