import React from "react";

export default function AboutCard(props) {
    const cardStyle = {
        border: "1px solid black",
        borderRadius: "8px",
        width: "270px",
        height: "250px",
        margin: "15px",
        boxShadow: "0px 0px 5px #000000",
        padding: "20px" // Add padding as needed (e.g., 20px)
    };

    return (
        <div style={cardStyle}>
            <span>{props.AboutEvents}</span>
            <div style={{ height: "10px", textAlign: "center" }}>{props.date}</div>
            <img src={props.imageURL} alt={props.imageAlt} style={{ height: "100px", textAlign: "center", margin: '17px' }} />
            <div style={{ fontWeight: "bold", width: "100%", textAlign: "center" }}>{props.location}</div>
            <div style={{ width: "100%", textAlign: "center" }}>{props.paragraph}</div>
        </div>
    );
}
