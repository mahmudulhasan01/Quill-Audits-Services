import React from "react";
import img1 from "../../assets/feature1.png";
import img2 from "../../assets/feature2.png";
import img3 from "../../assets/feature3.png";
import img4 from "../../assets/feature4.png";
import img5 from "../../assets/feature5.png";
import img6 from "../../assets/feature6.png";

const features = [img1, img2, img3, img4, img5, img6];

const Mentions = () => {
  return (
    <section className="my-12 space-y-4">
      <p className="section_name text-center">MENTIONS</p>
      <h1 className="section_heading text-center">As Featured In</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="border-2 object-cover border-blue-200 rounded-lg text-center">
          <img src={img1} alt="" />
          <button className=" font-semibold tracking-wide  text-lg  py-4 mx-auto block text-blue-400">
            Read More
          </button>
        </div>
        <div className="border-2  border-blue-200 rounded-lg text-center">
          <img className="object-fit" src={img2} alt="" />
          <button className=" font-semibold tracking-wide  text-lg  py-4 mx-auto block text-blue-400">
            Read More
          </button>
        </div>
        <div className="border-2 border-blue-200 rounded-lg text-center">
          <img className="object-fit" src={img3} alt="" />
          <button className=" font-semibold tracking-wide  text-lg  py-4 mx-auto block text-blue-400">
            Read More
          </button>
        </div>
        <div className="border-2 border-blue-200 rounded-lg text-center">
          <img className="object-fit" src={img4} alt="" />
          <button className=" font-semibold tracking-wide  text-lg  py-4 mx-auto block text-blue-400">
            Read More
          </button>
        </div>
        <div className="border-2 border-blue-200 rounded-lg text-center">
          <img className="object-fit" src={img5} alt="" />
          <button className=" font-semibold tracking-wide  text-lg  py-4 mx-auto block text-blue-400">
            Read More
          </button>
        </div>
        <div className="border-2 border-blue-200 rounded-lg text-center">
          <img className="object-fit" src={img6} alt="" />
          <button className=" font-semibold tracking-wide  text-lg  py-4 mx-auto block text-base text-blue-400">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mentions;
