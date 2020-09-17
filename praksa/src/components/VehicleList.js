import React from "react";
import AddVehicle from "./AddVehicle";

class VehicleList extends React.Component {
  render() {
    return (
      // <input type="checkbox">{this.props.items.map (item => (<AddVehicle key={item.id} {item.text}/>))}</input>
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default VehicleList;

// class TodoList extends React.Component {
//     render() {
//       return (
//         <ul>
//           {this.props.items.map(item => (
//             <li key={item.id}>{item.text}</li>
//           ))}
//         </ul>
//       );
//     }
//   }
