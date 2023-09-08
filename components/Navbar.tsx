import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <div>
        <Image src="/assets/csesoc_logo.svg" alt="CSESoc Logo" width={200} height={200} draggable={false} />
        <p className="mt-3 text-xs">C:\INTERNAL STRUCTURE\HOME</p>
      </div>
      <div>
        <div className="md:flex xl:gap-36 lg:gap-20 md:gap-10 text-right font-bold hidden">
          <div>
            <p className="text-[0.6rem] text-[#C4C5C8]">01</p>
            <div>{"//"} about us</div>
          </div>
          <div>
            <p className="text-[0.6rem] text-[#C4C5C8]">02</p>
            <div>{"//"} events</div>
          </div>
          <div>
            <p className="text-[0.6rem] text-[#C4C5C8]">03</p>
            <div>{"//"} resources</div>
          </div>
          <div>
            <p className="text-[0.6rem] text-[#C4C5C8]">04</p>
            <div>{"//"} sponsors</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
