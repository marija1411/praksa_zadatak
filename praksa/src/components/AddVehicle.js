import React from "react";

class AddVehicle extends React.Component {
  constructor() {
    super();
    this.state = {
      VehicleMake: "",
      VehicleModel: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <main>
        <p>
          {this.state.VehicleMake} {this.state.VehicleModel}
        </p>
        <form>
          <input
            name="VehicleMake"
            value={this.state.VehicleMake}
            onChange={this.handleChange}
<<<<<<< HEAD
            placeholder="VehicleMake"
=======
            placeholder="Vehicle Make"
>>>>>>> 1
          />
          <br />
          <input
            name="VehicleModel"
            value={this.state.VehicleModel}
            onChange={this.handleChange}
<<<<<<< HEAD
            placeholder="VehicleModel"
          />
          <br />
          <button>Add New Vehicle</button>
=======
            placeholder="Vehicle Model"
          />
          <br />
          <button>Insert new vehicle</button>
>>>>>>> 1
        </form>
      </main>
    );
  }
}

export default AddVehicle;
