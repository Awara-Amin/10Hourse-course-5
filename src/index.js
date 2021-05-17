import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  // div or section or article all are alright Lovee
  return (
    <div>
      <Person />
      <Message />
      <Awara />
      {/* <h1>Hi babay</h1> */}
      {/* <h2>Hi babay</h2> */}
    </div>
  );
}

// inline function
const Person = () => <h1>Hi babay</h1>;
const Message = () => {
  return <p>Hi babay</p>;
};

function Awara() {
  return <h1> Awara, this should work too</h1>;
}

ReactDom.render(<Greeting />, document.getElementById("root"));
