import { useState } from "react";
import PortfolioCard from "./PortfolioCard";
import { PortfolioRole, PORTFOLIOS } from "../../../public/data/portfolios";

const PortfolioDisplay = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState("Careers");
  
  const names = PORTFOLIOS.map(port => port.name);
  
  const portfolioMember = (name: string, role: PortfolioRole) => {
    return (
      <div>
        <p>{name}</p>
        <p>{role}</p>
      </div>
    );
  };
  
  return (
    <div>
      <div className="flex justify-between max-w-full h-10 my-6 snap-x snap-mandatory overflow-scroll hide-scrollbar">
        {names.map((name) => (
          <button 
            className={`grow text-center border border-white ${name === selectedPortfolio ? "bg-blue-400" : "bg-blue-700"} p-2`} 
            key={`btn-${name}`}
            onClick={() => setSelectedPortfolio(name)}
          >
            {name}
          </button>
        ))}
      </div>
      
      <PortfolioCard portfolio={PORTFOLIOS.find(port => port.name === selectedPortfolio) ?? PORTFOLIOS[0]} />
    </div>
  )
}

export default PortfolioDisplay;