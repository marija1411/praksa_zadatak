import React from "react";
import VehicleData from "./components/VehicleData.jsx";
import VehicleCheck from "./components/VehicleCheck.jsx";
import AddVehicle from "./components/AddVehicle.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      check: VehicleData,
    };
  }
  render() {
    const checkBox = this.state.check.map((item) => (
      <VehicleCheck key={item.id} item={item} />
    ));
    return (
      <div className="check-list">
        <h1 className="navbar">Vehicle List</h1>
        {checkBox}
        <AddVehicle />
      </div>
    );
  }
}

export default App;

// import React from "react";
// import VehicleMake from "./components/VehicleMake";
// import VehicleModel from "./components/VehicleModel";

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <VehicleMake />
//         <h2>Vehicle Model</h2>
//         <VehicleModel Make="BMW" Model="128" />
//         <VehicleModel Model="X5" />
//         <VehicleModel Model="X7" />
//         <VehicleModel Make="Ford" Model="Fiesta" />
//         <VehicleModel Model="Focus" />
//         <VehicleModel Model="GT" />
//         <VehicleModel Make="Volskwagen" Model="Polo" />
//         <VehicleModel Model="Passat" />
//         <VehicleModel Model="Golf" />
//       </div>
//     );
//   }
// }

// export default App
