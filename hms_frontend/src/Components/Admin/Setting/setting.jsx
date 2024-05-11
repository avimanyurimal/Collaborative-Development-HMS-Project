import React, { useState, useEffect } from "react";
import axios from "axios";
import ControlTable from "./controlTable";
import Card from "../Card";
import Header from "../Header";
import SideBar from "../SideBar";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
} from "react-icons/bs";
import style from "./setting.module.css";

function Setting() {
  // State variables
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    // Handlers to toggle state
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  const [isVisitorClick, setIsVisitorClick] = useState(false);
  const [isResidentClick, setIsResidentClick] = useState(false);
  const [isBookClick, setIsBookClick] = useState(false);

  // Initialize data counts
  const [visitorCount, setVisitorCount] = useState(0);
  const [bookedCount, setBookedCount] = useState(0);
  const [residentCount, setResidentCount] = useState(0);
  const [visitorData, setVisitorData] = useState([]);
  const [bookedData, setBookedData] = useState([]);
  const [residentData, setResidentData] = useState([]);



  const handleVisitorClick = () => {
    setIsVisitorClick(!isVisitorClick);
  };

  const handleBookClick = () => {
    setIsBookClick(!isBookClick);
  };

  const handleResidentClick = () => {
    setIsResidentClick(!isResidentClick);
  };

  // Fetch visitor, booked, and resident counts from the API
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const visitorResponse = await axios.get(
          "http://localhost:5175/api/admin/visitors/count"
        );
        setVisitorCount(visitorResponse.data.count);

        const bookedResponse = await axios.get(
          "http://localhost:5175/api/admin/booked/count"
        );
        setBookedCount(bookedResponse.data.count);

        const residentResponse = await axios.get(
          "http://localhost:5175/api/admin/residents/count"
        );
        setResidentCount(residentResponse.data.count);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <>
      <Header OpenSidebar={OpenSidebar} />
      <div className={style["container"]}>
        <div className={style["container1"]}>
          <SideBar
            openSidebarToggle={openSidebarToggle}
            OpenSidebar={OpenSidebar}
          />
        </div>
      </div>
      <div className={style["Main"]}>
        {/* Visitor Section */}
        <div className={style["table"]}>
          <Card
            CARD="CARD"
            card="card"
            onclick={handleVisitorClick}
            icon={BsFillArchiveFill}
            type="VISITOR"
            number={visitorCount}
            color="green"
          />
          {isVisitorClick && (
            <ControlTable forWho="visitors" data={visitorData} />
          )}
        </div>

        {/* Booked Section */}
        <div className={style["table"]}>
          <Card
            CARD="CARD"
            card="card"
            onclick={handleBookClick}
            icon={BsFillGrid3X3GapFill}
            type="BOOKED"
            number={bookedCount}
            color="orange"
          />
          {isBookClick && <ControlTable forWho="BookedRoom" data={bookedData} />}
        </div>

        {/* Resident Section */}
        <div className={style["table"]}>
          <Card
            CARD="CARD"
            card="card"
            onclick={handleResidentClick}
            icon={BsPeopleFill}
            type="RESIDENT"
            number={residentCount}
            color="blue"
          />
          {isResidentClick && (
            <ControlTable forWho="Residents" data={residentData} />
          )}
        </div>
      </div>
    </>
  );
}

export default Setting;
