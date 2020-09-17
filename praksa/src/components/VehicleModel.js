import React from "react";

class VehicleModel extends React.Component {
  render() {
    return (
      <div>
        <h5>{this.props.Make}</h5>
        <ul>
          <li>{this.props.Model}</li>
        </ul>
      </div>
    );
  }
}

// function VehicleModel(props){
//     console.log(props)
//     return (
//         <div>
//         <h3>Vehicle Model</h3>
//         <h5>BMW</h5>
//         <ul>
//           <li>128</li>
//           <li>X5</li>
//           <li>X7</li>
//         </ul>

//         <h5>Ford</h5>
//         <ul>
//           <li>Fiesta</li>
//           <li>GT</li>
//           <li>Focus</li>
//         </ul>

//         <h5>Volskwagen</h5>
//         <ul>
//           <li>Golf</li>
//           <li>Polo</li>
//           <li>Passat</li>
//         </ul>
//         <input type="filter" />
//       </div>
//     )
// }

export default VehicleModel;
