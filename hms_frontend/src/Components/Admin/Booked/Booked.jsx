import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header";
import Sidebar from "../SideBar";
import style from "./Booked.module.css";
import Table from "../Table";
import Card from "../Card";
import Graph from "../Graph";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Booked() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const [bookedData, setBookedData] = useState([]);

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    const navigate = useNavigate();
    const handleSetting = () => {
        navigate("/setting");
    };

    // main logic for Fetching the count of booked rooms from the server
    useEffect(() => {
        const fetchBookedCount = async () => {
            try {
                const response = await axios.get("http://localhost:5175/api/admin/booked/count");
                const { count } = response.data; // Extracting the  count from response data
                setBookedData(count); // Updating the  state with count
            } catch (error) {
                console.error("Error fetching booked count:", error);
            }
        };

        const fetchBookedData = async () => {
            try {
                const response = await axios.get("http://localhost:5175/api/admin/Booked");
                setBookedData(response.data.visitors); // Set the booked data to the state
            } catch (error) {
                console.error("Error fetching booked data:", error);
            }
        };


        fetchBookedCount();
        fetchBookedData();
    }, []);

    return (
        <>
            <Header OpenSidebar={OpenSidebar} />
            <div className={style["container"]}>
                <div className={style["container1"]}>
                    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
                </div>
                <div className={style["container2"]}>
                    <Card
                        CARD={"CARD"}
                        card={"card"}
                        onClick={handleSetting}
                        icon={BsFillGrid3X3GapFill}
                        type={"BOOKED"}
                        number={bookedData.length} // Display the number of booked items
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
        </>
    );
}

export default Booked;
