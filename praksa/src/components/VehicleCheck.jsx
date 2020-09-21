import React from "react";

class VehicleCheck extends React.Component {
  render() {
    return (
      <div className="check-list">
        <input type="checkbox" />
        {this.props.item.VehicleMake} {this.props.item.VehicleModel}
      </div>
    );
  }
}

export default VehicleCheck;
