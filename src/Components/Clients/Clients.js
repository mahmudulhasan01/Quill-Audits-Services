import React from "react";
import pathfund from "../../assets/pathfund.png";

function Clients() {
  return (
    <section className="my-12 space-y-4 ">
      <p className="text-solid-blue leading-3">Clients</p>
      <h1 className="text-black text-3xl font-semibold">Partner</h1>
      <div className="grid grid-cols-6 gap-10">
        <img src={pathfund} alt="" />
        <img src={pathfund} alt="" />
        <img src={pathfund} alt="" />
        <img src={pathfund} alt="" />
        <img src={pathfund} alt="" />
        <img src={pathfund} alt="" />
      </div>
    </section>
  );
}

export default Clients;
