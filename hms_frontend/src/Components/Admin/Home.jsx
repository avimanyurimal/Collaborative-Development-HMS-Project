import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Admin.css";
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill } from "react-icons/bs";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

function Home() {
    const [visitorCount, setVisitorCount] = useState(0);
    const [bookedCount, setBookedCount] = useState(0);
    const [residentCount, setResidentCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const handleVisitor = () => {  
        navigate("/visitor");
    };
    const handleBooked = () => {  
        navigate("/booked");
    };
    const handleResident = () => {  
        navigate("/resident");
    };

    // Fetch the visitor, booked, and resident counts
    useEffect(() => {
        const fetchCounts = async () => {
            try {
                setLoading(true);
                setError(null);
                
                // Fetching visitor count
                const visitorResponse = await axios.get("http://localhost:5175/api/admin/visitors/count");
                setVisitorCount(visitorResponse.data.count);
                

                // Fetching booked count
                const bookedResponse = await axios.get("http://localhost:5175/api/admin/booked/count");
                setBookedCount(bookedResponse.data.count);

                // Fetching resident count
                const residentResponse = await axios.get("http://localhost:5175/api/admin/residents/count");
                setResidentCount(residentResponse.data.count);

            } catch (error) {
                console.error("Error fetching counts:", error);
                setError("Failed to fetch data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchCounts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="main-container">
            <div className="main-title">
                <h3>DASHBOARD</h3>
            </div>

            <div className="main-cards">
                <Card
                    onclick={handleVisitor}
                    CARD={"CARD1"}
                    card={"card1"}
                    icon={BsFillArchiveFill}
                    type={"VISITOR"}
                    number={visitorCount}
                    color={"green"}
                />
                <Card
                    onclick={handleBooked}
                    CARD={"CARD1"}
                    card={"card1"}
                    icon={BsFillGrid3X3GapFill}
                    type={"BOOKED"}
                    number={bookedCount}
                    color={"orange"}
                />
                <Card
                    onclick={handleResident}
                    CARD={"CARD1"}
                    card={"card1"}
                    icon={BsPeopleFill}
                    type={"RESIDENT"}
                    number={residentCount}
                    color={"blue"}
                />
            </div>
        </div>
    );
}

export default Home;
