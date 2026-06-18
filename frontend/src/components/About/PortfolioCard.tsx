// import Image from 'next/image';
import { PortfolioData } from "@/../public/data/members";

interface PortfolioCardProps {
  portfolio: PortfolioData,
}

// NOTE: Profile pictures can be added in the future
const PortfolioCard = ({ portfolio }: PortfolioCardProps) => {
  return (
    <div>
      <p className="text-lg my-6">
        {portfolio.description}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {portfolio.members.map(member => (
          <div>
            {/* <Image
              src={member.imageUrl}
              alt={`${member.name} portrait`}
              width={150}
              height={150}
            /> */}
            
            <div>
              <p>{member.name}</p>
              <p className="text-gray-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioCard;