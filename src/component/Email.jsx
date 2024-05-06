import { Button, Html } from "@react-email/components";
import { React, useState } from "react";

export default function Email() {
    const [isHovered, setIsHovered] = useState(false);
    const buttonStyle = {
        background: isHovered ? "darkblue" : "blue", // Change color on hover
        color: "#fff",
        padding: "12px 20px",
        borderRadius: "5px", // Use 'borderRadius' instead of 'round'
        transition: "background-color 0.3s", // Smooth transition for hover effect
    };
    return (
        <Html className="flex justify-center my-10" >
            <Button
                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                style={buttonStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                Send Email
            </Button>
        </Html>
    );
}