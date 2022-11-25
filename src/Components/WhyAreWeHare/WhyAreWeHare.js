import React from "react";

function WhyAreWeHare() {
  return (
    <section className="my-12">
      <div className="flex gap-10 items-center">
        <div className="space-y-4">
          <p className="section_name">WHY ARE WE HERE</p>
          <h1 className="section_heading">
            What is the Need of <br /> Smart Contract Audit?
          </h1>
          <button className="btn_blue">Talk to an Expert</button>
        </div>
        {/* ============================== Text =================== */}
        <div className="text-center flex flex-col">
          <p className="text-blue-300 py-4 px-6 border border-blue-300 rounded-lg w-1/2 justify-self-end">
            Smart Contract Audits Build Social Authority
          </p>
          <p className="text-blue-500 py-4 px-6 border border-blue-500 rounded-lg w-3/5 justify-self-center">
            Only 52.7% of the Exploited Web3 Projects were Audited.
          </p>
          <p className="text-white bg-blue-700 py-4 px-6 border border-blue-700 rounded-lg w-2/3 justify-self-start">
            47.3% of the Web3 Hacks in First Half of 2022 were due to Smart
            Contract Vulnerabilities.
          </p>
          <p className="text-blue-500 py-4 px-6 border border-blue-500 rounded-lg w-3/5 justify-self-center">
            Helps in Earning Users/Investors Trust for the Product
          </p>
          <p className="text-blue-300 py-4 px-6 border border-blue-300 rounded-lg w-1/2 justify-self-end">
            Helps in Earning Users/Investors Trust for the Product
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyAreWeHare;
