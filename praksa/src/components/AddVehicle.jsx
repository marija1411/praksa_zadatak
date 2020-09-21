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

  handleSubmit = (event) => {
    alert(`You added: ${this.state.VehicleMake} ${this.state.VehicleModel}`);
  };

  render() {
    return (
      <main>
        <p>
          {this.state.VehicleMake} {this.state.VehicleModel}
        </p>
        <form onSubmit={this.handleSubmit}>
          <input
            name="VehicleMake"
            value={this.state.VehicleMake}
            onChange={this.handleChange}
            placeholder="VehicleMake"
          />
          <br />
          <input
            name="VehicleModel"
            value={this.state.VehicleModel}
            onChange={this.handleChange}
            placeholder="VehicleModel"
          />
          <br />
          <button>+ Add New Vehicle</button>
        </form>

        <button>SUBMIT</button>
      </main>
    );
  }
}

export default AddVehicle;
