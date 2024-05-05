import React, { useState, useEffect } from "react";
import style from "./setting.module.css";
import HandelAccept from "./handelAccpet.jsx";

function ControlTable({ forWho }) {
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state
  const [data, setData] = useState([]); // Add data state

  const handelDelete = (index) => {
    const newData = [...data.slice(0, index), ...data.slice(index + 1)];
    console.log("Deleted item:", newData);
    // Optionally, you can update the state with the new data after deletion
    // setData(newData);
  };

  const handelEdit = (index) => {
    const itemToEdit = data[index];
    console.log("Editing item:", itemToEdit);
  };

  const handeladdBooked = () => {
    console.log("Add Booked to Resident");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let endpoint = "";
        switch (forWho) {
          case "residents":
            endpoint = "http://localhost:5175/api/admin/residentDetails";
            break;
          case "visitors":
            endpoint = "http://localhost:5175/api/admin/visitorsDetails";
            break;
          case "booked":
            endpoint = "http://localhost:5175/api/admin/bookedDetails";
            break;
          default:
            throw new Error("Invalid 'forWho' prop value: " + forWho);
        }

        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        // Conditionally set the state based on 'forWho'
      if (forWho === "residents") {
        setData(jsonData.ResidentsDetails);
      } else if (forWho === "visitors") {
        setData(jsonData.visitorsDetails);
      } else if (forWho === "booked") {
        setData(jsonData.BookingDetails);
      }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [forWho]); // Make sure to include forWho as a dependency

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <div>
        {forWho === "visitors" ? (
          <button>visitor</button>
        ) : forWho === "booked" ? (
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
        ) : forWho === "residents" ? (
          <button>Resident.</button>
        ) : null}
      </div>
      <table
        id={style["tablee"]}
        className="border-4 m-10 bg-green-950 border-blue-500"
      >
        <thead className="border-2">
          <tr>
            <th className="border-2 p-3 text-center">Id</th>
            <th className="border-2 p-3 text-center">FirstName</th>
            <th className="border-2 p-3 text-center">LastName</th>
            <th className="border-2 p-3 text-center">Email</th>
            <th className="border-2 p-3 text-center">PhoneNumber</th>
            <th className="border-2 p-3 text-center">Address</th>
            <th className="border-2 p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) &&
            data.map((item, index) => (
              <tr key={index} className="border-2">
                <td className="border-2 p-3 text-center">{item.id}</td>
                <td className="border-2 p-3 text-center">{item.firstName}</td>
                <td className="border-2 p-3 text-center">{item.lastName}</td>
                <td className="border-2 p-3 text-center">{item.email}</td>
                <td className="border-2 p-3 text-center">{item.phoneNumber}</td>
                <td className="border-2 p-3 text-center">{item.address}</td>
                <td className="border-2 p-3 text-center">
                  <button
                    onClick={() => handelDelete(index)}
                    className="bg-red-700 p-3 text-white rounded"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handelEdit(index)}
                    className="bg-orange-400 p-3 text-white rounded"
                  >
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
