const PageTitle = ({ title }: { title: string }) => {
  return (
    <div className="text-center mt-10 mb-5">
      <h1 className="font-bold text-6xl">{title}</h1>
    </div>
  );
};

export default PageTitle;
