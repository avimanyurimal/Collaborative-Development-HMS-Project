import React from "react";
import PropTypes from "prop-types";
import style from "./Visitor/Visitor.module.css";

function Table({ data = [], forWho }) {
  // Validate that data is an array
  if (!Array.isArray(data)) {
    console.warn("Expected array, but received:", data);
    return <p>No data available or data type is incorrect.</p>;
  }

  // Determine which column data to display based on the forWho prop
  const getColumnData = (item) => {
    const who = forWho.toLowerCase();
    switch (who) {
      case "residents":
        return item.Residents;
      case "visitors":
        return item.visitors;
      case "booked":
        return item.booked;
      default:
        console.warn("Unexpected forWho value:", forWho);
        return null;
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
            <th className="border-2 p-3 text-center">Id</th>
            <th className="border-2 p-3 text-center">Date</th>
            <th className="border-2 p-3 text-center">{forWho}</th>
            <th className="border-2 p-3 text-center">PageView</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-2">
              <td className="border-2 p-3 text-center">{item.id}</td>
              <td className="border-2 p-3 text-center">{item.date}</td>
              <td className="border-2 p-3 text-center">{getColumnData(item)}</td>
              <td className="border-2 p-3 text-center">{item.pageViews}</td>
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
