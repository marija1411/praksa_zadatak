import React from "react";
import VehicleList from "./VehicleList";

class AddVehicle extends React.Component {
  constructor() {
    super();
    this.state = { items: [], text: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        items= { this.state.items },
      };
    });
  }

  render() {
    return (
      <div>
        <h5>Insert vehicle Make and Model</h5>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default AddVehicle;
