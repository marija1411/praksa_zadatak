import React from "react";

class VehicleCheck extends React.Component {
  render() {
    return (
      <div className="check-list">
        <input type="checkbox" />
        <p>
          {this.props.item.VehicleMake} {this.props.item.VehicleModel}
        </p>
      </div>
    );
  }
}

export default VehicleCheck;
