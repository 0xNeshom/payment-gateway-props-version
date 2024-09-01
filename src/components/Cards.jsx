import React from "react";
import Card from "./Card";
const Cards = ({ formData }) => {
  return (
    <div className=" overflow-y min-h-screen   bg-[#222222]  sticky top-11 mx-2 shadow-2xl ">
      <div className="flex flex-col items-center justify-center ">
       {
            formData.map((card, index) => (
                <Card key={index} card={card}/>
            ))
       }
      </div>
    </div>
  );
};

export default Cards;
