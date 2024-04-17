import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../SideBar";
import style from "./Booked.module.css";
import Table from "../Table";
import Card from "../Card";
import Graph from "../Graph";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Booked() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const bookedData = [
    {
      id: 1,
      date: "2024-04-01",
      booked: 200,
      pageViews: 500,
    },
    {
      id: 2,
      date: "2024-04-02",
      booked: 180,
      pageViews: 480,
    },
    {
      id: 3,
      date: "2024-04-03",
      booked: 150,
      pageViews: 460,
    },
    {
      id: 4,
      date: "2024-04-04",
      booked: 220,
      pageViews: 520,
    },
    {
      id: 5,
      date: "2024-04-05",
      booked: 250,
      pageViews: 540,
    },
    {
      id: 6,
      date: "2024-04-06",
      booked: 190,
      pageViews: 490,
    },
    {
      id: 7,
      date: "2024-04-07",
      booked: 280,
      pageViews: 580,
    },
    {
      id: 8,
      date: "2024-04-08",
      booked: 210,
      pageViews: 550,
    },
    {
      id: 9,
      date: "2024-04-09",
      booked: 230,
      pageViews: 560,
    },
    {
      id: 10,
      date: "2024-04-10",
      booked: 260,
      pageViews: 590,
    },
    {
      id: 11,
      date: "2024-04-11",
      booked: 180,
      pageViews: 470,
    },
    {
      id: 12,
      date: "2024-04-12",
      booked: 300,
      pageViews: 600,
    },
    {
      id: 13,
      date: "2024-04-13",
      booked: 220,
      pageViews: 530,
    },
    {
      id: 14,
      date: "2024-04-14",
      booked: 240,
      pageViews: 580,
    },
    {
      id: 15,
      date: "2024-04-15",
      booked: 280,
      pageViews: 610,
    },
    {
      id: 16,
      date: "2024-04-16",
      booked: 320,
      pageViews: 640,
    },
    {
      id: 17,
      date: "2024-04-17",
      booked: 360,
      pageViews: 670,
    },
    {
      id: 18,
      date: "2024-04-18",
      booked: 400,
      pageViews: 700,
    },
    {
      id: 19,
      date: "2024-04-19",
      booked: 420,
      pageViews: 730,
    },
    {
      id: 20,
      date: "2024-04-20",
      booked: 380,
      pageViews: 690,
    },
  ];

  const navigate = useNavigate();
  const handelSetting = () => {
    navigate("/admin/setting");
  };

  return (
    <>
      {/* <Graph data={data} /> */}
      <div>
        <Header OpenSidebar={OpenSidebar} />
        <div className={style["container"]}>
          <div className={style["container1"]}>
            <Sidebar
              openSidebarToggle={openSidebarToggle}
              OpenSidebar={OpenSidebar}
            />
          </div>
          <div className={style["container2"]}>
            <Card
              CARD={"CARD"}
              card={"card"}
              onclick={handelSetting}
              icon={BsFillGrid3X3GapFill}
              type={"BOOKED"}
              number={100}
              color={"orange"}
            />
            <div className={style["body"]}>
              <Graph name={"booked"} nextName={"pageViews"} data={bookedData} />
              <div className={style["Table"]}>
                <Table forWho={"Booked"} data={bookedData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Booked;
