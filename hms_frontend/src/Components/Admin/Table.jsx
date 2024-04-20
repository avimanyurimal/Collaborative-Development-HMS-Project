import React from "react";
import PropTypes from "prop-types";
import style from "./Visitor/Visitor.module.css";

function Table({ data = [], forWho }) {
  // Validate that data is an array
  if (!Array.isArray(data)) {
    console.warn("Expected array, but received:", data);
    return <p>No data available or data type is incorrect.</p>;
  }

  // Determine which column headers to display based on the forWho prop
  const getTableHeaders = () => {
    switch (forWho.toLowerCase()) {
      case "residents":
        return ["ID", "First Name", "Last Name", "Email"];
      case "visitors":
        return ["ID", "First Name", "Last Name", "Email"];
      case "booked":
        return ["ID", "First Name", "Last Name", "Email", "RoomNumber", "RoomType"];
      default:
        console.warn("Unexpected forWho value:", forWho);
        return [];
    }
  };

  // Determine which column data to display based on the forWho prop
  const getColumnData = (item) => {
    switch (forWho.toLowerCase()) {
      case "residents":
        return [item.id, item.firstName, item.lastName, item.email];
      case "visitors":
        return [item.id, item.firstName, item.lastName, item.email];
      case "booked":
        return [item.id, item.firstName, item.lastName, item.email, item.RoomNumber, item.RoomType];
      default:
        console.warn("Unexpected forWho value:", forWho);
        return [];
    }
  };

  return (
    <div>
      <table
        id={style["tablee"]}
        className="border-4 m-10 w-full bg-green-950 border-blue-500"
      >
        <thead className="border-2">
          <tr>
            {getTableHeaders().map((header, index) => (
              <th key={index} className="border-2 p-3 text-center">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-2">
              {getColumnData(item).map((column, columnIndex) => (
                <td key={columnIndex} className="border-2 p-3 text-center">{column}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Define prop types for the component
Table.propTypes = {
  data: PropTypes.array,
  forWho: PropTypes.string.isRequired,
};

export default Table;
