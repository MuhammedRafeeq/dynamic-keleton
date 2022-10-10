import Square from "./Square";

type Props = {
  width?: string | number;
  height?: number;
  background?: string;
  center?: boolean;
  style?: any;
  children?: React.ReactNode;
  repeat?: number;
  columnCount?: number;
  rowCount?: number;
  header?: boolean | true;
};

const Table = ({
  width = "100%",
  columnCount = 3,
  rowCount = 3,
  header = true,
}: Props) => {
  return (
    <div
      style={{
        width,
      }}
    >
      {Array(rowCount + (header ? 1 : 0))
        .fill(null)
        .map((_, rowIndex) => (
          <div
            key={`table_row_${rowIndex}`}
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {Array(columnCount)
              .fill(null)
              .map((_, colIndex) => (
                <Square
                  key={`table_cell_${colIndex}`}
                  style={{
                    margin: 2,
                  }}
                  height={rowIndex === 0 && header ? 54 : 36}
                />
              ))}
          </div>
        ))}
    </div>
  );
};

export default Table;
