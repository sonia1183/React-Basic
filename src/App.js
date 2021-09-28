import React from 'react';
import ReactDOM from 'react-dom';
import Dog from "./Dog";
const App = () => {
  var arr = [1, 2, 3, 4];

  return React.createElement(
    "div", //tag
    { id: "website-title" }, //attributes with the element
    [
      React.createElement("h3", {}, "Dog Website"),
      ...[arr].map((item) => React.createElement("h1", {}, item)), //spread operator
      arr.map((item) => React.createElement("h1", {}, item)),
      React.createElement(Dog, {
        name: "taffy",
        weight: "50.70 kg",
        breed: "Bull",
      }),
      React.createElement(Dog, {
        name: "PitBull",
        weight: "50.70 kg",
        breed: "Bull",
      }),
      React.createElement(Dog, {
        name: "Lisa",
        weight: "50.70 kg",
        breed: "Husky",
      }),
    ] //content can be another component also
  );
};

ReactDOM.render(
  React.createElement(
    //component to render
    App
  ),
  document.getElementById("root") //place to render
);
