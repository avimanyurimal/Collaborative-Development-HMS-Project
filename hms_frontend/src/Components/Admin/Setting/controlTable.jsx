import React, { useState } from "react";
import style from "./setting.module.css";
import HandelAccept from "./handelAccpet.jsx";

function ControlTable({ data, forWho }) {
  const handelDelete = (index) => {
    const newData = [...data.slice(0, index), ...data.slice(index + 1)];
    console.log("Deleted item:", newData);
  };
  const handelEdit = (index) => {
    const itemToEdit = data[index];
    console.log("Editing item:", itemToEdit);
  };

  const handeladdBooked = () => {
    console.log("Add Booked to Resident");
  };
  return (
    <div>
      <div>
        {forWho === "visitors" ? (
          <button>visitor</button>
        ) : forWho === "Booked" ? (
          <>
            <div>
              <BookedAccept Username={"SAM"} index={0} />
            </div>
            <div>
              <BookedAccept Username={"Samyog"} index={1} />
            </div>
            <div>
              <BookedAccept Username={"Koirala"} index={2} />
            </div>
          </>
        ) : (
          <button>Resident.</button>
        )}
      </div>
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

function BookedAccept({ index, Username }) {
  const [isAccept, setIsAccept] = useState(false);

  const handelAcceptBooked = () => {
    setIsAccept(true);
  };

  const handelRejectBooked = () => {
    setIsAccept(false);
    removeDiv(index);
  };

  const removeDiv = (index) => {
    const divToRemove = document.getElementById(`parentDiv-${index}`);
    divToRemove.remove();
  };

  return (
    <div id={`parentDiv-${index}`}>
      <h1>{Username} Wants to book a room</h1>
      <button
        className="p-3 m-3 bg-green-700 text-white font-bold rounded"
        onClick={handelAcceptBooked}
      >
        Accept
      </button>
      <button
        className="p-3 m-3 bg-red-700 text-white font-bold rounded"
        onClick={handelRejectBooked}
      >
        Reject
      </button>
      {isAccept && <HandelAccept />}
    </div>
  );
}
