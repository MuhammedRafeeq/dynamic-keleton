type Props = {
  children: React.ReactNode;
  align?: string;
};

const Row = ({ children, align = "flex-start" }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: align,
      }}
    >
      {children}
    </div>
  );
};

export default Row;
