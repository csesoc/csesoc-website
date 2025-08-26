import React from "react";

const PageBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <section className="pb-8 xl:px-24 sm:px-10 px-5">
        {children}
      </section>
    </div>
  );
}

export default PageBody;
