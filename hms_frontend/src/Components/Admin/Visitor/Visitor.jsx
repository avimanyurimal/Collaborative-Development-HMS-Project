import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header";
import SideBar from "../SideBar";
import { BsFillArchiveFill } from "react-icons/bs";
import style from "./Visitor.module.css";
import Table from "../Table";
import Graph from "../Graph";
import Card from "../Card";
import { useNavigate } from "react-router-dom";

function Visitor() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await axios.get("http://localhost:5175/api/admin/visitors/count");
        setVisitorCount(response.data.count);
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      }
    };

    fetchVisitorCount();
  }, []);

  const navigate = useNavigate();
  const handleSetting = () => {
    navigate("/setting");
  };

  return (
    <>
      <Header OpenSidebar={setOpenSidebarToggle} />
      <div className={style["container"]}>
        <div className={style["container1"]}>
          <SideBar openSidebarToggle={openSidebarToggle} />
        </div>
        <div className={style["container2"]}>
          <Card
            onClick={handleSetting}
            CARD={"CARD"}
            card={"card"}
            icon={BsFillArchiveFill}
            type={"VISITOR"}
            number={visitorCount}
            color={"green"}
          />
          <div className={style["body"]}>
            <Graph
              name={"visitors"}
              nextName={"pageViews"}
              data={[]} // Provide data for the graph here
            />
            <div className={style["Table"]}>
              <Table forWho={"visitors"} data={[]} /> {/* Provide data for the table here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Visitor;

