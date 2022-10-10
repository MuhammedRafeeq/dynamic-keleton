import Square from "./Square";

type Props = {
  width?: string | number;
  lineHeight?: number;
  background?: string;
  center?: boolean;
  style?: any;
  rowCount?: number;
};

const Paragraph = ({
  width = "100%",
  lineHeight = 8,
  rowCount = 3,
  style,
}: Props) => {
  return (
    <div
      style={{
        width,
      }}
    >
      {Array(rowCount)
        .fill(null)
        .map((_, colIndex) => (
          <Square
            key={`para_line_${colIndex}`}
            style={{
              margin: 6,
              ...style,
            }}
            height={lineHeight}
          />
        ))}
    </div>
  );
};

export default Paragraph;
