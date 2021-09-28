import React from 'react';
const Dog = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h3", {}, props.name),
    React.createElement("h3", {}, props.weight),
    React.createElement("h3", {}, props.breed),
    //React.createElement('h3',{},props.height), //not find, no error
  ]);
};
export default Dog;
