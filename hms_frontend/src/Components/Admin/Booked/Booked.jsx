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

    // Helper function to convert data to an array if necessary
    const convertDataToArray = (data) => {
        if (Array.isArray(data)) {
            return data;
        } else {
            console.warn("Data is not an array, converting to an array.");
            return [data];
        }
    };

    // Fetch the booked data from the server
    useEffect(() => {
        const fetchBookedData = async () => {
            try {
                const response = await axios.get("http://localhost:5175/api/admin/booked/count");
                const fetchedData = response.data;
                // Convert data to array if necessary
                const formattedData = convertDataToArray(fetchedData);
                setBookedData(formattedData);
            } catch (error) {
                console.error("Error fetching booked data:", error);
            }
        };
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
                        number={bookedData.length}
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
