import React from "react";

const Bill = ({ price }: any) => {


  const total = (price:any) => {
    const totolPrice = price.map((pris: any) => {
      let newprice = 0;
      newprice = newprice + pris;
      return newprice;
    });
  };


  return (
    <div className="border bg-gray-300 ">
      {/* bill */}
      <h1> {price}</h1>
    </div>
  );
};

export default Bill;
