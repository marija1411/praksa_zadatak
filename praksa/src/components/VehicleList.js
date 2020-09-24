import React from "react";

class VehicleList extends React.Component {
  render() {
    const items = this.props.items;
    const listItems = items.map((item) => {
      return (
        <div className="list" key={item.key}>
          <p>
            {item.text}
            <span>
              <button onClick={() => this.props.deleteItem(item.key)}>
                Delete
              </button>
            </span>
          </p>
        </div>
      );
    });
    return <div>{listItems}</div>;
  }
}

// function VehicleList(props) {
//   const items = props.items;
//   const listItems = items.map((item) => {
//     return (
//       <div className="list" key={item.key}>
//         <p>
//           {item.text}
//           <span>
//             <button onClick={() => props.deleteItem(item.key)}>Delete</button>
//           </span>
//         </p>
//       </div>
//     );
//   });
//   return <div>{listItems}</div>;
// }

export default VehicleList;
