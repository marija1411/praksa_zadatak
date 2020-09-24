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
        <button>SUBMIT</button>
      </div>
    );
  }
}

export default App;
