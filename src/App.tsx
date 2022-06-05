import React from "react";
import DefaultCard from "./components/DefaultCard";
import { createGlobalStyle } from "styled-components";
import Hero from "./components/Hero";
import MagnifierIcon from "./assets/images/icon-supervisor.svg";
import HouseIcon from "./assets/images/icon-team-builder.svg";
import LightIcon from "./assets/images/icon-karma.svg";
import DesktopIcon from "./assets/images/icon-calculator.svg";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
  
    @media (min-width: 768px) {
      height: 100vh;
    }
    
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
  h1, p {
    color: #4d4f62;
  }
  
  h1 {
    font-weight: 600;
  }
  p {
    font-weight: 400;
    opacity: 0.5;
  }
  
`;

const SupervisorCard = styled(DefaultCard)`
  border-top: 5px solid #44d3d2;
`;
const TeamCard = styled(DefaultCard)`
  border-top: 5px solid #ea5454;
`;
const KarmaCard = styled(DefaultCard)`
  border-top: 5px solid #fcae4a;
`;
const CalculatorCard = styled(DefaultCard)`
  border-top: 5px solid #549ef2;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <header>
        <Hero />
      </header>
      <main>
        <div>
          <SupervisorCard image={MagnifierIcon} alt="magnifier">
            <h1> Supervisor </h1>
            <p>Monitors activity to identify project roadblocks</p>
          </SupervisorCard>
        </div>
        <div>
          <TeamCard image={HouseIcon} alt="house">
            <h1> Team Builder </h1>
            <p>
              Scans our talent network to create the optimal team for your
              project
            </p>
          </TeamCard>
          <KarmaCard image={LightIcon} alt="light bulb">
            <h1> Karma </h1>
            <p>Regularly evaluates our talent to ensure quality</p>
          </KarmaCard>
        </div>
        <div>
          <CalculatorCard image={DesktopIcon} alt="desktop computer">
            <h1> Calculator </h1>
            <p>
              Uses data from past projects to provide better delivery estimates
            </p>
          </CalculatorCard>
        </div>
      </main>
    </>
  );
}

export default App;
