import React from "react";
import style from "./setting.module.css";

function ControlTable({ data, forWho }) {
  const handelDelete = (index) => {
    const newData = [...data.slice(0, index), ...data.slice(index + 1)];
    console.log("Deleted item:", newData);
  };
  const handelEdit = (index) => {
    const itemToEdit = data[index];
    console.log("Editing item:", itemToEdit);
  };
  return (
    <div>
      <table
        id={style["tablee"]}
        className="border-4 m-10 bg-green-950 border-blue-500">
        <thead className="border-2">
          <tr>
            <th className="border-2 p-3 text-center">Id</th>
            <th className="border-2 p-3 text-center">Date</th>
            <th className="border-2 p-3 text-center">{forWho}</th>
            <th className="border-2 p-3 text-center">PageView</th>
            <th className="border-2 p-3 text-center">Delete</th>
            <th className="border-2 p-3 text-center">Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-2">
              <td className="border-2 p-3 text-center">{item.id}</td>
              <td className="border-2 p-3 text-center">{item.date}</td>
              <td className="border-2 p-3 text-center">
                {forWho === "Residents"
                  ? item.Residents
                  : forWho === "visitors"
                  ? item.visitors
                  : item.booked}
              </td>
              <td className="border-2 p-3 text-center">{item.pageViews}</td>
              <td className="border-2 p-3 text-center">
                <button
                  onClick={() => handelDelete(index)}
                  className="bg-red-700 p-3 text-white rounded">
                  Delete
                </button>
              </td>
              <td className="border-2 p-3 text-center">
                <button
                  onClick={() => handelEdit(index)}
                  className=" bg-orange-400 p-3 text-white rounded">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ControlTable;
