import { useState } from "react";
import PortfolioCard from "./PortfolioCard";
import { PortfolioData } from "@/../public/data/members";

type PortfolioDisplayProps = {
  execs: PortfolioData[];
};

const PortfolioDisplay = ({ portfolios }: PortfolioDisplayProps) => {
  const [selectedPortfolio, setSelectedPortfolio] = useState("Careers");
  
  const names = portfolios.map(port => port.name);

  return (
    <div>
      <div className="flex justify-between max-w-full h-12 my-6 snap-x snap-mandatory overflow-y-hidden pb-1 
          [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2
          [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-thumb]:bg-gray-300">
        {names.map((name) => (
          <button 
            className={`grow text-center border border-white ${name === selectedPortfolio ? "bg-[#3977F9]" : ""} pb-2 p-1`} 
            key={`btn-${name}`}
            onClick={() => setSelectedPortfolio(name)}
          >
            {name}
          </button>
        ))}
      </div>
      
      <PortfolioCard portfolio={portfolios.find(port => port.name === selectedPortfolio) ?? portfolios[0]} />
    </div>
  )
}

export default PortfolioDisplay;