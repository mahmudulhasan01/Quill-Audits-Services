import React, { useEffect, useState } from "react";

function Service({ service }) {
  //   console.log(service.id);
  const [flexReverse, setFlexReverse] = useState("");

  useEffect(() => {
    const e = service.id;
    if (e % 2 === 0) {
      setFlexReverse("flex");
    } else {
      setFlexReverse("flex flex-row-reverse");
    }
  }, [service]);

  return (
    <div className={`${flexReverse} gap-x-36 my-6`}>
      <div className="space-y-4 max-w-md">
        <p className="section_name">SERVICE</p>
        <h1 className="section_heading">{service.heading}</h1>
        <p>{service.description}</p>
        <ul>
          <li>Ethereum</li>
          <li>Polygon</li>
          <li>BSC</li>
          <li>Solana</li>
          <li>EOS</li>
        </ul>
      </div>
      <div className="">
        <img src={service.img} alt="" />
      </div>
    </div>
  );
}

export default Service;
