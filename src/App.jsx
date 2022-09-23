// this is a custom file made for several things learnt and tested on codesandbox


import React from "react";
import ReactDOM from "react-dom";

//props
function Card(props){
  return (
  <>
  <h2>{props.name}</h2>
    <img
      src={props.img}
      alt="avatar_img"
    />
    <p>{props.tel}</p>
    <p>{props.mail}</p>
    </>
    );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card name="Beyonce" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    tel="+123 456 789" mail="b@beyonce.com"/>

    <Card name="Jack Bauer" img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
    tel="+987 654 321" mail="jack@nowhere.com" />

    <Card name="Chuck Norris" img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
    tel="+918 372 574" mail="gmail@chucknorris.com" />
  </div>,
  document.getElementById("root")
);

// mapping data to components -> convert an array to map

import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contact) {
  return (
    <Card
      id={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;