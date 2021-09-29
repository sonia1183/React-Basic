import React from 'react';
const Dog = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h3", {}, props.name),
    React.createElement("h3", {}, props.weight),
    React.createElement("h3", {}, props.breed),
    //React.createElement('h3',{},props.height), //not find, no error
  ]);
  /*return(
    <div>
      <h2>{props.name}</h2>
      <h3>{props.weight}</h3>
      <h4>{props.breed}</h4>
    </div>
  )*/
};
export default Dog;
