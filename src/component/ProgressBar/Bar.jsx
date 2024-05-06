import React from "react";

const Bar = ({ value }) => {
  const Parentdiv = {
    height: 8,
    width: "100%",
    background: `linear-gradient(to right, #ff7e5f, #6841ea)`,
    borderRadius: 3,
    marginTop: 20,
    marginBottom: 20,
    position: "relative",
  };

  const Childdiv = {
    height: 14,
    position: "absolute",
    top: -3,
    left: `${value * 10}%`,
    // left: "90%",
    width: 10,
    backgroundColor: "#3c434d",
    border: "1px solid white",
  };

  return (
    <div className="w-[100%] ">
      <div style={Parentdiv}>
        <div style={Childdiv}></div>
      </div>
    </div>
  );
};

export default Bar;
