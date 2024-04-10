import React from "react";
import style from "./Visitor/Visitor.module.css";
import Booked from "./Booked/Booked";

function Table({ data, forWho }) {
  return (
    <div>
      <table
        id={style["tablee"]}
        className="border-4 m-10 w-full bg-green-950 border-blue-500">
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
              <td className="border-2 p-3 text-center">
                {/* {forWho === "Residents" ? item.Residents : item.visitors} */}
                {forWho === "Residents"
                  ? item.Residents
                  : forWho === "visitors"
                  ? item.visitors
                  : item.booked}
              </td>
              <td className="border-2 p-3 text-center">{item.pageViews}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
