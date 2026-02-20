import { useState } from "react";
import { Exec } from "@/../public/data/members";

type ExecDisplayProps = {
  execs: Exec[];
};

const ExecDisplay = ({ execs }: ExecDisplayProps) => {
  return (
    <div className="my-5">
      <h2 className="text-xl font-bold mb-2">Execs</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {execs.map(exec => (
          <div>
            <div>
              <p>{exec.name}</p>
              <p className="text-gray-500">{exec.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExecDisplay;
