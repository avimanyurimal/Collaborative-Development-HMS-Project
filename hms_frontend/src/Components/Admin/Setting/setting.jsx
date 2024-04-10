import React, { useState } from "react";
import style from "./setting.module.css";
import ControlTable from "./controlTable";
import Card from "../Card";
import Header from "../Header";
import SideBar from "../SideBar";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";

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

const residentData = [
  {
    id: 1,
    date: "2024-04-01",
    Residents: 200,
    pageViews: 500,
  },
  {
    id: 2,
    date: "2024-04-02",
    Residents: 180,
    pageViews: 480,
  },
  {
    id: 3,
    date: "2024-04-03",
    Residents: 150,
    pageViews: 460,
  },
  {
    id: 4,
    date: "2024-04-04",
    Residents: 220,
    pageViews: 520,
  },
  {
    id: 5,
    date: "2024-04-05",
    Residents: 250,
    pageViews: 540,
  },
  {
    id: 6,
    date: "2024-04-06",
    Residents: 190,
    pageViews: 490,
  },
  {
    id: 7,
    date: "2024-04-07",
    Residents: 280,
    pageViews: 580,
  },
  {
    id: 8,
    date: "2024-04-08",
    Residents: 210,
    pageViews: 550,
  },
  {
    id: 9,
    date: "2024-04-09",
    Residents: 230,
    pageViews: 560,
  },
  {
    id: 10,
    date: "2024-04-10",
    Residents: 260,
    pageViews: 590,
  },
  {
    id: 11,
    date: "2024-04-11",
    Residents: 180,
    pageViews: 470,
  },
  {
    id: 12,
    date: "2024-04-12",
    Residents: 300,
    pageViews: 600,
  },
  {
    id: 13,
    date: "2024-04-13",
    Residents: 220,
    pageViews: 530,
  },
  {
    id: 14,
    date: "2024-04-14",
    Residents: 240,
    pageViews: 580,
  },
  {
    id: 15,
    date: "2024-04-15",
    Residents: 280,
    pageViews: 610,
  },
  {
    id: 16,
    date: "2024-04-16",
    Residents: 320,
    pageViews: 640,
  },
  {
    id: 17,
    date: "2024-04-17",
    Residents: 360,
    pageViews: 670,
  },
  {
    id: 18,
    date: "2024-04-18",
    Residents: 400,
    pageViews: 700,
  },
  {
    id: 19,
    date: "2024-04-19",
    Residents: 420,
    pageViews: 730,
  },
  {
    id: 20,
    date: "2024-04-20",
    Residents: 380,
    pageViews: 690,
  },
];
function setting() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <>
      {/* <Graph data={data} /> */}
      <div>
        <Header OpenSidebar={OpenSidebar} />
        <div className={style["container"]}>
          <div className={style["container1"]}>
            <SideBar
              openSidebarToggle={openSidebarToggle}
              OpenSidebar={OpenSidebar}
            />
          </div>
        </div>
      </div>
      <div className={style["Main"]}>
        <div className={style["table"]}>
          <Card
            icon={BsFillGrid3X3GapFill}
            type={"BOOKED"}
            number={100}
            color={"orange"}
          />
          <ControlTable forWho={"Booked"} data={bookedData} />
        </div>
        <div className={style["table"]}>
          <Card
            icon={BsPeopleFill}
            type={"RESEDENT"}
            number={400}
            color={"blue"}
          />
          <ControlTable forWho={"Residents"} data={residentData} />
        </div>
        <div className={style["table"]}>
          <Card
            icon={BsFillArchiveFill}
            type={"VISITOR"}
            number={200}
            color={"green"}
          />
          <ControlTable forWho={"visitors"} data={visitorData} />
        </div>
      </div>
    </>
  );
}

export default setting;
