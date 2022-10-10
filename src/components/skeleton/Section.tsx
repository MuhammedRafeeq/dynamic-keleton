type Props = {
  contentReady: boolean;
  skeleton: React.ReactNode;
  children: React.ReactNode;
};

const Section = ({ contentReady = false, skeleton, children }: Props) => {
  if (contentReady) return children;

  return <div className="skeleton">{skeleton}</div>;
};

export default Section;
