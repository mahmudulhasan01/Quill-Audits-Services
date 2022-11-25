import React from "react";

function Achievement() {
  return (
    <section className="">
      <div className="text-white flex py-4 pb-20 gap-x-20">
        <div className="flex_center gap-4 w-80">
          <p className="text-4xl text-solid-blue font-semibold">$12.8B</p>
          <p className="">
            Amount Lost To <br /> DeFi Hacks in 2021
          </p>
        </div>
        <div className="flex_center gap-4 w-68">
          <p className="text-4xl text-solid-blue font-semibold">600K</p>
          <p className="">
            Lines of Codes <br /> Secured by QuillAudits
          </p>
        </div>
        <div className="flex_center gap-4 w-68">
          <p className="text-4xl text-solid-blue font-semibold">$14.6B</p>
          <p className="">
            Amount Protected <br /> By QuillAudits
          </p>
        </div>
      </div>
    </section>
  );
}

export default Achievement;
