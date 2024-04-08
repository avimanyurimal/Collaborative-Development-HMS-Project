import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../SideBar";
import { BsFillArchiveFill } from "react-icons/bs";
import style from "./Visitor.module.css";
import Table from "../Table";
import Graph from "../Graph";

function Visitor() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const visitorData = [
    {
      id: 1,
      date: "2024-04-01",
      visitors: 200,
      pageViews: 500,
    },
    {
      id: 2,
      date: "2024-04-02",
      visitors: 180,
      pageViews: 480,
    },
    {
      id: 3,
      date: "2024-04-03",
      visitors: 150,
      pageViews: 460,
    },
    {
      id: 4,
      date: "2024-04-04",
      visitors: 220,
      pageViews: 520,
    },
    {
      id: 5,
      date: "2024-04-05",
      visitors: 250,
      pageViews: 540,
    },
    {
      id: 6,
      date: "2024-04-06",
      visitors: 190,
      pageViews: 490,
    },
    {
      id: 7,
      date: "2024-04-07",
      visitors: 280,
      pageViews: 580,
    },
    {
      id: 8,
      date: "2024-04-08",
      visitors: 210,
      pageViews: 550,
    },
    {
      id: 9,
      date: "2024-04-09",
      visitors: 230,
      pageViews: 560,
    },
    {
      id: 10,
      date: "2024-04-10",
      visitors: 260,
      pageViews: 590,
    },
    {
      id: 11,
      date: "2024-04-11",
      visitors: 180,
      pageViews: 470,
    },
    {
      id: 12,
      date: "2024-04-12",
      visitors: 300,
      pageViews: 600,
    },
    {
      id: 13,
      date: "2024-04-13",
      visitors: 220,
      pageViews: 530,
    },
    {
      id: 14,
      date: "2024-04-14",
      visitors: 240,
      pageViews: 580,
    },
    {
      id: 15,
      date: "2024-04-15",
      visitors: 280,
      pageViews: 610,
    },
    {
      id: 16,
      date: "2024-04-16",
      visitors: 320,
      pageViews: 640,
    },
    {
      id: 17,
      date: "2024-04-17",
      visitors: 360,
      pageViews: 670,
    },
    {
      id: 18,
      date: "2024-04-18",
      visitors: 400,
      pageViews: 700,
    },
    {
      id: 19,
      date: "2024-04-19",
      visitors: 420,
      pageViews: 730,
    },
    {
      id: 20,
      date: "2024-04-20",
      visitors: 380,
      pageViews: 690,
    },
  ];
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
            <div className={style["card"]}>
              <div className="card-inner">
                <h3>VISITOR</h3>
                <BsFillArchiveFill className="card_icon" />
              </div>
              <h1>300</h1>
            </div>
            <div className={style["body"]}>
              <Graph data={visitorData} />
              <div className={style["Table"]}>
                <Table forWho={"Visitors"} data={visitorData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Visitor;
