import React from "react";
import Service from "./Service";
import img1 from "../../assets/service1.png";
import img2 from "../../assets/service2.png";
import img3 from "../../assets/service3.png";

const services = [
  {
    id: 1,
    heading: "Smart Contract Auditing",
    img: "https://i.ibb.co/DbpwPNd/service1.png",
    description:
      "Our Audit Process for smart contract is based on the comprehensive approach we follow to investigate the code for security flaws and potential vulnerabilities.",
    listItems: [
      {
        id: 1,
        itemName: "Ethereum ",
        logo: "",
      },
      {
        id: 2,
        itemName: "Polygon ",
        logo: "",
      },
      {
        id: 3,
        itemName: "BSC ",
        logo: "",
      },
      {
        id: 4,
        itemName: "Solana ",
        logo: "",
      },
      {
        id: 5,
        itemName: "EOS",
        logo: "",
      },
    ],
  },
  {
    id: 2,
    heading: "Blockchain Penetration Testing",
    img: "https://i.ibb.co/3ht13Qy/service2.png",
    description:
      "QuillAudits proven strategy to tackle vulnerabilities specific to blockchain technology comes with a mix-blend of conventional pentesting approach and dynamic blockchain analysis.",
  },
  {
    id: 3,
    heading: "Due Diligence",
    img: "https://i.ibb.co/L831dhY/service3.png",
    description:
      "QuillAudits acknowledges the significant threats involved in smart contracts, which can lead to many critical possibilities. ",
    listItems: [
      {
        id: 1,
        itemName: ". DeFi Due Diligence ",
        logo: "",
      },
      {
        id: 2,
        itemName: "NFT Due Diligence ",
        logo: "",
      },
      {
        id: 3,
        itemName: "Rug Pull Due Diligence",
        logo: "",
      },
    ],
  },
];

function Services() {
  return (
    <section className="my-16">
      {services.map((service) => (
        <Service id={service.id} service={service}></Service>
      ))}
    </section>
  );
}

export default Services;
