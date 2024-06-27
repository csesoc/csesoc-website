import { sponsorInfo } from '../../../public/data/data';
import {motion} from 'framer-motion'
export default function SponsorModal(props: { sponsorInfo: sponsorInfo | null; setFalse: () => void }) {
  if (props.sponsorInfo === null) {
    return (
      <div>
        <h1>Error no sponsor selected!</h1>
      </div>
    );
  }
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={() => {
        props.setFalse();
      }}
    >
      
      <div className="bg-[#3977f8] relative w-[800px] h-[550px] mb-10 mx-10 rounded-xl flex flex-col items-center justify-center">
        <motion.a 
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }} 
          className="w-4/5 m-10 flex flex-col items-center justify-center" 
          href={props.sponsorInfo.href}
          target="_blank"
        >
          <img className='w-4/5 max-w-[300px] max-h-[200px]' src={`./${props.sponsorInfo.svg}`} alt={props.sponsorInfo.alt} />
        </motion.a >
        <h3 className="mx-10 py-10">{props.sponsorInfo.description}</h3>
        <button
          onClick={props.setFalse}
          className="bg-white border absolute bottom-10 text-[#3977F8] border-[#A7A6E5] text-lg rounded-xl w-[70%] xl:h-12 h-10"
        >
          Close
        </button>
      </div>
    </div>
  );
} 
