import React from "react";
import securityImg from "../../assets/security.png";

function Security() {
  return (
    <section className="my-12 space-y-4 ">
      <p className="section_name text-center">THE SECURITY</p>
      <h1 className="section_heading text-center text-yellows">
        How We Secure Your Web3 Project
      </h1>
      <img className="py-10 min-w-full" src={securityImg} alt="" />
    </section>
  );
}

export default Security;
