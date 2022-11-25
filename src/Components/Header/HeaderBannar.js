import React from "react";
import bannarImg from "../../assets/bannarImg.png";

function HeaderBannar() {
  return (
    <section>
      <div className="text-white flex flex-row-reverse py-14">
        <div className="">
          <img src={bannarImg} alt="" />
        </div>
        <div className="space-y-5">
          <h1 className="text-5xl">
            Emerging Web3 Ventures Trust Our Smart Contract Audits & Diligence
            Services
          </h1>
          <p>QuillAudits, Making web3 a safer place</p>
          <div className="">
            <button className="btn_blue">Request Free Quote</button>
            <button className="btn_transparent ml-3">Explore Services</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderBannar;
