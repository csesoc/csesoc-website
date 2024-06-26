import { sponsorInfo } from '../../../public/data/data';

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
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={() => {
        props.setFalse();
      }}
    >
      <div className="bg-[#3977f8] relative w-[800px] h-[550px] m-10 rounded-xl flex flex-col items-center justify-center">
        <a className="m-10 w-4/5 flex flex-col items-center justify-center" href={props.sponsorInfo.href}>
          <img className='w-4/5 max-w-[500px] max-h-[200px]' src={`./${props.sponsorInfo.svg}`} alt={props.sponsorInfo.alt} />
        </a>
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
