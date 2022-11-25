import React from "react";
import Clients from "../Components/Clients/Clients";
import Header from "../Components/Header/Header";
import Mentions from "../Components/Mentions/Mentions";
import Portfolio from "../Components/Portfolio/Portfolio";
import Security from "../Components/Security/Security";
import Services from "../Components/Services/Services";
import WhyAreWeHare from "../Components/WhyAreWeHare/WhyAreWeHare";

function Home() {
  return (
    <>
      <Header></Header>
      <Clients></Clients>
      <Services></Services>
      <Security></Security>
      <Portfolio></Portfolio>
      <WhyAreWeHare></WhyAreWeHare>
      <Mentions></Mentions>
    </>
  );
}

export default Home;
