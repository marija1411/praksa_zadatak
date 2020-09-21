import React from "react";

function Edit(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

// class Edit extends React.Component {
//   render() {
//     return (
//       <div className>
//         <button>Submit</button>
//       </div>
//     );
//   }
// }

export default Edit;

// function getGreeting(user) {
//     if (user) {
//       return <h1>Hello, {formatName(user)}!</h1>;
//     }
//     return <h1>Hello, Stranger.</h1>;
//   }
